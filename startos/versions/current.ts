import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.6.4:0',
  releaseNotes: {
    en_US:
      "MRR Command Center 1.6.1: when the MRR pool profile you pick points at a pool's DATUM port (28915, the port your gateway uses to talk to its pool) the dashboard now says so beside the profile, instead of offering to save the pool as one of your gateways. Rentals sent there never reach your gateway: change the profile in MRR to your own stratum (your IP or domain and your DATUM's stratum port, e.g. 23334).",
    es_ES:
      'MRR Command Center 1.6.4: gateway de respaldo para los pedidos de PyBLØCK. Junto a «Usar este» están «Usar como respaldo» y «Sin respaldo»: PyBLØCK pasa la potencia alquilada al respaldo mientras el principal no responde. Además, desde la 1.6.3, una base de auditoría dañada ya no impide arrancar el panel.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
