import { ApparatusIds } from './Apparatus/types'
import { PositionIds } from './Position/types'
import { EXAMPLE_STRATA } from './testResources'

import { getHarpIds, getPositions, getHarpStrata} from './index'

test('getHarpIds function returns an array with \'major-diatonic\' as one of the values', () => {
  expect(getHarpIds().includes(ApparatusIds.MajorDiatonic)).toBeTruthy()
})

test('getPositions function returns an array with \'first\' as one of the values', () => {
  expect(getPositions().includes(PositionIds.First)).toBeTruthy()
})

test('getHarpStrata can return a first position major diatonic HarpStrata', () => {
  const { MAJOR_DIATONIC_FIRST_POSITION: expectedStrata } = EXAMPLE_STRATA
  const actualStrata = getHarpStrata(ApparatusIds.MajorDiatonic, PositionIds.First)

  expect(actualStrata).toStrictEqual(expectedStrata)
})

test('getHarpStrata can return a second position major diatonic HarpStrata', () => {
  const { MAJOR_DIATONIC_SECOND_POSITION: expectedStrata } = EXAMPLE_STRATA
  const actualStrata = getHarpStrata(ApparatusIds.MajorDiatonic, PositionIds.Second)

  expect(actualStrata).toStrictEqual(expectedStrata)
})
