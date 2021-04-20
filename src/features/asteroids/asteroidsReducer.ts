import {
  ASTEROIDS_LIST_ERROR,
  ASTEROIDS_LIST_LOADED,
  ASTEROIDS_LIST_LOADING,
} from './actionTypes'
import { AsteroidsActionTypes } from './types'

const initialState = {
  isLoading: false,
  asteroidsData: null,
  errMsg: '',
}

export default (state = initialState, action: AsteroidsActionTypes) => {
  switch (action.type) {
    case ASTEROIDS_LIST_LOADING:
      return { ...state, isLoading: true }
    case ASTEROIDS_LIST_LOADED:
      return {
        ...state,
        asteroidsData: action.payload,
        isLoading: false,
        errMsg: '',
      }
    case ASTEROIDS_LIST_ERROR:
      return { ...state, errMsg: action.payload }
    default:
      return state
  }
}
