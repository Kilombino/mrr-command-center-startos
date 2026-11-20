import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.4.1:0',
  releaseNotes: {
    en_US:
      "MRR Command Center 1.4.1: the automatic ticket now follows MRR's policy: it looks at a rental only after it ends, inside MRR's 12-hour window and after MRR's own review (8.5 h), flags it when the final delivery is below 100 % beyond statistical noise (3 sigmas), skips rentals MRR already refunded, and sends you the ticket text with the time left; posting the evidence to the owner is a separate option. The mid-rental part is now an optional early message to the owner. Your own miners (for example a rig listed on PyBLØCK market that comes back to your gateway) are no longer shown as rentals: mark them with \"es mío\".",
    es_ES:
      'MRR Command Center 1.4.1: el ticket automático sigue la política de MRR: mira el alquiler solo al terminar, dentro de las 12 h de MRR y tras su propia revisión (8,5 h), avisa si la entrega final queda por debajo del 100 % más allá del ruido estadístico (3 sigmas), se salta los que MRR ya reembolsó y te manda el texto del ticket con el tiempo que te queda; publicar las pruebas al dueño es una opción aparte. A medio alquiler solo queda un aviso opcional al dueño. Tus propios mineros (p. ej. un rig que pones en PyBLØCK market y vuelve a tu gateway) ya no salen como alquiler: márcalos con «es mío».',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
