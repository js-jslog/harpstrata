import { ApparatusIds, Apparatus, InteractionMatrix, HalfstepIndexMatrix } from '../types'
import {
  BLOW,
  DRAW,
  BEND1,
  BEND2,
  BEND3,
  BLOWBEND1,
  BLOWBEND2,
  OVERDRAW1,
  OVERBLOW1,
} from '../Interaction/constants'

const halfstepIndexMatrix: HalfstepIndexMatrix = [
  [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 34        ],
  [ 3        , undefined, undefined, 15       , 18       , 22       , undefined, 27       , 30       , 35        ],
  [ 0        , 4        , 7        , 12       , 16       , 19       , 24       , 28       , 31       , 36        ],
  [ 2        , 7        , 11       , 14       , 17       , 21       , 23       , 26       , 29       , 33        ],
  [ 1        , 6        , 10       , 13       , undefined, 20       , 25       , undefined, 32       , 37        ],
  [ undefined, 5        , 9        , undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
  [ undefined, undefined, 8        , undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
] as const

const interactionMatrix: InteractionMatrix = [
  [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, BLOWBEND2 ],
  [ OVERBLOW1, undefined, undefined, OVERBLOW1, OVERBLOW1, OVERBLOW1, undefined, BLOWBEND1, BLOWBEND1, BLOWBEND1 ],
  [ BLOW     , BLOW     , BLOW     , BLOW     , BLOW     , BLOW     , BLOW     , BLOW     , BLOW     , BLOW      ],
  [ DRAW     , DRAW     , DRAW     , DRAW     , DRAW     , DRAW     , DRAW     , DRAW     , DRAW     , DRAW      ],
  [ BEND1    , BEND1    , BEND1    , BEND1    , undefined, BEND1    , OVERDRAW1, undefined, OVERDRAW1, OVERDRAW1 ],
  [ undefined, BEND2    , BEND2    , undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
  [ undefined, undefined, BEND3    , undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
] as const

export const MAJOR_DIATONIC_APPARATUS: Apparatus = {
  id: ApparatusIds.MajorDiatonic,
  halfstepIndexMatrix,
  interactionMatrix,
} as const
