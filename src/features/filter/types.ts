interface DangerCheckboxChangeAction {
  type: string
  payload: boolean
}

interface DistanceRadioChangeActionChange {
  type: string
  payload: string
}

export type FilterActionTypes =
  | DangerCheckboxChangeAction
  | DistanceRadioChangeActionChange

export interface FilterState {
  isDanger: boolean
  distance: Distance
  scrollIsDown: boolean
  pageType: PageType
}

export enum Distance {
  km = 'KM',
  moon = 'MOON',
}

export enum PageType {
  asteroids = 'ASTEROID',
  destroyed = 'DESTROYED',
}
