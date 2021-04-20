import { DANGER_CHECKBOX_CHANGE, DISTANCE_RADIO_CHANGE } from './actionTypes'
import { FilterActionTypes, Distance } from './types'

const initialState = {
  isDanger: false,
  distance: Distance.moon,
}

export default (state = initialState, action: FilterActionTypes) => {
  switch (action.type) {
    case DANGER_CHECKBOX_CHANGE:
      return { ...state, isDanger: action.payload }
    case DISTANCE_RADIO_CHANGE:
      return { ...state, distance: action.payload }
    default:
      return state
  }
}
