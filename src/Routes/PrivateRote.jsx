import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MainContext } from '../context/Context';

export function PrivateFor({ children,to }) {
  const { isLogin } = useContext(MainContext);

  return !isLogin ? children : <Navigate to={to} replace />;
}
export default function PrivateRoute({ children,to }) {
  const { isLogin } = useContext(MainContext);

  return isLogin ? children : <Navigate to={to} replace />;
}

