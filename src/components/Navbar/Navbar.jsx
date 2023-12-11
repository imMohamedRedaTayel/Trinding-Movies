import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Navbarr = ({ crrUser , logOut }) => {

  const nav = useNavigate()


  return <>
    <section>

      <Navbar expand="lg" className=" ">
        {/* <Container> */}
        <Navbar.Brand > <span className='text-info' > Noxe </span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {crrUser ? <Nav className="me-auto">

            <Link className='nav-link' to='/' >Home</Link>
            <Link className='nav-link' to='/movies' >Movies</Link>
            <Link className='nav-link' to='/tvshow' >Tvshow</Link>
            <Link className='nav-link' to='/people' >People</Link>
          </Nav> : ''}

          {crrUser ? <span onClick={logOut} className='nav-link ml-auto cursor-pointer' >LogOut</span> : <Nav className="ms-auto">
            <Link className='nav-link' to='/register' >Register</Link>
            <Link className='nav-link' to='/login' >Login</Link>
          </Nav>}




        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </section>
  </>
}

export default Navbarr