import React from 'react';
import { FaHome, FaUtensils, FaDumbbell, FaPills, FaCalendarAlt, FaUser } from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Citas',
    path: '/citas',
    icon: <FaCalendarAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Dietas',
    path: '/dietas',
    icon: <FaUtensils />,
    cName: 'nav-text'
  },
  {
    title: 'Rutinas',
    path: '/routines',
    icon: <FaDumbbell />,
    cName: 'nav-text'
  },
  {
    title: 'Medicación',
    path: '/medicacion',
    icon: <FaPills />,
    cName: 'nav-text'
  },
  {
    title: 'Perfil',
    path: '/profile',
    icon: <FaUser />,
    cName: 'nav-text'
  }
];

