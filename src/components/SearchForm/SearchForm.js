import './SearchForm.css';
import icon from "../../images/searchicon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

function SearchForm() {
  return (
    <section className="searching">
        <form className="search-form">
            <img className="search-form__icon" src={icon} alt="Иконка поиска" />
            <input type="text" className="search-form__input" placeholder="Фильм" /> 
            <button className="search-form__button">Найти</button>
        </form>
        <FilterCheckbox />
    </section>
      
  );
}

export default SearchForm;