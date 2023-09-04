import React from 'react'
import { useState } from 'react'
import {FaUser } from 'react-icons/fa';
import './Dropdown.css'


const Dropdown = () => {
    const [open, setOpen] = useState(false)
    const Menu = ['Profile', 'settings', 'Exit']

    return (
        <div className='dropdown-container'>

            <FaUser onClick={() => setOpen(!open)} className='user-icon'/>

            {open && (
                <div className={`menu ${open ? 'visible' : ''}`}>
                    <ul  onClick={() => setOpen(false)}>
                        {
                            Menu.map((menu) => (
                                <li key={menu}>
                                    {menu}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                )
            }
        </div>
  )
}

export default Dropdown
