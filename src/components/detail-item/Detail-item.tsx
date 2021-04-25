import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'
import { DetailType } from '../../features/asteroids/types'
import { Distance } from '../../features/filter/types'
import { RootReducerType } from '../../store'
import styles from './detail-item.module.css'

type Props = {
  detail: DetailType
}

const DetailItem: React.FC<Props> = ({ detail }: Props) => {
  const distance = useSelector(
    (state: RootReducerType) => state.filterState.distance
  )
  const {
    relative_velocity: velocity,
    miss_distance: misDistance,
    epoch_date_close_approach: dateMs,
    orbiting_body: orbit,
  } = detail

  moment.locale('ru')
  const date = moment(dateMs).format('DD MMMM YYYY HH:MM')

  return (
    <div className={styles.info}>
      <div className={styles['info-text-container']}>
        <div>Дата и время максимального сближения с Землей: </div>
        <div />
        <div>{date}</div>
      </div>

      <div className={styles['info-text-container']}>
        <div>Скорость:</div>
        <div />
        <div>
          {Math.round(Number(velocity.kilometers_per_second))}
          &nbsp;км/с
        </div>
      </div>

      <div className={styles['info-text-container']}>
        <div>Расстояние до земли:</div>
        <div />
        <div>
          {distance === Distance.moon
            ? `${Math.round(+misDistance.lunar)} л`
            : `${Math.round(+misDistance.kilometers)} км`}
        </div>
      </div>

      <div className={styles['info-text-container']}>
        <div>Орбита:</div>
        <div />
        <div>{orbit}</div>
      </div>
    </div>
  )
}

export { DetailItem }
