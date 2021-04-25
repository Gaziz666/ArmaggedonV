import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ButtonDanger } from '../../components/button-danger/Button-danger'
import { DestroyedList } from '../../components/destroyed-list/Destroyed-list'
import { Filter } from '../../components/filters/Filters'
import { destroyedListUpdate } from '../../features/asteroids/asteroidsActions'
import explosionGif from '../../assets/img/explosion.gif'
import styles from './destroyed-page.module.css'

const DestroyedPage: React.FC = () => {
  const [explosion, setExplosion] = useState<JSX.Element>()
  const dispatch = useDispatch()

  const runExplosion = () => {
    return <img src={explosionGif} alt="explosion" />
  }

  const sendBrigada = () => {
    dispatch(destroyedListUpdate([]))
    setExplosion(runExplosion())
    setTimeout(() => {
      setExplosion(<div />)
    }, 2000)
  }

  return (
    <section className={styles.section}>
      <Filter />
      <div className={styles['explosion-wrapper']}>{explosion}</div>
      <div className={styles['list-wrapper']}>
        <DestroyedList />
      </div>
      <div className={styles['button-wrapper']}>
        <ButtonDanger handleClick={() => sendBrigada()}>
          Отправить бригаду Брюса Уйлиса
        </ButtonDanger>
      </div>
    </section>
  )
}

export { DestroyedPage }
