import './MoviesCard.css';
import image from "../../images/pic__COLOR_pic.svg"


function MoviesCard() {
  return (
        <article className="movies-card">
            <div className="movies-card__title-container">
                <h3 className="movies-card__name">33 слова о дизайне</h3>
                <p className="movies-card__duration">1ч 47м</p>
                <button type="button" className="movies-card__saved-button"></button>
            </div>
            <div className="movies-card__image__container">
                <img src={image} className="movies-card__image" alt="Стоп-кадр из фильма"/>
            </div>
        </article>
  );
}

export default MoviesCard;