import React, { useEffect, useRef } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../components/header/Header'
import { Asteroids } from '../asteroids/Asteroids'
import { Path } from '../../utils/constants'
import styles from './app.module.css'
import { scrollDown } from '../../features/filter/filterActions'
import { RootReducerType } from '../../store'
import { DestroyedPage } from '../destroyed-page/Destroyed-page'
import { AsteroidDetails } from '../asteroid-details/Asteroid-details'
import { Footer } from '../../components/footer/Footer'

const App: React.FC = () => {
  const asteroidsArr = useSelector(
    (state: RootReducerType) => state.asteroidsState.asteroidsArr
  )
  const isDanger = useSelector(
    (state: RootReducerType) => state.filterState.isDanger
  )

  const main = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const scrollControl = () => {
    dispatch(
      scrollDown(
        (main.current! as HTMLElement).scrollHeight -
          Math.abs((main.current! as HTMLElement).scrollTop) ===
          (main.current! as HTMLElement).clientHeight
      )
    )
  }

  useEffect(() => {
    main.current!.addEventListener('scroll', scrollControl)
    return () => {
      main.current!.removeEventListener('scroll', scrollControl)
    }
  }, [])

  useEffect(() => {
    const hasVerticalScrollbar =
      (main.current! as HTMLElement).scrollHeight >
      (main.current! as HTMLElement).clientHeight
    if (asteroidsArr && !hasVerticalScrollbar) {
      dispatch(scrollDown(true))
    }
  }, [asteroidsArr, isDanger])

  return (
    <HashRouter>
      <div ref={main} className={styles.main}>
        <Header />
        <Switch>
          <Route path={Path.asteroids} component={Asteroids} exact />
          <Route path={Path.destroyed} component={DestroyedPage} exact />
          <Route path={`${Path.asteroids}/:id`} component={AsteroidDetails} />
          <Route path={`${Path.destroyed}/:id`} component={AsteroidDetails} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
