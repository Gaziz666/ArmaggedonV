import { DANGER_CHECKBOX_CHANGE, DISTANCE_RADIO_CHANGE } from './actionTypes'
import { Distance } from './types'

export const dangerCheckboxChange = (value: boolean) => ({
  type: DANGER_CHECKBOX_CHANGE,
  payload: value,
})

export const distanceRadioChange = (value: Distance) => ({
  type: DISTANCE_RADIO_CHANGE,
  payload: value,
})
