import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.5.0:0',
  releaseNotes: {
    en_US:
      'MRR Command Center 1.5.0: price alerts by private Nostr message. In the new collapsible section at the end, enter your npub and a threshold (your unit per TH per day, MRR\'s fee included unless unticked), with optional filters (minimum TH/s and hours, online only, favourites only). When a rig on the market drops below it, the dashboard sends you a NIP-17 private message from its own Nostr key, readable in any NIP-17 client (Amethyst, 0xchat, Primal...): no Telegram, no central server. One message per rig until it goes back above and crosses again, remembered across restarts; blacklisted rigs never alert. Off by default; "Enviar prueba" sends a test.',
    es_ES:
      'MRR Command Center 1.5.0: avisos de precio por mensaje privado de Nostr. En la nueva sección plegable del final pones tu npub y un umbral (tu unidad por TH y día, con la comisión de MRR salvo que la desmarques), con filtros opcionales (TH/s y horas mínimas, solo en línea, solo favoritos). Cuando un rig del mercado baja del umbral, el panel te manda un mensaje privado NIP-17 desde su propia clave Nostr, que lees en cualquier cliente (Amethyst, 0xchat, Primal…): sin Telegram ni servidor central. Un aviso por rig hasta que vuelva a subir y cruzar otra vez, recordado aunque reinicies; los rigs de la lista negra nunca avisan. Viene apagado; «Enviar prueba» manda uno de prueba.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
