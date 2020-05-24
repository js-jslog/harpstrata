export type { HarpStrataProps, HarpStrata } from './HarpStrata'
export { getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from './HarpStrata'

export { ApparatusIds, InteractionIds } from './Apparatus'
export type {
  Apparatus,
  Interaction, InteractionRow, InteractionMatrix,
  HalfstepIndex , HalfstepIndexRow, HalfstepIndexMatrix,
} from './Apparatus'

export { DegreeIds } from './Degree'
export type { Degree, DegreeRow, DegreeMatrix } from './Degree'

export { PozitionIds, determinePozitionId } from './Pozition'
export type { Pozition } from './Pozition'

export { PitchIds, determineHarpKeyId, determineRootPitchId } from './Pitch'
export type { Pitch } from './Pitch'

export { IsActiveIds } from './IsActive'
export type {
  ActiveDegreeIds, ActivePitchIds, ActiveIds,
  IsActiveMatrix , IsActiveRow   , IsActiveComplex
} from './IsActive'
