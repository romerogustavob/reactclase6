import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import LogoWidget from './LogoWidget';

const NavBar = (props) => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
        <LogoWidget></LogoWidget>
          <Link className='btn btn-dark' to={'/'}>
            <Navbar.Brand>
              Gus Store 
            </Navbar.Brand>
          </Link>

          <Nav className="me-auto">
            <Link className='btn btn-dark' to={'/category/smartphones'}>SmartPhones</Link>
            <Link className='btn btn-dark' to={'/category/laptops'}>Laptops</Link>
            <Link className='btn btn-dark' to={'#ofertas'}>Ofertas</Link>
    
          </Nav>
          <Link className='btn btn-dark' to={'/cart'}>            
            <button className="btn btn-primary" type="submit">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg> */}<CartWidget/>
            </button>
          </Link>
          
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar