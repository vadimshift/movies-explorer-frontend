import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login({ onLogin }) {
  const [loginData, setLoginData] = useState({
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(loginData);
  };
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
              value={loginData.email}
              required
              onChange={handleChange}
            ></input>
            <span className='login__input-subtitle'>Пароль</span>
            <input
              className='login__input login__input_type_password'
              type='password'
              id='password'
              name='password'
              value={loginData.password}
              required
              onChange={handleChange}
            ></input>
            <button className='login__submit-button'>Войти</button>
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
