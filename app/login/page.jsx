import React from 'react'
import Navbar from '../shared/navbar/page';
import NavbarWhite from '../shared/navbarWhite';
import Login from './login';

const LoginLayout = () => {
  return (
    <>
    <div className='hidden lg:block'>
    <Navbar/>
    </div>
    <div className='lg:hidden'>
    <NavbarWhite/>
    </div>
    <Login/>
    </>
  )
}

export default LoginLayout;