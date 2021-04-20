import React from 'react'
import { AsteroidList } from '../../components/asteroid-list/Asteroid-list'
import { DangerCheckbox } from '../../components/danger-checkbox/Danger-checkbox'
import { DistanceRadio } from '../../components/distance-radio/Distance-radio'
import styles from './asteroids.module.css'

const Asteroids: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles['checkbox-container']}>
        <div className={styles['input-wrapper']}>
          <DangerCheckbox />
        </div>
        <div className={styles['input-wrapper']}>
          <DistanceRadio />
        </div>
      </div>
      <AsteroidList />
    </section>
  )
}

export { Asteroids }
