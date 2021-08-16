import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useValidationForm } from '../../utils/ValidationForm';

function Login(props) {
  const { values, handleChange, errors, isFormValid } = useValidationForm();

  function handleLogin(e) {
    e.preventDefault();

    props.onLogin(values.password, values.email);

    props.onClear();
  }

  return (
    <section className='login'>
      <div className='login__content'>
        <div className='login__container'>
          <Link to='/'>
            <img className='login__logo' src={logo} alt='Логотип проекта'></img>
          </Link>
          <h2 className='login__title'>Рады видеть!</h2>
          <form onSubmit={handleLogin} className='login__form'>
            <span className='login__input-subtitle'>E-mail</span>
            <input
              className='login__input login__input_type_email'
              type='email'
              name='email'
              value={values.email || ''}
              onChange={handleChange}
              required
              disabled={props.isSaving}
            ></input>
            <span className='login__input-error'>{errors.email}</span>
            <span className='login__input-subtitle'>Пароль</span>
            <input
              className='login__input login__input_type_password'
              type='password'
              name='password'
              required
              value={values.password || ''}
              onChange={handleChange}
              minLength='5'
              disabled={props.isSaving}
            ></input>
            <span className='register__input-error'>{errors.password}</span>
            <span className='register__error-message'>
              {props.errorMessage}
            </span>
            <button
              type='submit'
              disabled={!isFormValid}
              className={
                isFormValid
                  ? 'login__submit-button'
                  : 'login__submit-button login__submit-button_inactive'
              }
            >
              Войти
            </button>
            <p className='login__submit-button-subtitle'>
              Ещё не зарегистрированы?
              <Link
                className='login__link'
                to='/signup'
                onClick={props.onClear}
              >
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
