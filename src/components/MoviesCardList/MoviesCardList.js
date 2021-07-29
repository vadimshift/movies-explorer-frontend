import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import More from "../More/More";

function MoviesCardList() {
  return (
      <div>
        <section className="movies-card-list">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </section>
        <More />
    </div>
  );
}

export default MoviesCardList;