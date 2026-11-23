import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.4.4:0',
  releaseNotes: {
    en_US:
      'MRR Command Center 1.4.4: the market has a blacklist. A rig goes on it by itself when a rental of it ends with the sad face (less than 95 % of what was paid reached your gateway) or when a ticket is opened for it (by hand, from the ticket dialog, or by the automatic notice at the end). The market keeps showing it in red with a tag that says why and asks again before renting it; a switch hides them. The thumbs-down next to the star puts a rig on the list or takes it off by hand, and the finished rentals section lists them so you can remove them. The first start fills the list from the rentals already in your history.',
    es_ES:
      'MRR Command Center 1.4.4: el mercado tiene lista negra. Un rig entra solo cuando un alquiler suyo termina con la cara triste (llegó a tu gateway menos del 95 % de lo pagado) o cuando se le abre ticket (a mano, desde el diálogo del ticket o con el aviso automático al terminar). El mercado lo sigue mostrando en rojo con una etiqueta que dice por qué y te vuelve a preguntar antes de alquilarlo; un interruptor los oculta. El 👎 junto a la estrella mete o saca un rig a mano, y la sección de terminados los lista para quitarlos. El primer arranque rellena la lista con los alquileres que ya tienes en el historial.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
