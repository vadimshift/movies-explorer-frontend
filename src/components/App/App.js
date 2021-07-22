import './App.css';
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header>
          <Menu>
            <a href="#" className="menu__link">Регистрация</a>
            {/* <a href="#" className="menu__link menu__link_bold">Фильмы</a>
            <a href="#" className="menu__link menu__link_normal">Сохраненные фильмы</a>
            <button className="menu__profile-button menu__profile-button_small"></button> */}
            <button className="menu__signin-button">Войти</button>
          </Menu>
        </Header>
        <Promo>
            <NavTab />
        </Promo>
        <AboutProject />
      </div>
    </div>
  );
}

export default App;
