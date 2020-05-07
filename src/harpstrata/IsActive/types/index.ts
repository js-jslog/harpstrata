import type { ActiveIds } from '../getActiveIdsPair'
import type { PitchIds, PitchMatrix } from '../../Pitch'
import type { DegreeIds, DegreeMatrix } from '../../Degree'

export enum IsActiveIds {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type IsActiveRow = ReadonlyArray<IsActiveIds | undefined>
export type IsActiveMatrix = ReadonlyArray<IsActiveRow>

export interface IsActiveProps {
  degreeMatrix: DegreeMatrix;
  pitchMatrix: PitchMatrix;
  activeIds: ActiveIds;
}

export type IsActiveComplex = {
  isActiveMatrix: IsActiveMatrix;
  activeDegreeIds: ReadonlyArray<DegreeIds>;
  activePitchIds: ReadonlyArray<PitchIds>;
}
