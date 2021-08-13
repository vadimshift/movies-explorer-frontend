import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className='movies-card-list'>
      {props.isMovies ? (
        props.movieCard.length === 0 ? (
          <p className='text__error'>Ничего не найдено</p>
        ) : (
          <div className='movies-card-list__content'>
            <div className='movies-card-list__container'>
              {props.movieCard.map((item) => {
                return (
                  <MoviesCard
                    movie={item}
                    key={item.id}
                    handleSaveMovie={props.handleSaveMovie}
                    savedMovies={props.savedMovies}
                    isToggle={props.isToggle}
                    removeSavedMovie={props.removeSavedMovie}
                    handleDisableIsLoaded={props.handleDisableIsLoaded}
                  />
                );
              })}
            </div>
          </div>
        )
      ) : (
        <p className='text__error'>
          Нажмите кнопку или введите конкретный фильм
        </p>
      )}
      {props.children}
    </section>
  );
}

export default MoviesCardList;
