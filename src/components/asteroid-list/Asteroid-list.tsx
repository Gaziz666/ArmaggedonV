import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  asteroidViewListUpdate,
  fetchAsteroidList,
  listCounterInc,
} from '../../features/asteroids/asteroidsActions'
import { scrollDown } from '../../features/filter/filterActions'
import { RootReducerType } from '../../store'
import { AsteroidItem } from '../asteroid-item/Asteroid-item'
import { Spinner } from '../spinner/Spinner'
import styles from './asteroid-list.module.css'

const AsteroidList: React.FC = () => {
  const asteroidsState = useSelector(
    (state: RootReducerType) => state.asteroidsState
  )
  const didMountAsteroidsArr = useRef(false)
  const didMountCounter = useRef(false)

  const { asteroidsArr, asteroidsData, listCounter, isLoading } = asteroidsState
  const filterState = useSelector((state: RootReducerType) => state.filterState)
  const { isDanger, scrollIsDown } = filterState
  const dispatch = useDispatch()
  const [asteroidsList, setList] = useState<JSX.Element[]>()

  useEffect(() => {
    if (Object.keys(asteroidsData).length === 0) {
      dispatch(fetchAsteroidList())
    }
  }, [])

  useEffect(() => {
    if (!didMountCounter.current) {
      didMountCounter.current = true
      return
    }
    let length = 0

    if (Object.keys(asteroidsData).length > 0) {
      length = Object.keys(asteroidsData).length
    }

    if (scrollIsDown && listCounter < length - 1) {
      dispatch(listCounterInc())
      dispatch(scrollDown(false))
    } else if (scrollIsDown && listCounter === length - 1 && !isLoading) {
      const dateList = Object.keys(asteroidsData).sort()
      const lastDate = dateList[listCounter]
      const nextDate = moment(lastDate).add(1, 'days').format('YYYY-MM-DD')

      dispatch(fetchAsteroidList(nextDate))
    }
  }, [scrollIsDown, listCounter, isDanger])

  useEffect(() => {
    if (!didMountAsteroidsArr.current) {
      didMountAsteroidsArr.current = true
      return
    }

    if (Object.keys(asteroidsData).length > 0 && !isLoading) {
      const dateList = Object.keys(asteroidsData).sort()
      dispatch(asteroidViewListUpdate(asteroidsData[dateList[listCounter]]))
    }
  }, [asteroidsData, listCounter])

  useEffect(() => {
    if (asteroidsArr) {
      const data = asteroidsArr
        .filter((asteroid) => {
          if (isDanger && asteroid.is_potentially_hazardous_asteroid) {
            return asteroid
          }
          if (isDanger && !asteroid.is_potentially_hazardous_asteroid) {
            return false
          }
          return asteroid
        })
        .map((asteroid) => (
          <AsteroidItem asteroid={asteroid} key={asteroid.id} />
        ))

      setList(data)
    }
  }, [asteroidsArr, isDanger])

  return (
    <>
      {asteroidsList}
      <div className={styles['spinner-wrapper']}>
        {isLoading ? <Spinner /> : null}
      </div>
    </>
  )
}

export { AsteroidList }
