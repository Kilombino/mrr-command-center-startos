import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.4.5:0',
  releaseNotes: {
    en_US:
      'MRR Command Center 1.4.5: you can save several public stratums for PyBLOCK and P2Hash, each with an optional name, and choose in a dropdown which one new orders and rentals use: for instance two ports of the same host running different gateways, one at a time, never mixed. Running orders keep mining where they started. Your current stratum becomes the first one of the list, and "Probar gateway" checks the one in use.',
    es_ES:
      'MRR Command Center 1.4.5: puedes guardar varios stratums públicos para PyBLØCK y P2Hash, cada uno con un nombre opcional, y elegir en un desplegable cuál usan los pedidos y alquileres nuevos: por ejemplo dos puertos del mismo host con gateways distintos, uno cada vez, nunca mezclados. Los pedidos en marcha siguen minando donde empezaron. Tu stratum actual pasa a ser el primero de la lista, y «Probar gateway» prueba el que está en uso.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
