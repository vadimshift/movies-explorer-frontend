import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <section className='filter-checkbox'>
      <div className='filter-checkbox__container'>
        <div className='filter-checkbox__content'>
          <label className='filter-checkbox__switch'>
            <input
              id='short-films'
              type='checkbox'
              className='filter-checkbox__input'
              onChange={props.onChange}
              checked={props.isChecked}
            />
            <span className='filter-checkbox__slider'></span>
          </label>
          <p className='filter-checkbox__title'>Короткометражки</p>
        </div>
      </div>
    </section>
  );
}

export default FilterCheckbox;
