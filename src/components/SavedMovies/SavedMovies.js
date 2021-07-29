import './SavedMovies.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies() {
  return (
    <>
      <Header>
        <Menu>
          <a href='#' className='menu__link'>
            Фильмы
          </a>
          <a href='#' className='menu__link menu__link_bold'>
            Сохраненные фильмы
          </a>
          <button className='menu__profile-button'></button>
        </Menu>
      </Header>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default SavedMovies;
