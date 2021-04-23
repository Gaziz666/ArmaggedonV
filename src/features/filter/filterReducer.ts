import {
  DANGER_CHECKBOX_CHANGE,
  DISTANCE_RADIO_CHANGE,
  APP_SCROLL_DOWN,
  PAGE_CHANGE,
} from './actionTypes'
import { FilterActionTypes, Distance, PageType } from './types'

const initialState = {
  isDanger: false,
  distance: Distance.moon,
  scrollIsDown: true,
  pageType: PageType.asteroids,
}

export default (state = initialState, action: FilterActionTypes) => {
  switch (action.type) {
    case DANGER_CHECKBOX_CHANGE:
      return { ...state, isDanger: action.payload }
    case DISTANCE_RADIO_CHANGE:
      return { ...state, distance: action.payload }
    case APP_SCROLL_DOWN:
      return { ...state, scrollIsDown: action.payload }
    case PAGE_CHANGE:
      return { ...state, pageType: action.payload }
    default:
      return state
  }
}
