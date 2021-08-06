import './Promo.css';
import backgroundimage from '../../images/promo-background-image.svg';
import { HashLink } from 'react-router-hash-link';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__content'>
          <div className='promo__title-container'>
            <h1 className='promo__title'>
              Учебный проект студента факультета Веб&#8209;разработки.
            </h1>
            <p className='promo__subtitle'>
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
            <HashLink smooth to='#about-project'>
              <button className='promo__nav-button'>Узнать больше</button>
            </HashLink>
          </div>
          <img
            className='promo__backgroung-image'
            src={backgroundimage}
            alt='фоновое изоображение'
          />
        </div>
      </div>
    </section>
  );
}

export default Promo;
