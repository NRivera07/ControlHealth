import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Cambio de importaciones
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Dropdown from '../dropdown/dropdown';

// Importa tu imagen aquí
import logo from './Logo 1.png';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#807676' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} /> {/* Cambio de ícono */}
          </Link>

          {/* Inserta tu imagen aquí */}
          <img src={logo} alt="Logo" className="navbar-logo" />
          <Dropdown/>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <FaTimes /> {/* Cambio de ícono */}
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {React.cloneElement(item.icon, { color: '#807676' })} {/* Cambio de color del ícono */}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
