import { datumDescription } from './manifest/i18n'
import { sdk } from './sdk'
import { datumId } from './utils'

// The dashboard reads DATUM's config file (its API port and admin password) and polls its
// API to measure what each rental delivers. Any version: DATUM ships flavored versions
// (#kilombino:…), and the config file and the UI port are the same in all of them.
const datum = sdk.Dependency.required(datumId, {
  description: datumDescription,
  metadata: {
    title: 'Datum Gateway',
    icon: 'https://raw.githubusercontent.com/Horizon-btc/datum-gateway-startos/master/icon.svg',
  },
  kind: 'running',
  versionRange: '*',
  healthChecks: ['datum'],
})

export const dependencies = sdk.Dependencies.of().addDependency(datum)
