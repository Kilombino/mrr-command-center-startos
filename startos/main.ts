import { FileHelper, T, z } from '@start9labs/start-sdk'
import { mkdir } from 'fs/promises'
import { storeJson } from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import {
  dataSubpath,
  datumConfigFile,
  datumConfigSubpath,
  datumGatewayUrl,
  datumId,
  datumVolumeId,
  mnt,
  passwordHint,
  uiPort,
} from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting MRR Command Center'))

  await mkdir(sdk.volumes.main.subpath(dataSubpath), { recursive: true })

  // Reset password writes a new one: .const() restarts the dashboard with it.
  const password = await storeJson
    .read((s) => s.dashboardPassword)
    .const(effects)
  if (!password) throw new Error(i18n('The service has not been set up yet'))

  // DATUM's API over the LXC bridge (http://host:port), undefined while DATUM has no
  // binding; .const() restarts main when it appears or moves.
  const gatewayUrl = await datumGatewayUrl(effects)

  const sub = await sdk.SubContainer.eager(
    effects,
    { imageId: 'mrr-command-center' },
    sdk.Mounts.of()
      .mountVolume({
        volumeId: 'main',
        subpath: dataSubpath,
        mountpoint: mnt.data,
        readonly: false,
      })
      // DATUM's own config, read-only: the dashboard takes the API's admin password
      // from it (and the port, though MRR_GATEWAY_URL gives the bridge address).
      .mountDependency<T.SDKManifest>({
        dependencyId: datumId,
        volumeId: datumVolumeId,
        subpath: datumConfigSubpath,
        mountpoint: mnt.datum,
        readonly: true,
      }),
    'mrr-command-center',
  )

  // Restart when DATUM's admin password changes (its Reset Password action), and pass
  // it as MRR_GATEWAY_PASSWORD too, in case the file is not readable by uid 1000.
  const rootfs = await sub.rootfs
  const gatewayPassword = await FileHelper.json(
    `${rootfs}${mnt.datum}/${datumConfigFile}`,
    z.looseObject({
      api: z
        .looseObject({ admin_password: z.string().optional().catch(undefined) })
        .optional()
        .catch(undefined),
    }),
  )
    .read((c) => c.api?.admin_password)
    .const(effects)

  const env: Record<string, string> = {
    MRR_DATA_DIR: mnt.data,
    MRR_PACKAGED: '1',
    MRR_PORT: String(uiPort),
    MRR_DASHBOARD_PASSWORD: password,
    MRR_PASSWORD_HINT: passwordHint,
    MRR_DATUM_CONFIG: `${mnt.datum}/${datumConfigFile}`,
  }
  if (gatewayUrl) env.MRR_GATEWAY_URL = gatewayUrl
  if (gatewayPassword) env.MRR_GATEWAY_PASSWORD = gatewayPassword

  return (
    sdk.Daemons.of(effects)
      // The image runs as uid 1000: hand it /data (a new volume is root's).
      .addOneshot('chown', {
        subcontainer: sub,
        exec: {
          command: [
            'sh',
            '-c',
            `chown -R 1000:1000 ${mnt.data} && chmod 700 ${mnt.data}`,
          ],
          user: 'root',
        },
        requires: [],
      })
      .addDaemon('dashboard', {
        subcontainer: sub,
        exec: { command: sdk.useEntrypoint(), env },
        ready: {
          display: i18n('Web Interface'),
          // Any answer counts: the root is the sign-in page, served with 401.
          fn: () =>
            sdk.healthCheck.checkWebUrl(
              effects,
              `http://127.0.0.1:${uiPort}/`,
              {
                successMessage: i18n('The dashboard is ready'),
                errorMessage: i18n('The dashboard is not ready'),
              },
            ),
        },
        requires: ['chown'],
      })
  )
})
