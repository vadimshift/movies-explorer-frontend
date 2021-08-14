import './Register.css';
import logo from '../../images/logo.svg';
import { Link, withRouter} from 'react-router-dom';
import { useValidationForm } from '../../utils/ValidationForm';

function Register(props) {
  const { values, handleChange, errors, isFormValid } = useValidationForm();

  const handleRegister = (e) => {
    e.preventDefault();
    props.onRegister(values.name, values.password, values.email);
    props.onClear();
  }

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
          <form onSubmit={handleRegister} className='register__form'>
            <span className='register__input-subtitle'>Имя</span>
            <input
              className='register__input register__input_type_name'
              type='text'
              name='name'
              pattern='[а-яА-Яa-zA-ZёË\- ]{1,}'
              required
              value={values.name || ''}
              onChange={handleChange}
              disabled={props.isSaving}
            ></input>
            <span className='register__input-error'>{errors.name}</span>
            <span className='register__input-subtitle'>E-mail</span>
            <input
              className='register__input register__input_type_email'
              type='email'
              name='email'
              required
              value={values.email || ''}
              onChange={handleChange}
              disabled={props.isSaving}
            ></input>
            <span className='register__input-error'>{errors.email}</span>
            <span className='register__input-subtitle'>Пароль</span>
            <input
              className='register__input register__input_type_password'
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
              className={
                isFormValid
                  ? 'register__submit-button'
                  : 'register__submit-button register__submit-button_inactive'
              }
              disabled={!isFormValid}
              type='submit'
            >
              Зарегистрироваться
            </button>
            <p className='register__submit-button-subtitle'>
              Уже зарегистрированы?
              <Link
                className='register__link'
                to='/signin'
                onClick={props.onClear}
              >
                {' '}
                Войти
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default withRouter(Register);
