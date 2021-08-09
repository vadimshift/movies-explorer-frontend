import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { useValidationForm } from '../../utils/ValidationForm';

function Register({ onRegister }) {
  const {
    values,
    errors,
    isFormValid,
    handleInputChange,
    formError,
  } = useValidationForm();
  const { name, email, password } = values;

  const registerData = values;

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      onRegister(registerData);
    },
    [registerData, onRegister]
  );

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
          <form onSubmit={handleSubmit} className='register__form'>
            <span className='register__input-subtitle'>Имя</span>
            <input
              className='register__input register__input_type_name'
              type='text'
              name='name'
              required
              value={name || ''}
              onChange={handleInputChange}
            ></input>
            <span className='register__input-error'>{errors.name || ''}</span>
            <span className='register__input-subtitle'>E-mail</span>
            <input
              className='register__input register__input_type_email'
              type='email'
              name='email'
              required
              value={email || ''}
              onChange={handleInputChange}
            ></input>
            <span className='register__input-error'>{errors.email || ''}</span>
            <span className='register__input-subtitle'>Пароль</span>
            <input
              className='register__input register__input_type_password'
              type='password'
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
                  ? 'register__submit-button'
                  : 'register__submit-button register__submit-button_inactive'
              }
              disabled={!isFormValid}
            >
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
