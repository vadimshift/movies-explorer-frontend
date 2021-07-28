import './Profile.css';

function Profile() {
  return (
    <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div className="profile__conteiner">
            <div className="profile__content">
                <p className="profile__subtitle">Имя</p>
                <p className="profile__name">Виталий</p>
            </div>
            <div className="profile__content">
                <p className="profile__subtitle">E-mail</p>
                <p className="profile__email">pochta@yandex.ru</p>
            </div>
            <div className="profile__button-container">
                <button className="profile__edit-button">Редактировать</button>
                <button className="profile__exit-button">Выйти из аккаунта</button>
            </div>
        </div>
        
    </section>
    );
}

export default Profile;