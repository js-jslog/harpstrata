import { ApparatusIds } from '../types'
import type { Apparatus } from '../types'
import type { InteractionMatrix } from '../Interaction'
import {
  BLOW,
  DRAW,
  BEND1, BEND2, BEND3,
  BLOWBEND1, BLOWBEND2,
} from '../Interaction'
import type { HalfstepIndexMatrix } from '../HalfstepIndex'

const halfstepIndexMatrix: HalfstepIndexMatrix = [
  //    1          2          3          4          5          6          7          8          9         10
  [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 34        ],
  [ undefined, undefined, undefined, undefined, undefined, undefined, 23       , undefined, 30       , 35        ],
  [ 0        , 3        , 7        , 12       , 15       , 19       , 24       , 27       , 31       , 36        ], // BLOW
  [ 2        , 7        , 10       , 14       , 17       , 21       , 22       , 26       , 29       , 33        ],
  [ 1        , 6        , 9        , 13       , 16       , 20       , undefined, undefined, undefined, undefined ],
  [ undefined, 5        , 8        , undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
  [ undefined, 4        , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
] as const

const interactionMatrix: InteractionMatrix = [
  //    1          2          3          4          5          6          7          8          9         10
  [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, BLOWBEND2 ],
  [ undefined, undefined, undefined, undefined, undefined, undefined, BLOWBEND1, undefined, BLOWBEND1, BLOWBEND1 ],
  [ BLOW     , BLOW     , BLOW     , BLOW     , BLOW     , BLOW     , BLOW     , BLOW     , BLOW     , BLOW      ],
  [ DRAW     , DRAW     , DRAW     , DRAW     , DRAW     , DRAW     , DRAW     , DRAW     , DRAW     , DRAW      ],
  [ BEND1    , BEND1    , BEND1    , BEND1    , BEND1    , BEND1    , undefined, undefined, undefined, undefined ],
  [ undefined, BEND2    , BEND2    , undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
  [ undefined, BEND3    , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
] as const

export const NATURAL_MINOR_APPARATUS: Apparatus = {
  id: ApparatusIds.NaturalMinor,
  halfstepIndexMatrix,
  interactionMatrix,
} as const
