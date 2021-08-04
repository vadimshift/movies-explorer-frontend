import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className='register'>
      <div className='register__content'>
        <div className='register__container'>
          <Link to='/'>
            <img
              className='register__logo'
              src={logo}
              alt='Логотип проекта'
            ></img>
          </Link>
          <h2 className='register__title'>Добро пожаловать!</h2>
          <form className='register__form'>
            <span className='register__input-subtitle'>Имя</span>
            <input
              className='register__input register__input_type_name'
              type='text'
              id='name'
            ></input>
            <span className='register__input-subtitle'>E-mail</span>
            <input
              className='register__input register__input_type_email'
              type='email'
              id='email'
            ></input>
            <span className='register__input-subtitle'>Пароль</span>
            <input
              className='register__input register__input_type_password'
              type='password'
              id='password'
            ></input>
            <span className='register__error-message'>
              Что-то пошло не так...
            </span>
            <button className='register__submit-button'>
              Зарегистрироваться
            </button>
            <p className='register__submit-button-subtitle'>
              Уже зарегистрированы?
              <Link className='register__link' to='/signin'>
                Войти
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
