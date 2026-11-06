import { storeJson } from '../fileModels/store.json'
import { sdk } from '../sdk'
import { newPassword } from '../utils'

// The sign-in password is made once; a restore brings it back from the backup and an
// update keeps it.
export const seedPassword = sdk.setupOnInit(async (effects) => {
  const current = await storeJson.read((s) => s.dashboardPassword).once()
  if (!current)
    await storeJson.merge(effects, { dashboardPassword: newPassword() })
})
