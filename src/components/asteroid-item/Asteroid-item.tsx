import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import 'moment/locale/ru'
import { AsteroidType } from '../../features/asteroids/types'
import styles from './asteroid-item.module.css'
import dinoImg from '../../assets/img/dino.svg'
import asteroidImg from '../../assets/img/meteor.png'
import { RootReducerType } from '../../store'
import { Distance } from '../../features/filter/types'

type Props = {
  asteroid: AsteroidType
}

const AsteroidItem: React.FC<Props> = (asteroid) => {
  const filter = useSelector((state: RootReducerType) => state.filterState)
  const {
    name,
    is_potentially_hazardous_asteroid: isDanger,
    close_approach_data: distanceData,
    estimated_diameter: diameter,
    // eslint-disable-next-line react/destructuring-assignment
  } = asteroid.asteroid

  moment.locale('ru')
  const date = moment(distanceData[0].close_approach_date).format(
    'DD MMMM YYYY'
  )
  const AsteroidName = name
    .split('')
    .filter((item) => item !== '(' && item !== ')')
    .join('')
  return (
    <div
      className={`${styles['item-container']} ${
        isDanger ? styles['bcg-danger'] : styles['bcg-normal']
      }`}
    >
      <div className={styles['dino-block']}>
        <div className={styles['asteroid-img-wrapper']}>
          <img src={asteroidImg} alt="meteor" />
        </div>
        <div className={styles.dino}>
          <img src={dinoImg} alt="dino" />
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles['info-name']}>{AsteroidName}</h3>
        <div className={styles['info-text-container']}>
          <div>Дата</div>
          <div />
          <div>{date}</div>
        </div>
        <div className={styles['info-text-container']}>
          <div>Растояние</div>
          <div />
          <div>
            {filter.distance === Distance.moon
              ? Math.round(+distanceData[0].miss_distance.lunar)
              : `${Math.round(+distanceData[0].miss_distance.kilometers)} км`}
          </div>
        </div>
        <div className={styles['info-text-container']}>
          <div>Размер</div>
          <div />
          <div>
            {Math.round(diameter.meters.estimated_diameter_max)}
            &nbsp;м
          </div>
        </div>
      </div>
      <div className={styles['danger-block']}>
        <div className={styles['danger-block-inner']}>
          <p>Оценка</p>
          <p className={styles.danger}>{isDanger ? 'опасен' : 'не опасен'}</p>
          <button type="button" className={styles.button}>
            На уничтожение
          </button>
        </div>
      </div>
    </div>
  )
}

export { AsteroidItem }
