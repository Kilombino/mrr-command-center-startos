import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.4.0:0',
  releaseNotes: {
    en_US:
      "MRR Command Center 1.4.0: rentals that underdeliver get an \"Abrir ticket\" button with the evidence (paid, what MRR says, what reached your DATUM) ready to paste and the rental opened on MRR (MRR has no ticket API), also on finished rentals while MRR's 12-hour claim window is open; an optional automatic notice (off by default) that keeps the evidence, alerts you and can post it on the rental's message thread for the owner, once per rental; a delete button on each history entry; PyBLØCK orders kept in the history too; hashrate from PyBLØCK market and other rental markets (p2phash, TideHash, RouteHash) shown as detected; fixes for rentals taken for finished while still running, double-escaped rig names and renewal prices lost to MRR's rate limit.",
    es_ES:
      'MRR Command Center 1.4.0: los alquileres que entregan poco tienen un botón «Abrir ticket» con las pruebas (pagado, lo que dice MRR, lo que llega a tu DATUM) listas para pegar y el alquiler abierto en MRR (MRR no tiene API de tickets), también en los terminados mientras dura el plazo de 12 h de MRR; aviso automático opcional (apagado de serie) que guarda las pruebas, te avisa y puede publicarlas en el hilo del alquiler para el dueño, una vez por alquiler; botón para borrar cada entrada del historial; los pedidos de PyBLØCK también quedan en el historial; el hashrate de PyBLØCK market y de otros mercados (p2phash, TideHash, RouteHash) aparece como detectado; arreglados los alquileres que se daban por terminados sin haber acabado, los nombres de rig con símbolos escapados dos veces y los precios de renovar que se perdían por el límite de la API de MRR.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
