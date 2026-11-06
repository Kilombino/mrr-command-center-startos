import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiHostId, uiInterfaceId, uiPort } from './utils'

// The dashboard has its own sign-in (MRR_DASHBOARD_PASSWORD), so the port is not gated
// at the proxy.
export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const uiOrigin = await sdk.MultiHost.of(effects, uiHostId).bindPort(uiPort, {
    protocol: 'http',
  })

  const ui = sdk.createInterface(effects, {
    name: i18n('Dashboard'),
    id: uiInterfaceId,
    description: i18n(
      'Rent hashrate on MiningRigRentals and audit what each rental delivers to your DATUM gateway',
    ),
    type: 'ui',
    schemeOverride: null,
    masked: false,
    username: null,
    path: '',
    query: {},
  })

  return [await uiOrigin.export([ui])]
})
