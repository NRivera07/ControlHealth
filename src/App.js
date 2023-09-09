import React from 'react'
import Navbar from '../src/components/NavBar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Views/Home/Home'
import Quotes from './Views/Quotes/Quotes'
import Diet from './Views/Diet/Diet'
import Medication from './Views/Medication/Medication'
import Routines from './Views/Routines/Routines'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/citas" component={Quotes} />
          <Route path="/medication" component={Medication} />
          <Route path="/diet" component={Diet} />
          <Route path="/routines" component={Routines} />
        </Switch>
      </Router>
    </>
  )
}

export default App
