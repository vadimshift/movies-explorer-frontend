import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';

function SearchForm(props) {
  const [filterCheck, setFilterCheck] = useState(false);

  const checkBoxToggle = () => {
    setFilterCheck(!filterCheck);
  };

  const handleFilter = (movieList, movieSearch) => {
    const filtered = movieList.nameRU
      .toLowerCase()
      .includes(movieSearch.toLowerCase());
    return filtered;
  };

  const handleSavedMoviesFilter = (savedMovieList, savedMovieSearch) => {
    const savedFiltered = savedMovieList.nameRU
      .toLowerCase()
      .includes(savedMovieSearch.toLowerCase());
    return savedFiltered;
  };

  const filterMoviesArray = (movieList, value) => {
    if (filterCheck) {
      const shortMovie = movieList.filter((movie) => {
        return movie.duration <= 40 && handleFilter(movie, value);
      });
      return shortMovie;
    } else {
      const filteredMovies = movieList.filter((movie) => {
        return handleFilter(movie, value);
      });
      return filteredMovies;
    }
  };

  const filterSavedMoviesArray = (savedMovieList, savedMovieSearch) => {
    if (filterCheck) {
      const shortSavedMovie = savedMovieList.filter((movie) => {
        return (
          movie.duration <= 40 &&
          handleSavedMoviesFilter(movie, savedMovieSearch)
        );
      });
      return shortSavedMovie;
    } else {
      const filteredSavedMovies = savedMovieList.filter((movie) => {
        return handleSavedMoviesFilter(movie, savedMovieSearch);
      });
      return filteredSavedMovies;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredMoviesArray = filterMoviesArray(
      props.localStorageMovies,
      props.value
    );
    props.addFilteredMovie(filteredMoviesArray);
  };

  const handleSubmitSave = (e) => {
    e.preventDefault();
    let filteredSavedMoviesArray = filterSavedMoviesArray(
      props.savedMovies,
      props.savedSearch
    );
    props.updateFilteredSavedMovies(filteredSavedMoviesArray);
  };
  return (
    <section className='searching'>
      <div className='searching__container'>
        <form
          className='search-form'
          onSubmit={props.isToggle ? handleSubmitSave : handleSubmit}
        >
          <input
            type='text'
            className='search-form__input'
            placeholder='Фильм'
            value={props.isToggle ? props.savedSearch : props.value}
            onChange={
              props.isToggle ? props.handleSearchSaved : props.handleSearch
            }
          />
          <button
            className='search-form__button'
            onClick={props.editMovies}
            type='submit'
          ></button>
        </form>
        <FilterCheckbox onChange={checkBoxToggle} />
      </div>
    </section>
  );
}

export default SearchForm;
