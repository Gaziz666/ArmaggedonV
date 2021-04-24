import React from 'react'
import { AsteroidList } from '../../components/asteroid-list/Asteroid-list'
import { Filter } from '../../components/filters/Filters'
import styles from './asteroids.module.css'

const Asteroids: React.FC = () => {
  return (
    <section className={styles.section}>
      <Filter />
      <div className={styles['list-wrapper']}>
        <AsteroidList />
      </div>
    </section>
  )
}

export { Asteroids }
