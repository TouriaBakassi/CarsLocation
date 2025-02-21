import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedAdminRoute = () => {
    const isloginAdmin  = useSelector((state) => state.authen.isLoginAdmin);

    return isloginAdmin ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedAdminRoute;
