import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.6.0:0',
  releaseNotes: {
    en_US:
      'MRR Command Center 1.6.0: several DATUM gateways, for instance your DATUM and the gateway of a PyBLOCK PATUM install (stratum 23334, 23335..., status page 7152, 7153...). In the new card "Tus gateways" each one has a name, its stratum and its status page; each MRR pool profile shows the host:port it mines to and its gateway, and picking a profile also moves PyBLOCK/P2Hash orders to that stratum. Every rental shows where it mines, and a selector at the top ("Todos" or one gateway) filters rentals, hashrate, ASICs and the audit to that gateway. With a single gateway the dashboard looks as before.',
    es_ES:
      'MRR Command Center 1.6.0: varios gateways DATUM, por ejemplo tu DATUM y el gateway de una instalación PATUM de PyBLØCK (stratum 23334, 23335…, página de estado 7152, 7153…). En la nueva tarjeta «Tus gateways» cada uno lleva un nombre, su stratum y su página de estado; cada perfil de pool de MRR muestra a qué host:puerto mina y su gateway, y al elegir un perfil los pedidos de PyBLØCK/P2Hash pasan también a ese stratum. Cada alquiler muestra adónde mina, y un selector arriba («Todos» o un gateway) filtra alquileres, hashrate, ASICs y el cotejo a ese gateway. Con un solo gateway el panel se ve como antes.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
