import { Dispatch } from 'react'
import moment from 'moment'
import {
  ASTEROIDS_LIST_ERROR,
  ASTEROIDS_LIST_LOADED,
  ASTEROIDS_LIST_LOADING,
} from './actionTypes'
import { AsteroidListType, AsteroidsActionTypes } from './types'
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

export const fetchAsteroidList = () => async (
  dispatch: Dispatch<AsteroidsActionTypes>
) => {
  dispatch(asteroidListRequested())
  try {
    const today = moment().format('YYYY-MM-DD')
    console.log(today)
    const response = await API.get('/feed', {
      params: {
        start_date: today,
        api_key: APIkey,
      },
    })
    dispatch(asteroidListLoaded(response.data.near_earth_objects))
  } catch (err) {
    dispatch(asteroidListLoadErr(err.message))
  }
}
