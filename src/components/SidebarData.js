import React from 'react';
import { FaHome, FaUtensils, FaDumbbell, FaCalendarAlt} from 'react-icons/fa';
import {MdMedication} from 'react-icons/md'

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
    path: '/diet',
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
    icon: <MdMedication />,
    cName: 'nav-text'
  },
];

