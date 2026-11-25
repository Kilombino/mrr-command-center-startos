import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.6.1:0',
  releaseNotes: {
    en_US:
      "MRR Command Center 1.6.1: when the MRR pool profile you pick points at a pool's DATUM port (28915, the port your gateway uses to talk to its pool) the dashboard now says so beside the profile, instead of offering to save the pool as one of your gateways. Rentals sent there never reach your gateway: change the profile in MRR to your own stratum (your IP or domain and your DATUM's stratum port, e.g. 23334).",
    es_ES:
      'MRR Command Center 1.6.1: si el perfil de pool de MRR que eliges apunta al puerto DATUM de un pool (28915, el que usa tu gateway para hablar con el pool), el panel lo avisa junto al perfil en vez de proponer guardar el pool como gateway tuyo. Los alquileres enviados ahí nunca llegan a tu gateway: cambia el perfil en MRR a tu propio stratum (tu IP o dominio y el puerto stratum de tu DATUM, p. ej. 23334).',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
