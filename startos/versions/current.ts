import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.3.0:0',
  releaseNotes: {
    en_US:
      "MRR Command Center 1.3.0: add PyBLØCK orders made outside the panel (PyBLØCK's web or app, any payment method) by pasting the order id or its tracking link, and follow them like the others (measured on their worker if you give it, otherwise by payout address as an estimate); unpaid PyBLØCK invoices are shown as such instead of as an expired rental; extending an MRR rental no longer fails with \"too soon\" (the cost is estimated from the rig's current price) and MRR's refusal message is shown.",
    es_ES:
      'MRR Command Center 1.3.0: añade pedidos de PyBLØCK hechos fuera del panel (web o app de PyBLØCK, cualquier forma de pago) pegando el identificador o el enlace de seguimiento, y los sigue como los demás (medidos por su worker si lo indicas; si no, por la dirección de cobro, de forma aproximada); las facturas de PyBLØCK sin pagar se muestran como tales y no como un alquiler caducado; extender un alquiler de MRR ya no falla con «too soon» (el coste se calcula con el precio actual del rig) y se muestra el mensaje de MRR cuando lo rechaza.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
