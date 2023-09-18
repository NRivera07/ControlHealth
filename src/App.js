import React from 'react'
import Navbar from '../src/Components/NavBar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Views/Home/Home'
import Quotes from './Views/Quotes/Quotes'
import Diet from './Views/Diet/Diet'
import Medication from './Views/Medication/Medication'
import Routines from './Views/Routines/Routines'
import Login from './Views/Login/Login'
import Register from './Views/Register/Register'
import ProtectedRoute from './Utils/ProtectedRoute'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" component={Register} />

        
          <ProtectedRoute path="/" component={Home} />
          <ProtectedRoute path="/citas" component={Quotes} />
          <ProtectedRoute path="/medication" component={Medication} />
          <ProtectedRoute path="/diet" component={Diet} />
          <ProtectedRoute path="/routines" component={Routines} />

          
        </Switch>
      </Router>
    </>
  )
}

export default App
