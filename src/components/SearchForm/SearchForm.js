import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';

function SearchForm(props) {
  const [search, setSearch] = useState('');
  const [isSearchingValid, setIsSearchingValid] = useState(true);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setIsSearchingValid(e.target.checkValidity());
  };

  const handleSearchSavedMovies = (e) => {
    e.preventDefault();
    props.onSearchSavedMovies(search);
  };

  const handleSearchMovies = (e) => {
    e.preventDefault();
    props.onSearchMovies(search);
  };

  return (
    <section className='searching'>
      <div className='searching__container'>
        <form
          className='search-form'
          onSubmit={props.saved ? handleSearchSavedMovies : handleSearchMovies}
        >
          <input
            type='text'
            className='search-form__input'
            placeholder='Фильм'
            value={search || ''}
            onChange={handleChange}
            required
          />
          <span
            className={`search__form-error ${
              isSearchingValid ? 'search__form-error_hidden' : ''
            }`}
          >
            Нужно ввести ключевое слово
          </span>
          <button className='search-form__button' type='submit'></button>
        </form>
        <FilterCheckbox
          onChange={props.onCheckingShortMovies}
          isChecked={props.isChecked}
        />
      </div>
    </section>
  );
}

export default SearchForm;
