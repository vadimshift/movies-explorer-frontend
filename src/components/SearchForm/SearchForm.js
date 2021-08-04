import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='searching'>
      <div className='searching__container'>
        <form className='search-form'>
          <input
            type='text'
            className='search-form__input'
            placeholder='Фильм'
          />
          <button className='search-form__button'></button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
