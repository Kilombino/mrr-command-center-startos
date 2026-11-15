import { sdk } from './sdk'

// store.json (the sign-in password) and data/: config.json (the linked MRR key, the
// pool profile, settings), the dashboard's state, the audit database and pyblock.json
// (PyBLØCK orders, whose ids are secrets: mode 600).
export const { createBackup, restoreInit } = sdk.setupBackups(async () =>
  sdk.Backups.ofVolumes('main'),
)
