export enum PitchIds {
  A = 'A',
  Bb = 'Bb',
  B = 'B',
  C = 'C',
  Db = 'Db',
  D = 'D',
  Eb = 'Eb',
  E = 'E',
  F = 'F',
  Gb = 'Gb',
  G = 'G',
  Ab = 'Ab',
}

export type Pitch = {
  readonly id: PitchIds;
}

export type PitchRow = ReadonlyArray<Pitch | undefined>
export type PitchMatrix = ReadonlyArray<PitchRow>

export const isPitchId = (idIn: string): idIn is PitchIds => {
  return Object.values(PitchIds).includes(idIn as PitchIds)
}
