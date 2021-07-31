import './Promo.css';

function Promo(props) {
    return (
      <section className="promo">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <span className="promo__menu">
            {props.children}
          </span>
      </section>
    );
  }
  
export default Promo;