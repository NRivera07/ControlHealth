import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Citas from './views/Citas';
import Diet from './views/Diet';
import Medicacion from './views/Medicacion';
import Routines  from './views/Routines';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/citas' component={Citas} />
          <Route path='/medicacion' component={Medicacion} />
          <Route path='/diet' component={Diet} />
          <Route path='/routines' component={Routines} />
        </Switch>
      </Router>
    </>
  );
}

export default App;