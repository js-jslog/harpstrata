import { IsActiveIds } from '../../types'
import type { IsActiveProps } from '../../../types'
import { PitchIds, getPitch } from '../../../../Pitch'
import { DegreeIds, getDegree } from '../../../../Degree'

import { getMatrixGivenPitch, getMatrixGivenDegree,  } from './index'

const C = getPitch(PitchIds.C)
const D = getPitch(PitchIds.D)
const E = getPitch(PitchIds.E)
const F = getPitch(PitchIds.F)

const root = getDegree(DegreeIds.Root)
const second = getDegree(DegreeIds.Second)
const third = getDegree(DegreeIds.Third)
const fourth = getDegree(DegreeIds.Fourth)

const degreeMatrix = [
  [ root , second ],
  [ third, fourth ],
]
const pitchMatrix = [
  [ C, D ],
  [ E, F ],
]
const baseIsActiveProps: IsActiveProps = {
  degreeMatrix, pitchMatrix, activeIds: []
}

test('getMatrixGivenDegree returns a IsActiveMatrix using Degree objects', () => {
  const isActiveProps = { ...baseIsActiveProps, activeIds: [ DegreeIds.Root, DegreeIds.Fourth ] }
  const expectedIsActiveMatrix = [
    [ IsActiveIds.Active  , IsActiveIds.Inactive ],
    [ IsActiveIds.Inactive, IsActiveIds.Active   ],
  ]
  const actualIsActiveMatrix = getMatrixGivenDegree(isActiveProps)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})

test('getMatrixGivenPitch returns a IsActiveMatrix using Pitch objects', () => {
  const isActiveProps = { ...baseIsActiveProps, activeIds: [ PitchIds.D, PitchIds.E ] }
  const expectedIsActiveMatrix = [
    [ IsActiveIds.Inactive, IsActiveIds.Active   ],
    [ IsActiveIds.Active  , IsActiveIds.Inactive ],
  ]
  const actualIsActiveMatrix = getMatrixGivenPitch(isActiveProps)

  expect(actualIsActiveMatrix).toStrictEqual(expectedIsActiveMatrix)
})
