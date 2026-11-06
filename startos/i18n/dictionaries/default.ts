export const DEFAULT_LANG = 'en_US'

const dict = {
  'Starting MRR Command Center': 0,
  'The service has not been set up yet': 1,
  'Web Interface': 2,
  'The dashboard is ready': 3,
  'The dashboard is not ready': 4,
  Dashboard: 5,
  'Rent hashrate on MiningRigRentals and audit what each rental delivers to your DATUM gateway': 6,
  'Show password': 7,
  "The dashboard's sign-in password": 8,
  'Dashboard password': 9,
  'Sign in to the dashboard with this password.': 10,
  'Reset password': 11,
  "Make a new sign-in password for the dashboard. The old one stops working; the linked MRR key and your settings are kept.": 12,
  'Your new password is below.': 13,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
