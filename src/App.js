import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Citas from './views/Citas';
import Dietas from './views/Dietas';
import Medicacion from './views/Medicacion';
import Profile  from './views/Profile';
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
          <Route path='/dietas' component={Dietas} />
          <Route path='/profile' component={Profile} />
          <Route path='/routines' component={Routines} />
        </Switch>
      </Router>
    </>
  );
}

export default App;