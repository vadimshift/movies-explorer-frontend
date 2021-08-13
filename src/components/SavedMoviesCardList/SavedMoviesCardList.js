import './SavedMoviesCardList.css';
import MoviesCard from '../SavedMovies/MoviesCard/MoviesCard';

function SavedMoviesCardList(props) {
  return (
    <section className='saved-movies-card-list'>
      <div className='saved-movies-card-list__content'>
        {props.filteredSavedMovieList.length !== 0 ? (
          <div className='saved-movies-card-list__container'>
            {props.filteredSavedMovieList.map((item) => {
              return (
                <MoviesCard
                  key={item._id}
                  movie={item}
                  removeSavedMovie={props.removeSavedMovie}
                  isToggle={props.isToggle}
                  savedMovies={props.savedMovies}
                />
              );
            })}
          </div>
        ) : (
          <p className='text__error text__error-saved'>
            У вас нет сохраненных фильмов
          </p>
        )}
      </div>
    </section>
  );
}

export default SavedMoviesCardList;
