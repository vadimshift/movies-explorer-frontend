import './Movies.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from "../Preloader/Preloader";
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header>
        <Menu>
          <a href='#' className='menu__link menu__link_bold'>
            Фильмы
          </a>
          <a href='#' className='menu__link'>
            Сохраненные фильмы
          </a>
          <button className='menu__profile-button'></button>
        </Menu>
      </Header>
      <SearchForm />
      <MoviesCardList />
      <Preloader />
      <Footer />
    </>
  );
}

export default Movies;
