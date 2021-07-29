import './Header.css';
import logo from '../../images/logo.svg';

function Header(props) {
  return (
    <header className='header'>
      <img
        className='header__logo'
        src={logo}
        alt='Логотип проекта Movies Explorer'
      />
      <span className='header__menu'>{props.children}</span>
    </header>
  );
}

export default Header;
