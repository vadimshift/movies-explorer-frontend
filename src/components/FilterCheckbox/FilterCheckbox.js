import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
        <section className="filter-checkbox">
            <label className="filter-checkbox__switch">
                <input type="checkbox" className="filter-checkbox__input" />
                <span className="filter-checkbox__slider"></span>    
            </label>
            <p className="filter-checkbox__title">Короткометражки</p>      
        </section>
  );
}

export default FilterCheckbox;
