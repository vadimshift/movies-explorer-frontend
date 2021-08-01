import './Profile.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

function Profile() {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <section className='profile'>
        <h2 className='profile__title'>Привет, Вадим!</h2>
        <form className='profile__conteiner'>
          <div className='profile__content'>
            <p className='profile__subtitle'>Имя</p>
            <input
              id='name'
              type='text'
              placeholder='Виталий'
              className='profile__input-name'
            ></input>
          </div>
          <div className='profile__content'>
            <p className='profile__subtitle'>E-mail</p>
            <input
              id='email '
              type='email'
              placeholder='pochta@yandex.ru'
              className='profile__input-email'
            ></input>
          </div>
          <div className='profile__button-container'>
            <button className='profile__edit-button'>Редактировать</button>
            <button className='profile__exit-button'>Выйти из аккаунта</button>
            <span className='profile__error-massage'>
              При обновлении профиля произошла ошибка.
            </span>
            <button className='profile__save-button'>Сохранить</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
