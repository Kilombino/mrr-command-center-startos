import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

/**
 * The package's own state, at the root of the 'main' volume (outside /data, so the
 * dashboard never sees it): the sign-in password, made on install, shown by the
 * action Show password and replaced by Reset password. The dashboard gets it as
 * MRR_DASHBOARD_PASSWORD; it needs the cleartext, so the cleartext is kept here.
 */
export const storeJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: '/store.json' },
  z.looseObject({
    dashboardPassword: z.string().optional().catch(undefined),
  }),
)
