import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import More from '../More/More';

function Movies({isMobileMenuOpen}) {
  return (
    <>
      <Header {...isMobileMenuOpen} />
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
