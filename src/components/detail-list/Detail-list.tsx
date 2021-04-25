import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DetailType } from '../../features/asteroids/types'
import { RootReducerType } from '../../store'
import { DetailItem } from '../detail-item/Detail-item'
import styles from './detail-list.module.css'

const DetailList: React.FC = () => {
  const detailArr = useSelector(
    (state: RootReducerType) => state.asteroidsState.asteroidDetails
  )
  const [detailList, setDetailList] = useState<JSX.Element[]>()

  useEffect(() => {
    const newDatalList = detailArr.map((item: DetailType) => {
      return <DetailItem detail={item} key={item.epoch_date_close_approach} />
    })
    setDetailList(newDatalList)
  }, [detailArr])

  return <div className={styles['list-container']}>{detailList}</div>
}

export { DetailList }
