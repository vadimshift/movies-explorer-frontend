import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <section className='profile'>
        <div className='profile__mega-container'>
          <h2 className='profile__title'>Привет, Вадим!</h2>
          <form className='profile__container'>
            <div className='profile__content'>
              <p className='profile__subtitle'>Имя</p>
              <input
                id='name'
                type='text'
                placeholder={currentUser.name || ''}
                className='profile__input-name'
              ></input>
            </div>
            <div className='profile__content'>
              <p className='profile__subtitle'>E-mail</p>
              <input
                id='email '
                type='email'
                placeholder={currentUser.email || ''}
                className='profile__input-email'
              ></input>
            </div>
            <div className='profile__button-container'>
              <button className='profile__edit-button'>Редактировать</button>
              <button onClick={props.onLogout} className='profile__exit-button'>
                Выйти из аккаунта
              </button>
              <span className='profile__error-massage'>
                При обновлении профиля произошла ошибка.
              </span>
              <button className='profile__save-button'>Сохранить</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
