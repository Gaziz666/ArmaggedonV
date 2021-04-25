interface AsteroidListRequestedActionType {
  type: string
  payload: null
}

interface AsteroidListLoadedActionType {
  type: string
  payload: AsteroidListType
}

interface AsteroidListLoadErrActionType {
  type: string
  payload: string
}

interface AsteroidViewListActionType {
  type: string
  payload: Array<AsteroidType>
}

interface DestroyedListActionType {
  type: string
  payload: AsteroidType
}

interface DetailListActionType {
  type: string
  payload: Array<DetailType>
}

export type AsteroidsActionTypes =
  | AsteroidListLoadedActionType
  | AsteroidListRequestedActionType
  | AsteroidListLoadErrActionType
  | AsteroidViewListActionType
  | DestroyedListActionType
  | DetailListActionType

export interface AsteroidsState {
  isLoading: boolean
  asteroidsData: AsteroidListType
  asteroidsArr: Array<AsteroidType>
  errMsg: string
  listCounter: number
  destroyedList: Array<AsteroidType>
  asteroidDetails: Array<DetailType>
}

export type AsteroidListType = {
  [key: string]: Array<AsteroidType>
}

export type AsteroidType = {
  links: {
    self: string
  }
  id: string
  neo_reference_id: string
  name: string
  nasa_jpl_url: string
  absolute_magnitude_h: number
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number
      estimated_diameter_max: number
    }
    meters: {
      estimated_diameter_min: number
      estimated_diameter_max: number
    }
    miles: {
      estimated_diameter_min: number
      estimated_diameter_max: number
    }
    feet: {
      estimated_diameter_min: number
      estimated_diameter_max: number
    }
  }
  is_potentially_hazardous_asteroid: boolean
  close_approach_data: Array<DetailType>
  is_sentry_object: boolean
}

export type DetailType = {
  close_approach_date: string
  close_approach_date_full: string
  epoch_date_close_approach: number
  relative_velocity: {
    kilometers_per_second: string
    kilometers_per_hour: string
    miles_per_hour: string
  }
  miss_distance: {
    astronomical: string
    lunar: string
    kilometers: string
    miles: string
  }
  orbiting_body: string
}
