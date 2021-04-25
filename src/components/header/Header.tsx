import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { pageChange } from '../../features/filter/filterActions'
import { PageType } from '../../features/filter/types'
import { RootReducerType } from '../../store'
import { Path } from '../../utils/constants'
import styles from './header.module.css'

const Header: React.FC = () => {
  const pageName = useSelector(
    (state: RootReducerType) => state.filterState.pageType
  )
  const dispatch = useDispatch()

  const toAsteroidsPage = () => {
    dispatch(pageChange(PageType.asteroids))
  }

  const toDestroyedPage = () => {
    dispatch(pageChange(PageType.destroyed))
  }

  return (
    <header className={styles.header}>
      <div className={styles['logo-container']}>
        <div className={styles.logo}>
          <NavLink to="/">ARMAGGEDON V</NavLink>
        </div>

        <p>
          Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
          Земле.
        </p>
      </div>
      <nav className={styles['navbar-wrapper']}>
        <ul className={styles.navbar}>
          <li onClick={toAsteroidsPage} aria-hidden>
            <NavLink
              className={`${
                pageName === PageType.asteroids
                  ? styles['nav-item-active']
                  : styles['nav-item-inactive']
              }`}
              to={Path.asteroids}
            >
              Астероиды
            </NavLink>
          </li>
          <li onClick={toDestroyedPage} aria-hidden>
            <NavLink
              className={`${
                pageName === PageType.destroyed
                  ? styles['nav-item-active']
                  : styles['nav-item-inactive']
              }`}
              to={Path.destroyed}
            >
              Уничтожение
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
