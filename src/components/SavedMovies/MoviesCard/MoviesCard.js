import './MoviesCard.css';
import image from '../../../images/pic__COLOR_pic.svg';

function MoviesCard(props) {
   const timeConvert = (time) => {
    if (time <= 60) {
      return time + 'м';
    } else {
      return Math.floor(time / 60) + ' ч ' + (time % 60) + ' м';
    }
  };

  const handleDeleteMovie = (evt) => {
    evt.preventDefault();
    props.removeSavedMovie(props.movie._id);
  };
  
  return (
    <article className='movies-card'>
      <div className='movies-card__image__container'>
        <img
          src={`${
            props.movie.image === null
              ? image
              : props.movie.image 
          }`}
          className='movies-card__image'
          alt='Стоп-кадр из фильма'
        />
      </div>
      <div className='movies-card__title-container'>
        <h3 className='movies-card__name'>{props.movie.nameRU}</h3>
        <p className='movies-card__duration'>
          {timeConvert(props.movie.duration)}
        </p>
        <button
          className="movies-card__saved-button movies-card__saved-button_delete"
          type='button'
          onClick={handleDeleteMovie}
        ></button>
      </div>
    </article>
  );
}

export default MoviesCard;
