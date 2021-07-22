import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function Techs(props) {
  return (
    <section className="techs">
         <SectionTitle title="Технологии" />
         <h3 className="techs__title">7 технологий</h3>
         <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
         <div className="techs-list">
            <item className="techs-list__item">HTML</item>
            <item className="techs-list__item">CSS</item>
            <item className="techs-list__item">JS</item>
            <item className="techs-list__item">React</item>
            <item className="techs-list__item">Git</item>
            <item className="techs-list__item">Express.js</item>
            <item className="techs-list__item">mongoDB</item>
         </div>
    </section>
  );
}

export default Techs;