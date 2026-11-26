import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.6.2:0',
  releaseNotes: {
    en_US:
      "MRR Command Center 1.6.1: when the MRR pool profile you pick points at a pool's DATUM port (28915, the port your gateway uses to talk to its pool) the dashboard now says so beside the profile, instead of offering to save the pool as one of your gateways. Rentals sent there never reach your gateway: change the profile in MRR to your own stratum (your IP or domain and your DATUM's stratum port, e.g. 23334).",
    es_ES:
      'MRR Command Center 1.6.2: con un solo gateway guardado, un perfil de pool de MRR que mina a otro puerto ya no se toma por ese gateway, así que elegirlo ya no mueve los pedidos de PyBLØCK/P2Hash al stratum equivocado. Ese perfil sale como «sin gateway guardado»: guarda ese gateway (nombre, stratum y página de estado) para usarlo. Además, desde la 1.6.1 se avisa si un perfil apunta al puerto DATUM de un pool (28915).',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
