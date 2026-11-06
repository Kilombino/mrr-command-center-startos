import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.0:0',
  releaseNotes: {
    en_US:
      'First release: rent BLAKE2b hashrate on MiningRigRentals by hand and audit each rental against your DATUM gateway.',
    es_ES:
      'Primera versión: alquila hashrate BLAKE2b en MiningRigRentals a mano y audita cada alquiler contra tu gateway DATUM.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
