import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.0:0',
  releaseNotes: {
    en_US:
      'MRR Command Center 1.1.0: your MRR balance as a pill in the header, always visible; minutes when less than an hour of a rental is left; a star under each rental\'s face to keep its rig as a favourite; market columns RPI, Perf 24 h and Perf 30 min coloured like the sparkline, with the best buy always in the table.',
    es_ES:
      'MRR Command Center 1.1.0: tu saldo de MRR en una pastilla del cabecero, siempre a la vista; minutos cuando a un alquiler le queda menos de una hora; una estrella bajo la cara de cada alquiler para guardar su rig en favoritos; columnas de mercado RPI, Perf 24 h y Perf 30 min coloreadas como la gráfica, con la mejor compra siempre en la tabla.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
