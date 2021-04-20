import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsteroidList } from '../../features/asteroids/asteroidsActions'
import { RootReducerType } from '../../store'
import { AsteroidItem } from '../asteroid-item/Asteroid-item'
// import styles from './asteroid-list.module.css'

const AsteroidList: React.FC = () => {
  const asteroidsObj = useSelector(
    (state: RootReducerType) => state.asteroidsState.asteroidsData
  )
  const dispatch = useDispatch()
  const [asteroidsList, setList] = useState<JSX.Element[]>()

  useEffect(() => {
    dispatch(fetchAsteroidList())
  }, [])

  let data = null
  useEffect(() => {
    if (asteroidsObj) {
      const dateList = Object.keys(asteroidsObj).sort()
      data = asteroidsObj[dateList[0]].map((asteroid) => (
        <AsteroidItem asteroid={asteroid} key={asteroid.id} />
      ))
      setList(data)
    }
  }, [asteroidsObj])

  return <>{asteroidsList}</>
}

export { AsteroidList }
