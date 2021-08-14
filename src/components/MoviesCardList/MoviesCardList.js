import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useState, useEffect } from 'react';

function MoviesCardList(props) {
  const [initialCardsNumber, setInitialCardsNumber] = useState(() => {
    const windowSize = window.innerWidth;
    if (windowSize < 720) {
      return 5;
    } else if (windowSize < 920) {
      return 8;
    } else if (windowSize < 1279) {
      return 12;
    } else if (windowSize > 1279) {
      return 12;
    }
  });
  // eslint-disable-next-line
  const [moreCardsNumber, setMoreCardsNumber] = useState(() => {
    const windowSize = window.innerWidth;
    if (windowSize < 720) {
      return 2;
    } else if (windowSize < 920) {
      return 2;
    } else if (windowSize < 1279) {
      return 3;
    } else if (windowSize > 1279) {
      return 3;
    }
  });

  const displayWidth = () => {
    const windowSize = window.innerWidth;
    if (windowSize < 720) {
      setInitialCardsNumber(5);
    } else if (windowSize < 920) {
      setInitialCardsNumber(8);
    } else if (windowSize < 1279) {
      setInitialCardsNumber(12);
    } else if (windowSize > 1279) {
      setInitialCardsNumber(12);
    }
  }

  const moviesDisplayed = props.movies?.slice(0, initialCardsNumber);

  const addMoviesToDisplay = () => {
    setInitialCardsNumber((prevState) => {
      return prevState + moreCardsNumber;
    });
  }

  useEffect(() => {
    window.addEventListener('resize', displayWidth);
  }, []);

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
