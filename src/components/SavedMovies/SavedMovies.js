import './SavedMovies.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import MobileMenu from '../MobileMenu/MobileMenu';

function SavedMovies() {
  return (
    <>
      <Header>
        <Menu />
        <MobileMenu />
      </Header>
      <SearchForm />
      <MoviesCardList />
      <div className="saved-movies__divider"></div>
      <Footer />
    </>
  );
}

export default SavedMovies;
