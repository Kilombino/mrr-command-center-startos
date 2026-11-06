import { sdk } from '../sdk'
import { resetPassword } from './resetPassword'
import { showPassword } from './showPassword'

export const actions = sdk.Actions.of()
  .addAction(showPassword)
  .addAction(resetPassword)
