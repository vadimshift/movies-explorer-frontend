import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className='login'>
      <div className='login__container'>
        <img className='login__logo' src={logo} alt='Логотип проекта'></img>
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='login__form'>
          <span className='login__input-subtitle'>E-mail</span>
          <input
            className='login__input login__input_type_email'
            type='email'
            id='email'
          ></input>
          <span className='login__input-subtitle'>Пароль</span>
          <input
            className='login__input login__input_type_password'
            type='password'
            id='password'
          ></input>
          <button className='login__submit-button'>Войти</button>
          <p className='login__submit-button-subtitle'>
            Ещё не зарегистрированы?
            <a className='login__link' href='#'>
              Регистрация
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
