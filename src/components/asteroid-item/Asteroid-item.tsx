import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { useHistory, useRouteMatch } from 'react-router-dom'
import 'moment/locale/ru'
import { AsteroidType } from '../../features/asteroids/types'
import styles from './asteroid-item.module.css'
import dinoImg from '../../assets/img/dino.svg'
import asteroidImg from '../../assets/img/meteorSvg.svg'
import { RootReducerType } from '../../store'
import { Distance, PageType } from '../../features/filter/types'
import { destroyedListUpdate } from '../../features/asteroids/asteroidsActions'
import { ButtonDanger } from '../button-danger/Button-danger'

type Props = {
  asteroid?: AsteroidType
}

const AsteroidItem: React.FC<Props> = (asteroid) => {
  const filter = useSelector((state: RootReducerType) => state.filterState)
  const destroyedList = useSelector(
    (state: RootReducerType) => state.asteroidsState.destroyedList
  )
  const dispatch = useDispatch()
  const history = useHistory()
  const match = useRouteMatch()
  const {
    name,
    is_potentially_hazardous_asteroid: isDanger,
    close_approach_data: distanceData,
    estimated_diameter: diameter,
    // eslint-disable-next-line react/destructuring-assignment
  } = asteroid.asteroid!

  moment.locale('ru')
  const date = moment(distanceData[0].close_approach_date).format(
    'DD MMMM YYYY'
  )
  const AsteroidName = name
    .split('')
    .filter((item) => item !== '(' && item !== ')')
    .join('')

  const standardSize = 186
  const asteroidImgSize = Math.round(
    (diameter.meters.estimated_diameter_max * 100) / standardSize
  )

  const toDestroy = () => {
    const mySet = new Set(destroyedList)
    mySet.add(asteroid.asteroid!)
    const newDestroyedList = Array.from(mySet)
    dispatch(destroyedListUpdate(newDestroyedList))
  }
  const toAsteroidDetail = () => {
    history.push(`${match.url}/:${asteroid.asteroid!.id}`)
  }

  return (
    <div
      className={`${styles['item-container']} ${
        isDanger ? styles['bcg-danger'] : styles['bcg-normal']
      }`}
    >
      <div
        className={`${styles['dino-block']} ${
          isDanger ? styles['dino-bcg-danger'] : styles['dino-bcg-normal']
        }`}
      >
        <div className={styles['asteroid-img-wrapper']}>
          <img
            src={asteroidImg}
            alt="meteor"
            width={`${asteroidImgSize}%`}
            height={`${asteroidImgSize}%`}
          />
        </div>
        <div className={styles.dino}>
          <img className={styles['dino-img']} src={dinoImg} alt="dino" />
        </div>
      </div>
      <div className={styles.info}>
        <h3
          className={styles['info-name']}
          onClick={toAsteroidDetail}
          aria-hidden
        >
          {AsteroidName}
        </h3>
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
          {filter.pageType === PageType.asteroids ? (
            <ButtonDanger handleClick={() => toDestroy()}>
              На уничтожение
            </ButtonDanger>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export { AsteroidItem }
