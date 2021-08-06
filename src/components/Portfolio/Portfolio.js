import './Portfolio.css';
import linkpick from '../../images/portfoliolink.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio-me__links-container'>
          <li className='portfolio__links'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/vadimshift/how-to-learn'
              className='portfolio__link'
            >
              Статичный сайт
            </a>
            <img
              className='portfolio__link-pic'
              src={linkpick}
              alt='Стрелка'
            ></img>
          </li>
          <li className='portfolio__links'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/vadimshift/russian-travel'
              className='portfolio__link'
            >
              Адаптивный сайт
            </a>
            <img
              className='portfolio__link-pic'
              src={linkpick}
              alt='Стрелка'
            ></img>
          </li>
          <li className='portfolio__links'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/vadimshift/react-mesto-api-full'
              className='portfolio__link'
            >
              Одностраничное приложение
            </a>
            <img
              className='portfolio__link-pic'
              src={linkpick}
              alt='Стрелка'
            ></img>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
