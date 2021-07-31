import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <SectionTitle title='Студент' />
      <div className='about-me__mega-container'>
        <div className='about-me__container'>
          <h3 className='about-me__title'>Вадим</h3>
          <h4 className='about-me__subtitle'>Фронтенд-разработчик, 31 год</h4>
          <p className='about-me__text'>
            Когда в офисе я всё починил и настроил, то понял, что пора сменить
            сферу, иначе стану невостребованным. Веб-разработку выбрал, т.к.
            имел небольшой опыт работы с HTML в студенческие годы. Живу за
            городом, в собственном доме, поэтому всё свое свободное время я
            трачу на его обустройство и на работу в саду. Недавно освоил навык
            работы со сварочным оборудованием, изготовил калитку и ворота.
            В&nbsp;данный момент осваиваю плотничное дело.
          </p>
          <ul className='about-me__links'>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://web.facebook.com/vadim.shift.9/'
                className='about-me__link'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://github.com/vadimshift'
                target='_blank'
                rel='noopener noreferrer'
                className='about-me__link'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className='about-me__avatar' src={avatar} alt='Моя фотография' />
      </div>
    </section>
  );
}

export default AboutMe;
