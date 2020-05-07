import { getIsActiveMatrix } from './getIsActiveMatrix'
import { getActiveIdsPair } from './getActiveIdsPair'

import type { IsActiveProps, IsActiveComplex } from './types'

export type { IsActiveComplex } from './types'
export { EXAMPLE_IS_ACTIVE_COMPLEXES } from './testResources'

export const getIsActiveComplex = (isActiveProps: IsActiveProps): IsActiveComplex => {
  return {
    isActiveMatrix: getIsActiveMatrix(isActiveProps),
    ...getActiveIdsPair(isActiveProps),
  }
}
