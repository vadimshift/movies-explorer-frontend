import './SavedMovies.css';
import { useEffect } from "react";
import Header from '../Header/Header';
import Preloader from "../Preloader/Preloader";
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
import MobileMenu from '../MobileMenu/MobileMenu';

function SavedMovies(props) {
  useEffect(() => {
    props.handleLogin();
  });
  return (
    <>
      <Header>
        <Navigation />
        <MobileMenu />
      </Header>
      <SearchForm
        handleSearchSaved={props.handleSearchSaved}
        isToggle={props.isToggle}
        savedSearch={props.savedSearch}
        updateFilteredSavedMovies={props.updateFilteredSavedMovies}
        savedMovies={props.savedMovies}
      />
      {props.isLoading ? (
        <Preloader />
      ) : (
        <SavedMoviesCardList
          savedMovies={props.savedMovies}
          removeSavedMovie={props.removeSavedMovie}
          isToggle={props.isToggle}
          filteredSavedMovieList={props.filteredSavedMovieList}
        />
      )}
      <Footer />
    </>
  );
}

export default SavedMovies;
