import './MoviesCard.css';
import movieImage from '../../images/pic__COLOR_pic.svg';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const [isVisibleDeleteButton, setIsVisibleDeleteButton] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const movie = {
    country: props.movie.country || 'Не указано',
    director: props.movie.director || 'Не указано',
    duration: props.movie.duration || 0,
    year: props.movie.year || 'Не указано',
    description: props.movie.description || 'Не указано',
    image: `${
      props.movie.image === null
        ? `${movieImage}`
        : `https://api.nomoreparties.co${props.movie.image?.url}`
    }`,
    trailer: props.movie?.trailerLink,
    nameRU: props.movie.nameRU || 'Не указано',
    nameEN: props.movie.nameEN || 'Не указано',
    thumbnail: `${
      props.movie.image === null
        ? `${movieImage}`
        : `https://api.nomoreparties.co${props.movie.image?.formats?.thumbnail?.url}`
    }`,
    movieId: props.movie.id,
  };

  const convertingDuration = `${Math.trunc(movie.duration / 60)}ч ${
    movie.duration % 60
  }м `;

  const image = `${
    props.movie.image === null
      ? `${movieImage}`
      : `https://api.nomoreparties.co${props.movie.image?.url}`
  }`;

  const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));

  const currentMovie = savedMovies.find(
    (movie) => movie.nameRU === props.movie.nameRU
  );

  const location = useLocation();

  const handleCLickLikeButton = () => {
    props.onMovieSave(movie);
    setIsSaved(true);
  };

  const handleCardMouseOver = () => {
    setIsVisibleDeleteButton(true);
  };

  const handleCardMouseOut = () => {
    setIsVisibleDeleteButton(false);
  };

  const handleClickDisLikeButton = () => {
    setIsSaved(false);
    props.onDeleteMovie(currentMovie._id);
  };

  function handleDeleteMovie() {
    props.onDeleteMovie(props.movie._id);
    setIsSaved(false);
  }

  useEffect(() => {
    if (currentMovie) {
      setIsSaved(true);
    }
  }, [currentMovie, location]);

  return (
    <article className='movies-card'>
      <div className='movies-card__image__container'>
        <a
          className='movies-card__link'
          href={props.saved ? props.movie.trailer : props.movie.trailerLink}
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={props.saved ? props.movie.image : image}
            className='movies-card__image'
            alt={props.movie.nameRU}
          />
        </a>
      </div>
      <div
        className='movies-card__title-container'
        onMouseEnter={handleCardMouseOver}
        onMouseLeave={handleCardMouseOut}
      >
        <h3 className='movies-card__name'>{props.movie.nameRU}</h3>
        <p className='movies-card__duration'>{convertingDuration}</p>
        {props.saved ? (
          <button
            className={`movies-card__button-delete ${
              isVisibleDeleteButton
                ? 'movies-card__button-delete_visible'
                : ''
            }`}
            onClick={handleDeleteMovie}
          ></button>
        ) : (
          <button
            className={`movies-card__saved-button ${
              isSaved ? 'movies-card__saved-button_active' : ''
            }`}
            onClick={isSaved ? handleClickDisLikeButton : handleCLickLikeButton}
          ></button>
        )}
      </div>
    </article>
  );
}

export default MoviesCard;
