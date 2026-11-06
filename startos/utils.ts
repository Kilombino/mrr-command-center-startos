import { T, utils } from '@start9labs/start-sdk'
import { sdk } from './sdk'

/** The dashboard's own port (MRR_PORT), the StartOS interface's internal port. */
export const uiPort = 7160
export const uiHostId = 'ui'
export const uiInterfaceId = 'ui'

/** Mountpoints in the dashboard's subcontainer. */
export const mnt = {
  /** The 'main' volume's `data` folder: config.json, state, audit.db (MRR_DATA_DIR). */
  data: '/data',
  /** DATUM's 'main' volume, `data` folder, read-only: its datum_gateway_config.json. */
  datum: '/datum',
} as const

/** The 'main' volume's subpath mounted at /data. The volume root keeps store.json. */
export const dataSubpath = 'data'

// DATUM Gateway (Horizon's package, any flavor): its config file and its web UI/API.
export const datumId = 'datum'
export const datumVolumeId = 'main'
export const datumConfigSubpath = 'data'
export const datumConfigFile = 'datum_gateway_config.json'
export const datumUiHostId = 'main'
export const datumUiPort = 7152

export const passwordHint =
  'La contraseña está en StartOS: Acciones, Mostrar contraseña.'

export const newPassword = () =>
  utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 24 })

/**
 * DATUM's web UI/API over the LXC bridge, as `http://host:port`. `.const()` restarts
 * main only when that address changes (install, uninstall, port change). `undefined`
 * while DATUM publishes no binding.
 */
export const datumGatewayUrl = async (effects: T.Effects) => {
  const bridge = await sdk.host
    .getBridgeAddress(effects, {
      packageId: datumId,
      hostId: datumUiHostId,
      internalPort: datumUiPort,
      ssl: false,
    })
    .const()
  return bridge == null ? undefined : `http://${bridge}`
}
