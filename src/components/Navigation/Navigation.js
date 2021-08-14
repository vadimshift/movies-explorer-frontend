import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav className='navigation'>
        <NavLink
          exact
          to='/movies'
          className='navigation__link'
          activeClassName='navigation__link_bold'
        >
          Фильмы
        </NavLink>
        <NavLink
          to='/saved-movies'
          className='navigation__link'
          activeClassName='navigation__link_bold'
        >
          Сохраненные фильмы
        </NavLink>    
      </nav>
    </>
  );
}

export default Navigation;
