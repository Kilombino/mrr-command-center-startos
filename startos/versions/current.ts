import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.4.2:0',
  releaseNotes: {
    en_US:
      "MRR Command Center 1.4.2: rent on P2Hash (PyBLOCK's hashrate market on Nostr) from the panel, each tranche paid in advance from a separate pay-only wallet connection (NWC) and only while your DATUM sees the hash; by default every tranche waits for your click, automatic payment needs the switch and both caps (off by default). P2Hash rentals show next to MRR's with face, verdict and per-tranche figures, a Stop button and history. PyBLOCK market rentals made on their web can be added (secret link, or the miner id as an estimate). Detected rentals without a worker are now measured by address.",
    es_ES:
      'MRR Command Center 1.4.2: alquila en P2Hash (el mercado de hashrate de PyBLØCK sobre Nostr) desde el panel, pagando cada tramo por adelantado desde una conexión de pago aparte (NWC) y solo mientras tu DATUM ve llegar el hash; por defecto cada tramo espera tu clic, el pago automático exige el interruptor y los dos topes (apagado de serie). Los alquileres P2Hash salen junto a los de MRR con cara, veredicto y cifras por tramo, botón Parar e historial. Se pueden añadir alquileres del market de PyBLØCK hechos en su web (enlace secreto, o el id del minero como estimación). Los alquileres detectados sin worker se miden ahora por dirección.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
