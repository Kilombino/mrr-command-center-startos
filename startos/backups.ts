import { sdk } from './sdk'

// store.json (the sign-in password) and data/: config.json (the linked MRR key, the
// pool profile, settings), the dashboard's state and the audit database.
export const { createBackup, restoreInit } = sdk.setupBackups(async () =>
  sdk.Backups.ofVolumes('main'),
)
