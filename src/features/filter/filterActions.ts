import {
  APP_SCROLL_DOWN,
  DANGER_CHECKBOX_CHANGE,
  DISTANCE_RADIO_CHANGE,
  PAGE_CHANGE,
} from './actionTypes'
import { Distance, PageType } from './types'

export const dangerCheckboxChange = (value: boolean) => ({
  type: DANGER_CHECKBOX_CHANGE,
  payload: value,
})

export const distanceRadioChange = (value: Distance) => ({
  type: DISTANCE_RADIO_CHANGE,
  payload: value,
})

export const scrollDown = (value: boolean) => ({
  type: APP_SCROLL_DOWN,
  payload: value,
})

export const pageChange = (value: PageType) => ({
  type: PAGE_CHANGE,
  payload: value,
})
