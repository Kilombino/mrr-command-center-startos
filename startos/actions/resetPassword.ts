import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { newPassword } from '../utils'

export const resetPassword = sdk.Action.withoutInput(
  'reset-password',

  async () => ({
    name: i18n('Reset password'),
    description: i18n(
      'Make a new sign-in password for the dashboard. The old one stops working; the linked MRR key and your settings are kept.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  async ({ effects }) => {
    const password = newPassword()
    // main reads it with .const(): a running dashboard restarts with the new one.
    await storeJson.merge(effects, { dashboardPassword: password })
    return {
      version: '1',
      title: i18n('Dashboard password'),
      message: i18n('Your new password is below.'),
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
