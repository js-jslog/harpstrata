import type { PozitionIds, Pozition } from '../types'
import { FIRST, SECOND, THIRD, FOURTH, FIFTH, SIXTH, SEVENTH, EIGHTH, NINTH, TENTH, ELEVENTH, TWELFTH } from '../constants'

const pozitionMap = new Map()
pozitionMap.set(FIRST.id, FIRST)
pozitionMap.set(EIGHTH.id, EIGHTH)
pozitionMap.set(THIRD.id, THIRD)
pozitionMap.set(TENTH.id, TENTH)
pozitionMap.set(FIFTH.id, FIFTH)
pozitionMap.set(TWELFTH.id, TWELFTH)
pozitionMap.set(SEVENTH.id, SEVENTH)
pozitionMap.set(SECOND.id, SECOND)
pozitionMap.set(NINTH.id, NINTH)
pozitionMap.set(FOURTH.id, FOURTH)
pozitionMap.set(ELEVENTH.id, ELEVENTH)
pozitionMap.set(SIXTH.id, SIXTH)

export const getOrderedPozitionIds = (): PozitionIds[] => Array.from(pozitionMap.keys())
export const getPozition = (pozitionId: PozitionIds): Pozition => pozitionMap.get(pozitionId)
