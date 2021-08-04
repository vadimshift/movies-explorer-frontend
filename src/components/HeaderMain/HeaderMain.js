import './HeaderMain.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function HeaderMain() {
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
          <div className="header-main__navtab">
            <Link to='/signup' className='header-main__link'>
              Регистрация
            </Link>
            <Link to='/signin'>
              <button className='header-main__signin-button'>Войти</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMain;
