import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { useCallback } from 'react';
import { useValidationForm } from '../../utils/ValidationForm';

function Profile({ onEditProfile, onLogout }) {
  const currentUser = useContext(CurrentUserContext);

  const { values, errors, isFormValid, handleInputChange, formError } =
    useValidationForm();

  const { name, email } = values;

  const userData = values;

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      onEditProfile(userData);
    },
    [userData, onEditProfile]
  );

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
                id='name'
                name='name'
                value={name || ''}
                onChange={handleInputChange}
                type='text'
                placeholder={currentUser.name || ''}
                required
                className='profile__input-name'
              ></input>
            </div>
            <span className='profile__error-massage'>{errors.name || ''}</span>
            <div className='profile__content'>
              <p className='profile__subtitle'>E-mail</p>
              <input
                id='email'
                type='email'
                name='email'
                value={email || ''}
                onChange={handleInputChange}
                placeholder={currentUser.email || ''}
                required
                className='profile__input-email'
              ></input>
            </div>
            <span className='profile__error-massage'>{errors.email || ''}</span>
            <div className='profile__button-container'>
              <button className={isFormValid
                  ? 'profile__edit-button'
                  : 'profile__edit-button profile__edit-button_inactive'} disabled={!isFormValid}>
                Редактировать
              </button>
              <button className='profile__exit-button' onClick={onLogout}>
                Выйти из аккаунта
              </button>
              <span className='profile__error-massage'>
                {formError || ''}
              </span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
