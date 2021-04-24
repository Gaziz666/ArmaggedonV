import React from 'react'

import { DangerCheckbox } from '../danger-checkbox/Danger-checkbox'

import { DistanceRadio } from '../distance-radio/Distance-radio'
import styles from './filters.module.css'

const Filter: React.FC = () => {
  return (
    <div className={styles['checkbox-container']}>
      <div className={styles['input-wrapper']}>
        <DangerCheckbox />
      </div>
      <div className={styles['input-wrapper']}>
        <DistanceRadio />
      </div>
    </div>
  )
}

export { Filter }
