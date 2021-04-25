import { Dispatch } from 'react'
import moment from 'moment'
import {
  ASTEROIDS_LIST_ERROR,
  ASTEROIDS_LIST_LOADED,
  ASTEROIDS_LIST_LOADING,
  ASTEROIDS_VIEW_LIST_UPDATE,
  ASTEROID_DETAILS_LOADED,
  DESTROYED_LIST_UPDATE,
  LIST_COUNTER_INC,
} from './actionTypes'
import {
  AsteroidListType,
  AsteroidsActionTypes,
  AsteroidType,
  DetailType,
} from './types'
import { API, APIkey } from '../api'

export const asteroidListRequested = () => ({
  type: ASTEROIDS_LIST_LOADING,
  payload: null,
})

export const asteroidListLoaded = (data: AsteroidListType) => ({
  type: ASTEROIDS_LIST_LOADED,
  payload: data,
})

export const asteroidListLoadErr = (msg: string) => ({
  type: ASTEROIDS_LIST_ERROR,
  payload: msg,
})

export const asteroidViewListUpdate = (arr: Array<AsteroidType>) => ({
  type: ASTEROIDS_VIEW_LIST_UPDATE,
  payload: arr,
})

export const listCounterInc = () => ({
  type: LIST_COUNTER_INC,
  payload: null,
})

export const destroyedListUpdate = (value: Array<AsteroidType>) => ({
  type: DESTROYED_LIST_UPDATE,
  payload: value,
})

export const saveAsteroidDetails = (data: Array<DetailType>) => ({
  type: ASTEROID_DETAILS_LOADED,
  payload: data,
})

export const fetchAsteroidList = (date?: string) => async (
  dispatch: Dispatch<AsteroidsActionTypes>
) => {
  dispatch(asteroidListRequested())
  try {
    const today = moment().format('YYYY-MM-DD')
    const response = await API.get('/feed', {
      params: {
        start_date: date || today,
        api_key: APIkey,
      },
    })
    if (date) {
      dispatch(listCounterInc())
    }
    dispatch(asteroidListLoaded(response.data.near_earth_objects))
  } catch (err) {
    dispatch(asteroidListLoadErr(err.message))
  }
}

export const fetchAsteroidDetails = (id: string) => async (
  dispatch: Dispatch<AsteroidsActionTypes>
) => {
  dispatch(asteroidListRequested())
  try {
    const response = await API.get(`/neo/${id}`, {
      params: {
        api_key: APIkey,
      },
    })
    dispatch(saveAsteroidDetails(response.data.close_approach_data))
  } catch (err) {
    dispatch(asteroidListLoadErr(err.message))
  }
}
