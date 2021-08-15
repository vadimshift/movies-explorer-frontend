import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useState } from 'react';

function MoviesCardList(props) {
  let moviesCount;
  let newMoviesCount;

  if (props.displayWidth > 1088) {
    moviesCount = 12;
    newMoviesCount = 3;
  } else if (props.displayWidth > 500) {
    moviesCount = 8;
    newMoviesCount = 2;
  } else if (props.displayWidth <= 500) {
    moviesCount = 5;
    newMoviesCount = 2;
  }
  const [numberMovies, setNumberMovies] = useState(moviesCount);
  const moviesDisplayed = props.movies?.slice(0, numberMovies);
 

  const addMoviesToDisplay = () => {
    setNumberMovies(numberMovies + newMoviesCount);
  };

  return (
    <section className='movies-card-list'>
      <Preloader isLoading={props.isLoading} />
      <p
        className={`movies__error ${props.isErrorActive ? '' : 'no-display'}`}
      >
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз
      </p>
      <p
        className={`movies__error ${props.notFound ? '' : 'no-display'}`}
      >
        Ничего не найдено
      </p>
      <p
        className={`movies__error ${
          props.saved && props.movies.length === 0 ? '' : 'no-display'
        }`}
      >
        Вы пока что ничего не добавили в избранное
      </p>
      <div className='movies-card-list__content'>
        <div className='movies-card-list__container'>
          {moviesDisplayed?.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={props.saved ? movie.movieId : movie.id}
                saved={props.saved}
                onMovieSave={props.onMovieSave}
                onDeleteMovie={props.onDeleteMovie}
                savedMovies={props.savedMovies}
              />
            );
          })}
        </div>
      </div>
      <div className='more-block'>
        <div className='more'>
          <button
            type='button'
            className={
              props.saved
                ? 'more__button more__button_disable'
                : `more__button ${
                    props.movies?.length === moviesDisplayed?.length
                      ? 'more__button_disable'
                      : ''
                  }`
            }
            onClick={addMoviesToDisplay}
          >
            Ещё
          </button>
        </div>
      </div>
    </section>
  );
}

export default MoviesCardList;
