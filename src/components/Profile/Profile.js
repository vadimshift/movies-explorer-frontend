import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { useEffect, useState } from 'react';
import { useValidationForm } from '../../utils/ValidationForm';

function Profile(props) {
  const { values, setValues, handleChange, errors, isFormValid } =
    useValidationForm();
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  const handleEditProfile = (e) => {
    e.preventDefault();
    setIsFormDisabled(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onChangeUser(values.name, values.email);
  }

  useEffect(() => {
    setIsFormDisabled(props.isUpdateSuccess);
  }, [props.isUpdateSuccess, props.onChangeUser]);

  useEffect(() => {
    if (props.isSaving) {
      setIsFormDisabled(true);
    }
  }, [props.isSaving]);

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <section className='profile'>
        <div className='profile__mega-container'>
          <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
          <form onSubmit={handleSubmit} className='profile__container'>
            <div className='profile__content'>
              <p className='profile__subtitle'>Имя</p>
              <input
                pattern='[а-яА-Яa-zA-ZёË\- ]{1,}'
                name='name'
                value={values.name || ''}
                onChange={handleChange}
                type='text'
                required
                disabled={isFormDisabled}
                className='profile__input-name'
              ></input>
            </div>
            <span className='profile__error-massage'>{errors.name}</span>
            <div className='profile__content'>
              <p className='profile__subtitle'>E-mail</p>
              <input
                type='email'
                name='email'
                value={values.email || ''}
                onChange={handleChange}
                disabled={isFormDisabled}
                required
                className='profile__input-email'
              ></input>
            </div>
            <span className='profile__error-massage'>{errors.email}</span>
            <div className='profile__button-container'>
              <span
                className={`profile__form-message ${
                  props.isUpdateSuccess
                    ? 'profile__form-message_type_success'
                    : 'profile__form-message_type_error'
                }`}
              >
                {props.message}
              </span>
              {isFormDisabled ? (
                <button
                  className='profile__edit-button'
                  onClick={handleEditProfile}
                >
                  Редактировать
                </button>
              ) : (
                <button
                  type='submit'
                  disabled={!isFormValid}
                  className={`profile__edit-button ${
                    isFormValid ? '' : 'profile__edit-button_inactive'
                  }`}
                >
                  Сохранить
                </button>
              )}
              <button
                className={
                  isFormDisabled
                    ? 'profile__exit-button'
                    : 'profile__exit-button no-display'
                }
                onClick={props.onLogout}
              >
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
