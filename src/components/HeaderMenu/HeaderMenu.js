import './HeaderMenu.css';
import { Link } from 'react-router-dom';

function HeaderMenu() {
  return (
    <nav className='header-menu'>
      <Link to='/signup' className='header-menu__link'>
        Регистрация
      </Link>
      <Link to='/signin'>
        <button className='header-menu__signin-button'>Войти</button>
      </Link>
    </nav>
  );
}

export default HeaderMenu;
