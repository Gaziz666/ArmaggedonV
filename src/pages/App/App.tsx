import React, { useEffect, useRef } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../components/header/Header'
import { About } from '../About'
import { Asteroids } from '../asteroids/Asteroids'
import { Path } from '../../utils/constants'
import styles from './app.module.css'
import { scrollDown } from '../../features/filter/filterActions'
import { RootReducerType } from '../../store'

const App: React.FC = () => {
  const asteroidsArr = useSelector(
    (state: RootReducerType) => state.asteroidsState.asteroidsArr
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
    if (asteroidsArr) {
      console.log(
        (main.current! as HTMLElement).scrollHeight -
          Math.abs((main.current! as HTMLElement).scrollTop) ===
          (main.current! as HTMLElement).clientHeight
      )
      if (
        !(
          (main.current! as HTMLElement).scrollHeight -
            Math.abs((main.current! as HTMLElement).scrollTop) ===
          (main.current! as HTMLElement).clientHeight
        )
      ) {
        dispatch(scrollDown(true))
      }
    }
  }, [asteroidsArr])

  return (
    <BrowserRouter>
      <div ref={main} className={styles.main}>
        <Header />

        <Switch>
          <Route path={Path.asteroids} component={Asteroids} exact />
          <Route path={Path.destroyed} component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
