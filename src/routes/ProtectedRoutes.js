import React from 'react';
import { Navigate } from 'react-router-dom';
import { hasToken } from 'src/services/Token'

const PrivateRoute = ({ component: Component, ...rest }) => {

  if (hasToken()) {
    return <Component {...rest} />
  } else {
    return <Navigate to="/login" />
  }
}

export default PrivateRoute
