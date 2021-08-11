import './Header.css';
import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header({ loggedIn }) {
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const locationSwitch = () => {
    if (location.pathname === '/') {
      return (
        <header className='header-main'>
          <div className='header-main__container'>
            <div className='header-main__content'>
              <Link to='/'>
                <img
                  className='header-main__logo'
                  src={logo}
                  alt='Логотип проекта Movies Explorer'
                />
              </Link>
              {loggedIn ? (
                <>
                  {' '}
                  <Navigation />
                  <Link to='/profile'>
                    <button className='header__profile-button'></button>
                  </Link>
                </>
              ) : (
                <div className='header-main__navtab'>
                  <Link to='/signup' className='header-main__link'>
                    Регистрация
                  </Link>
                  <Link to='/signin'>
                    <button className='header-main__signin-button'>
                      Войти
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>
      );
    } else {
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
            <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
          </div>
        </header>
      );
    }
  };

  return <div>{locationSwitch()}</div>;
}
export default Header;
