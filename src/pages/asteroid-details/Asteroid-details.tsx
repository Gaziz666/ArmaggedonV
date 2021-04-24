import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { AsteroidItem } from '../../components/asteroid-item/Asteroid-item'
import { DetailList } from '../../components/detail-list/Detail-list'
import { Spinner } from '../../components/spinner/Spinner'
import { fetchAsteroidDetails } from '../../features/asteroids/asteroidsActions'
import { AsteroidType } from '../../features/asteroids/types'
import { RootReducerType } from '../../store'

const AsteroidDetails: React.FC = () => {
  const match = useRouteMatch<{ id: string }>()
  const [asteroid, setAsteroid] = useState<AsteroidType>()
  const asteroidsArr = useSelector(
    (state: RootReducerType) => state.asteroidsState.asteroidsArr
  )
  const isLoading = useSelector(
    (state: RootReducerType) => state.asteroidsState.isLoading
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const asteroidItem: AsteroidType | undefined = asteroidsArr.find((item) => {
      if (`:${item.id}` === match.params.id) {
        return item
      }
      return undefined
    })
    setAsteroid(asteroidItem)
    if (asteroidItem) {
      dispatch(fetchAsteroidDetails(asteroidItem!.links.self))
    }
  }, [])

  return (
    <>
      {asteroid ? <AsteroidItem asteroid={asteroid} /> : null}
      {isLoading ? <Spinner /> : <DetailList />}
    </>
  )
}

export { AsteroidDetails }
