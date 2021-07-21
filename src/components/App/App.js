import './App.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header>
          <Navigation>
            <a href="#" className="navigation__link">Регистрация</a>
            {/* <a href="#" className="navigation__link navigation__link_bold">Фильмы</a>
            <a href="#" className="navigation__link navigation__link_normal">Сохраненные фильмы</a>
            <button className="navigation__profile-button navigation__profile-button_small"></button> */}
            <button className="navigation__signin-button">Войти</button>
          </Navigation>
        </Header>
      </div>
    </div>
  );
}

export default App;
