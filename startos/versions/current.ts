import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.2.0:0',
  releaseNotes: {
    en_US:
      "MRR Command Center 1.2.0: PyBLØCK rentals next to MRR (packages, manual orders with an invoice you pay from your own wallet, status, and what each rental really delivers to your gateway next to what PyBLØCK says); the price per TH/day you paid and the renewal price now on every rental; faces, stars and verdicts for PyBLØCK rentals too. Set your DATUM stratum as seen from the internet (host:port) and, optionally, a payout address on the dashboard's MRR API key card.",
    es_ES:
      'MRR Command Center 1.2.0: alquileres de PyBLØCK junto a los de MRR (paquetes, pedidos a mano con una factura que pagas tú desde tu wallet, estado, y lo que de verdad llega a tu gateway al lado de lo que dice PyBLØCK); el precio por TH/día que pagaste y el de renovar en cada alquiler; caras, estrellas y veredicto también para los alquileres de PyBLØCK. Pon el stratum de tu DATUM tal como se ve desde internet (host:puerto) y, si quieres, una dirección de cobro en la tarjeta Clave API de MRR del dashboard.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
