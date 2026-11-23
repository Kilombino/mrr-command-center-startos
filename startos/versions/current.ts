import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.4.3:0',
  releaseNotes: {
    en_US:
      "MRR Command Center 1.4.3: the finished-rentals table shows how much MRR refunded (in the coin and as a % of what was paid, read from your MRR transactions) and whether a ticket was opened: stamped by the panel's ticket button, ticked by hand for tickets opened on MRR's site, or by the automatic ticket. The page is shorter: finished rentals, ASICs, the market (MRR and PyBLOCK, with its packages and P2Hash folding separately) and the logs are collapsible, closed by default, and each browser remembers what is open. The total gateway hashrate is always in the header.",
    es_ES:
      'MRR Command Center 1.4.3: la tabla de terminados muestra cuánto reembolsó MRR (en la moneda y en % de lo pagado, leído de tus movimientos de MRR) y si se abrió ticket: lo apunta el botón de ticket del panel, se marca a mano si lo abriste en la web de MRR, o el ticket automático. La página es más corta: terminados, ASICs, el mercado (MRR y PyBLØCK, con sus paquetes y P2Hash plegables por separado) y los logs se pliegan, cerrados de serie, y cada navegador recuerda lo que dejaste abierto. El hashrate total del gateway está siempre en la cabecera.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
