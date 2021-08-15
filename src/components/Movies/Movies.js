import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies(props) {
  return (
    <>
      <Header {...props.isMobileMenuOpen} />
      <SearchForm
        onSearchMovies={props.onSearchMovies}
        onCheckingShortMovies={props.onCheckingShortMovies}
        saved={false}
        isChecked={props.isCheckShortMovies}
      />
      <MoviesCardList
        movies={props.movies}
        isLoading={props.isLoading}
        notFound={props.notFound}
        isErrorActive={props.isErrorActive}
        onMovieSave={props.onMovieSave}
        onDeleteMovie={props.onDeleteMovie}
        saved={false}
        savedMovies={props.savedMovies}
        displayWidth={props.displayWidth}
      />
      <Footer />
    </>
  );
}

export default Movies;
