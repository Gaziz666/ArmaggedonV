import React from 'react'
import { useDispatch } from 'react-redux'
import { filterActions } from '../../features/filter'
import styles from './danger-checkbox.module.css'

const DangerCheckbox: React.FC = () => {
  const dispatch = useDispatch()
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterActions.dangerCheckboxChange(e.target.checked))
  }
  return (
    <div className={styles['checkbox-container']}>
      <label htmlFor="danger">
        <input
          type="checkbox"
          name="danger"
          id="danger"
          onChange={handleCheck}
        />
        <span className={styles['checkbox-text']}>Показать только опасные</span>
      </label>
    </div>
  )
}

export { DangerCheckbox }
