import './Menu.css';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav className='menu'>
      <NavLink
        exact
        to='/movies'
        className='menu__link'
        activeClassName='menu__link_bold'
      >
        Фильмы
      </NavLink>
      <NavLink
        to='/saved-movies'
        className='menu__link'
        activeClassName='menu__link_bold'
      >
        Сохраненные фильмы
      </NavLink>
      <NavLink to='/profile'>
        <button className='menu__profile-button'></button>
      </NavLink>
    </nav>
  );
}

export default Menu;
