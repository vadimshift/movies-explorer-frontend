import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src={logo}
          alt='Логотип проекта Movies Explorer'
        />
      </Link>
      <span className='header__menu'>{props.children}</span>
    </header>
  );
}

export default Header;
