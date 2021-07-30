import './Movies.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import More from '../More/More';
import MobileMenu from '../MobileMenu/MobileMenu';

function Movies() {
  return (
    <>
      <Header>
        <Menu />
        <MobileMenu />
      </Header>
      <SearchForm />
      <MoviesCardList>
        <More />
      </MoviesCardList>
      <Preloader />
      <Footer />
    </>
  );
}

export default Movies;
