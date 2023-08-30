import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { FaHome, FaUtensils, FaDumbbell, FaPills, FaCalendarAlt, FaUser } from 'react-icons/fa';
import Home from './components/Home';
import Dietas from './components/Dietas';
import Rutinas from './components/Rutinas';
import Medicacion from './components/Medicacion';
import Citas from './components/Citas';
import Perfil from './components/Perfil';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div>
        <nav className={menuOpen ? 'nav-open' : ''}>
          <div className="menu-button" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul onClick={closeMenu} className="menu-list">
            <li><NavLink exact to="/" activeClassName="active"><FaHome /> Home</NavLink></li>
            <li><NavLink to="/dietas" activeClassName="active"><FaUtensils /> Dietas</NavLink></li>
            <li><NavLink to="/rutinas" activeClassName="active"><FaDumbbell /> Rutinas</NavLink></li>
            <li><NavLink to="/medicacion" activeClassName="active"><FaPills /> Medicacion</NavLink></li>
            <li><NavLink to="/citas" activeClassName="active"><FaCalendarAlt /> Citas</NavLink></li>
            <li><NavLink to="/perfil" activeClassName="active"><FaUser /> Perfil</NavLink></li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/dietas" component={Dietas} />
        <Route path="/rutinas" component={Rutinas} />
        <Route path="/medicacion" component={Medicacion} />
        <Route path="/citas" component={Citas} />
        <Route path="/perfil" component={Perfil} />
      </div>
    </Router>
  );
}

export default App;
