import './Main.css';
import Header from '../Header/Header';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import MobileMenu from '../MobileMenu/MobileMenu';

function Main() {
  return (
    <>
      <Header>
        <HeaderMenu />
        <MobileMenu />
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
