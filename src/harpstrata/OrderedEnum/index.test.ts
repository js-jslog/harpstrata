import { PozitionIds } from '../Pozition'
import { PitchIds } from '../Pitch'
import { DegreeIds } from '../Degree'

import { getOrderedEnum, getDescendingEnum } from './index'


test('returns the values from the PozitionIds enum defaulting to First', () => {
  const {
    First, Eighth, Third, Tenth, Fifth, Twelfth,
    Seventh, Second, Ninth, Fourth, Eleventh, Sixth,
  } = PozitionIds
  const expectedArray = [
    First, Eighth, Third, Tenth, Fifth, Twelfth,
    Seventh, Second, Ninth, Fourth, Eleventh, Sixth,
  ]
  expect(getOrderedEnum(PozitionIds)).toStrictEqual(expectedArray)
})

test('returns the values from the DegreeIds enum from the parameterised origin', () => {
  const {
    Root, Flat2, Second, Flat3, Third, Fourth,
    Flat5, Fifth, Flat6, Sixth, Flat7, Seventh,
  } = DegreeIds
  const expectedArray = [
    Flat5, Fifth, Flat6, Sixth, Flat7, Seventh,
    Root, Flat2, Second, Flat3, Third, Fourth
  ]
  expect(getOrderedEnum(DegreeIds, Flat5)).toStrictEqual(expectedArray)
})

test('returns the descending DegreeIds enum from the parameterised origin', () => {
  const { C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B } = PitchIds
  const expectedArray = [ A, Ab, G, Gb, F, E, Eb, D, Db, C, B, Bb ]
  expect(getDescendingEnum(PitchIds)).toStrictEqual(expectedArray)
})
