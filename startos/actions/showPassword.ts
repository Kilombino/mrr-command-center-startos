import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const showPassword = sdk.Action.withoutInput(
  'show-password',

  async () => ({
    name: i18n('Show password'),
    description: i18n("The dashboard's sign-in password"),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  async () => {
    const password = await storeJson.read((s) => s.dashboardPassword).once()
    if (!password) throw new Error(i18n('The service has not been set up yet'))
    return {
      version: '1',
      title: i18n('Dashboard password'),
      message: i18n('Sign in to the dashboard with this password.'),
      result: {
        type: 'single',
        value: password,
        masked: true,
        copyable: true,
        qr: false,
        launchable: false,
      },
    }
  },
)
