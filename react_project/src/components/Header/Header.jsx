

import {  NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.css';

function Header() {

  return (
    <header >
      <Navbar expand="lg" data-bs-theme="dark" className={styles.navBar + ' bg-secondary'}>
        <Container >
          <Navbar.Brand href="/">SecureHash</Navbar.Brand>
          <Nav className="">
            <NavLink className='nav-link' to="/">Главная</NavLink>
            <NavLink className='nav-link' to="/create">Создать Note</NavLink>
            <NavLink className='nav-link' to="/note">Посмотреть Note</NavLink>
            <NavLink className='nav-link' to="/about">О нас</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;