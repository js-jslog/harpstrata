import type { HarpStrataProps, HarpStrata } from '../types'
import { getPozitionRootOffset } from '../../Pozition'
import { getPitchMatrix, getPitch, deduceRootPitchId } from '../../Pitch'
import { getIsActiveComplex } from '../../IsActive'
import { getDegreeMatrix } from '../../Degree'
import { getApparatus } from '../../Apparatus'

export const getHarpStrata = (props: HarpStrataProps): HarpStrata => {
  const { apparatusId, pozitionId, harpKeyId, activeIds } = props

  const apparatus = getApparatus(apparatusId)
  const pozitionRoot = getPozitionRootOffset(pozitionId)
  const pitch = getPitch(harpKeyId)

  const { halfstepIndexMatrix } = apparatus
  const { id: pitchId } = pitch

  const degreeMatrix = getDegreeMatrix(halfstepIndexMatrix, pozitionRoot)
  const pitchMatrix = getPitchMatrix(halfstepIndexMatrix, pitchId)
  const isActiveComplex = getIsActiveComplex({degreeMatrix, pitchMatrix, activeIds: activeIds })

  const rootPitchId = deduceRootPitchId({pozitionId, harpKeyId})

  return {
    apparatus,
    degreeMatrix,
    pitchMatrix,
    isActiveComplex,
    pozitionId,
    rootPitchId,
    harpKeyId,
  }
}
