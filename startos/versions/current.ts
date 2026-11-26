import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.6.3:0',
  releaseNotes: {
    en_US:
      "MRR Command Center 1.6.1: when the MRR pool profile you pick points at a pool's DATUM port (28915, the port your gateway uses to talk to its pool) the dashboard now says so beside the profile, instead of offering to save the pool as one of your gateways. Rentals sent there never reach your gateway: change the profile in MRR to your own stratum (your IP or domain and your DATUM's stratum port, e.g. 23334).",
    es_ES:
      'MRR Command Center 1.6.3: una base de datos de auditoría dañada («file is not a database», p. ej. tras un corte de luz o un disco lleno) ya no impide que arranque el panel. Se aparta como audit.db.corrupt-<fecha> y se crea una nueva: el historial de auditoría (terminados, favoritos, lista negra, marcas de ticket) empieza de cero; claves, ajustes y gateways se conservan.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
