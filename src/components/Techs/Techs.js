import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function Techs(props) {
  return (
    <section className='techs' id='techs'>
      <div className='techs__container'>
        <SectionTitle title='Технологии' />
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__subtitle'>
          На курсе веб-разработки мы освоили технологии, которые применили
          в&nbsp;дипломном проекте.
        </p>
        <div className='techs-list'>
          <div className='techs-list__item'>HTML</div>
          <div className='techs-list__item'>CSS</div>
          <div className='techs-list__item'>JS</div>
          <div className='techs-list__item'>React</div>
          <div className='techs-list__item'>Git</div>
          <div className='techs-list__item'>Express.js</div>
          <div className='techs-list__item'>mongoDB</div>
        </div>
      </div>
    </section>
  );
}

export default Techs;
