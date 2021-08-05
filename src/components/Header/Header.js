import './Header.css';
import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header() {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  }; 

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__content'>
          <Link to='/'>
            <img
              className='header__logo'
              src={logo}
              alt='Логотип проекта Movies Explorer'
            />
          </Link>
          <Navigation />
          <Link to='/profile'>
            <button className='header__profile-button'></button>
          </Link>
          <button
            type='button'
            onClick={handleOpenMobileMenu}
            className='header__mobile-button'
          ></button>
        </div>
        <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu}/>
      </div>
    </header>
  );
}

export default Header;
