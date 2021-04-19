import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

const Header: React.FC = () => {
  console.log('header')
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
          <li>
            <NavLink className={styles['nav-item']} to="/">
              Астероиды
            </NavLink>
          </li>
          <li>
            <NavLink className={styles['nav-item']} to="/about">
              Уничтожение
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
