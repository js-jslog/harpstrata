import type { CovariantControlVars, CovariantSet } from '../types'
import { isHarpKeyControlVars, isRootPitchControlVars, isPozitionControlVars } from '../types'
import { deduceRootPitchId } from '../deduceRootPitchId'
import { deducePozitionId } from '../deducePozitionId'
import { deduceHarpKeyId } from '../deduceHarpKeyId'


export const getCovariants = (controlVariables: CovariantControlVars): CovariantSet => {
  if (isHarpKeyControlVars(controlVariables)) {
    const { rootPitchId, pozitionId } = controlVariables
    const harpKeyId = deduceHarpKeyId(controlVariables)

    return { harpKeyId, pozitionId, rootPitchId }
  } else if (isPozitionControlVars(controlVariables)) {
    const { rootPitchId, harpKeyId } = controlVariables
    const pozitionId = deducePozitionId(controlVariables)

    return { harpKeyId, pozitionId, rootPitchId }
  } else if (isRootPitchControlVars(controlVariables)) {
    const { harpKeyId, pozitionId } = controlVariables
    const rootPitchId = deduceRootPitchId(controlVariables)

    return { harpKeyId, pozitionId, rootPitchId }
  }

  const errorMessage = `
    Input args did not meet control variable expectations.

    Input: ${JSON.stringify(controlVariables)}

    Two of the CovariantSet properties need to be defined.
  `
  throw new Error(errorMessage)
}
