import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { useValidationForm } from '../../utils/ValidationForm';

function Login({ onLogin }) {
  const {
    values,
    errors,
    isFormValid,
    handleInputChange,
    formError,
  } = useValidationForm();

  const { password, email } = values;

  const loginData = values;

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      onLogin(loginData);
    },
    [loginData, onLogin]
  );

  return (
    <section className='login'>
      <div className='login__content'>
        <div className='login__container'>
          <Link to='/'>
            <img className='login__logo' src={logo} alt='Логотип проекта'></img>
          </Link>
          <h2 className='login__title'>Рады видеть!</h2>
          <form onSubmit={handleSubmit} className='login__form'>
            <span className='login__input-subtitle'>E-mail</span>
            <input
              className='login__input login__input_type_email'
              type='email'
              id='email'
              name='email'
              value={email || ''}
              onChange={handleInputChange}
              required
            ></input>
            <span className='login__input-error'>{errors.email || ''}</span>
            <span className='login__input-subtitle'>Пароль</span>
            <input
              className='login__input login__input_type_password'
              type='password'
              id='password'
              name='password'
              required
              value={password || ''}
              onChange={handleInputChange}
            ></input>
            <span className='register__input-error'>
              {errors.password || ''}
            </span>
            <span className='register__error-message'>{formError || ''}</span>
            <button
              className={
                isFormValid
                  ? 'login__submit-button'
                  : 'login__submit-button login__submit-button_inactive'
              }
              disabled={!isFormValid}
            >
              Войти
            </button>
            <p className='login__submit-button-subtitle'>
              Ещё не зарегистрированы?
              <Link className='login__link' to='/signup'>
                Регистрация
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
