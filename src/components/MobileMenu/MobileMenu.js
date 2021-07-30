import './MobileMenu.css';
import { NavLink } from 'react-router-dom';

function MobileMenu() {
  return (
    <>
      <section className='mobile-menu'>
        <div className='mobile-menu__container'>
          <button type='button' className='mobile-menu__close-button' />
          <nav className='mobile-menu__navtab'>
            <NavLink
              exact
              to='/'
              className='mobile-menu__link'
              activeClassName='mobile-menu__link_active'
            >
              Главная
            </NavLink>
            <NavLink
              to='/movies'
              className='mobile-menu__link'
              activeClassName='mobile-menu__link_active'
            >
              Фильмы
            </NavLink>
            <NavLink
              to='/saved-movies'
              className='mobile-menu__link'
              activeClassName='mobile-menu__link_active'
            >
              Сохраненные фильмы
            </NavLink>
            <NavLink to='/profile'>
              <button className='mobile-menu__profile-button'></button>
            </NavLink>
          </nav>
          <button type='button' className='mobile-menu__mobile-button'></button>
        </div>
      </section>
    </>
  );
}

export default MobileMenu;
