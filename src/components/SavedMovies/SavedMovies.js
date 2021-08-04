import './SavedMovies.css';
import Header from '../Header/Header';
import Navigation  from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import MobileMenu from '../MobileMenu/MobileMenu';

function SavedMovies() {
  return (
    <>
      <Header>
        <Navigation />
        <MobileMenu />
      </Header>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default SavedMovies;
