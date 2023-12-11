import React from 'react'
import Navbar from './../Navbar/Navbar';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Footer from './../Footer/Footer';

const Layout = ( { crrUser  , setCrrUser } ) => {

  const nav = useNavigate()
  function logOut()
  {
    localStorage.removeItem('tkn')
    setCrrUser( null );
    nav( '/login' )
  }


  return <>
    <div className="container">
    <Navbar crrUser={ crrUser } logOut={logOut} />
      <Outlet></Outlet>
    <Footer/>
    </div>
  </>
}

export default Layout