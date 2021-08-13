import './MoviesCard.css';
import image from '../../images/pic__COLOR_pic.svg';

function MoviesCard(props) {
  const movieCard = props.movie;
  const movieURL = 'https://api.nomoreparties.co';
  const timeConvert = (time) => {
    if (time <= 60) {
      return time + 'м';
    } else {
      return Math.floor(time / 60) + ' ч ' + (time % 60) + ' м';
    }
  };
  const handleSetSavedMovie = props.savedMovies.some(
    (item) => item.nameRU === movieCard.nameRU
  );

  const checkLikeMovies = `movies-card__saved-button ${
    handleSetSavedMovie ? 'movies-card__saved-button_active' : ''
  }`;

  const handleSaveMovie = (evt) => {
    evt.preventDefault();
    if (handleSetSavedMovie) {
      return;
    }
    const movie = {
      country: movieCard.country,
      director: movieCard.director,
      duration: movieCard.duration,
      year: movieCard.year,
      description: movieCard.description,
      image: `${movieURL}${movieCard.image.url}`,
      trailer: movieCard.trailerLink,
      thumbnail: `${movieURL}${movieCard.image.formats.thumbnail.url}`,
      movieId: movieCard.id,
      nameRU: movieCard.nameRU,
      nameEN: movieCard.nameEN,
    };
    props.handleSaveMovie(movie);
  };

  const handleRemoveMovie = (evt) => {
    evt.preventDefault();
    const selectCard = props.savedMovies.find(
      (item) => item.movieId === movieCard.id
    );
    props.removeSavedMovie(selectCard._id);
  };

  return (
    <article className='movies-card'>
      <div className='movies-card__image__container'>
        <a
          className='movies-card__link'
          href={props.movie.trailerLink}
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={`${
              props.movie.image === null
                ? image
                : `https://api.nomoreparties.co${props.movie.image.url}`
            }`}
            className='movies-card__image'
            alt='Стоп-кадр из фильма'
          />
        </a>
      </div>
      <div className='movies-card__title-container'>
        <h3 className='movies-card__name'>{props.movie.nameRU}</h3>
        <p className='movies-card__duration'>
          {timeConvert(props.movie.duration)}
        </p>
        <button
          className={checkLikeMovies}
          type='button'
          onClick={handleSetSavedMovie ? handleRemoveMovie : handleSaveMovie}
        ></button>
      </div>
    </article>
  );
}

export default MoviesCard;
