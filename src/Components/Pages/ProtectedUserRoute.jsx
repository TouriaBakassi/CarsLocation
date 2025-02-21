import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedUserRoute = () => {
    const isloginUser  = useSelector((state) => state.authen.isLoginUser);

    return isloginUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedUserRoute;
