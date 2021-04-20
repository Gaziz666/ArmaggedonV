import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/header/Header'
import { About } from './pages/About'
import { Asteroids } from './pages/asteroids/Asteroids'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={Asteroids} exact />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
