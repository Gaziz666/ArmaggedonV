import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducerType } from '../../store'
import { AsteroidItem } from '../asteroid-item/Asteroid-item'

const DestroyedList: React.FC = () => {
  const destroyedArr = useSelector(
    (state: RootReducerType) => state.asteroidsState.destroyedList
  )
  const isDanger = useSelector(
    (state: RootReducerType) => state.filterState.isDanger
  )

  const renderDestroyedList = () => {
    return destroyedArr
      .filter((asteroid) => {
        if (isDanger && asteroid.is_potentially_hazardous_asteroid) {
          return asteroid
        }
        if (isDanger && !asteroid.is_potentially_hazardous_asteroid) {
          return false
        }
        return asteroid
      })
      .map((asteroid) => <AsteroidItem asteroid={asteroid} key={asteroid.id} />)
  }
  return <>{renderDestroyedList()}</>
}

export { DestroyedList }
