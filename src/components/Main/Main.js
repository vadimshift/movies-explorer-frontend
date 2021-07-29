import './Main.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <>
      <Header>
        <Menu>
          <a href='#' className='menu__link'>
            Регистрация
          </a>
          <button className='menu__signin-button'>Войти</button>
        </Menu>
      </Header>
      <Promo>
        <NavTab />
      </Promo>
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Main;
