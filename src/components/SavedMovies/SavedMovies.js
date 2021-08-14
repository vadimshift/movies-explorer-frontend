import './SavedMovies.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import MobileMenu from '../MobileMenu/MobileMenu';

function SavedMovies(props) {
  return (
    <>
      <Header>
        <Navigation />
        <MobileMenu />
      </Header>
      <SearchForm
        onSearchSavedMovies={props.onSearchSavedMovies}
        saved={true}
        onCheckingShortMovies={props.onCheckingShortMovies}
        isChecked={props.isCheckShortMovies}
      />
      <MoviesCardList
        saved={true}
        movies={props.movies}
        onDeleteMovie={props.onDeleteMovie}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
