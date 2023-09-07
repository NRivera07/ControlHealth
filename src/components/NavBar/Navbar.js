import React, { useState } from 'react';
import { FaBars} from 'react-icons/fa';
import {BsArrowLeftSquare} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import './Navbar.css';
import Dropdown from '../dropdown/dropdown';

// Importa tu imagen aquí
import logo from './Logo 1.png';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
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
              <Link to='#' className='menu-x'>
                <BsArrowLeftSquare/> {/* Cambio de ícono */}
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {React.cloneElement(item.icon, { color: '#fff' })} {/* Cambio de color del ícono */}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  );
}

export default Navbar;
