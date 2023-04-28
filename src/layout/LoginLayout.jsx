import React from 'react';
import HeaderNav from '../pages/shared/Header/HeaderNav';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;