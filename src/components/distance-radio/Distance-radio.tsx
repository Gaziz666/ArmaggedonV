import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterActions } from '../../features/filter'
import { Distance } from '../../features/filter/types'
import { RootReducerType } from '../../store'
import styles from './distance-radio.module.css'

const DistanceRadio: React.FC = () => {
  const distance = useSelector(
    (state: RootReducerType) => state.filterState.distance
  )
  const dispatch = useDispatch()
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterActions.distanceRadioChange(e.target.value as Distance))
  }
  return (
    <div className={styles['checkbox-container']}>
      <span>Расстояние в </span>
      <label htmlFor="distance1">
        <input
          className={styles['radio-input']}
          type="radio"
          name="distance"
          id="distance1"
          value={Distance.km}
          checked={distance === Distance.km}
          onChange={handleCheck}
        />
        <span className={styles['checkbox-text']}>километрах</span>
        ,&nbsp;
      </label>
      <br className={styles.break} />
      <label htmlFor="distance2">
        <input
          className={styles['radio-input']}
          type="radio"
          name="distance"
          id="distance2"
          checked={distance === Distance.moon}
          value={Distance.moon}
          onChange={handleCheck}
        />
        <span className={styles['checkbox-text']}>в дистанциях до луны</span>
      </label>
    </div>
  )
}

export { DistanceRadio }
