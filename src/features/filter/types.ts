import { DANGER_CHECKBOX_CHANGE, DISTANCE_RADIO_CHANGE } from './actionTypes'

interface DangerCheckboxChangeAction {
  type: typeof DANGER_CHECKBOX_CHANGE
  payload: boolean
}

interface DistanceRadioChangeActionChange {
  type: typeof DISTANCE_RADIO_CHANGE
  payload: string
}

export type FilterActionTypes =
  | DangerCheckboxChangeAction
  | DistanceRadioChangeActionChange

export interface FilterState {
  isDanger: boolean
  distance: Distance
}

export enum Distance {
  km = 'KM',
  moon = 'MOON',
}
