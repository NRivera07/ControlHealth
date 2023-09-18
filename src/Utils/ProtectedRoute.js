import React from 'react'
import { useSelector } from "react-redux"
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const ProtectedRoute = ({children, ...res}) => {

  const {currentUser} = useSelector(state => state.user);
  const history = useHistory();
  
  return currentUser ?  <Route {...res} /> : history.push('/login');
}

export default ProtectedRoute
