import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <div className='about-project__container'>
        <SectionTitle title='О проекте' />
        <div className='table'>
          <div className='table__cell'>
            <h3 className='table__heading'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='table__text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className='table__cell'>
            <h3 className='table__heading'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='table__text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className='about-project-bar'>
          <div className='about-project-bar__item about-project-bar__item_green'>
            1 неделя
          </div>
          <div className='about-project-bar__item about-project-bar__item_grey'>
            4 недели
          </div>
          <div className='about-project-bar__item about-project-bar__item_light-grey'>
            Back-end
          </div>
          <div className='about-project-bar__item about-project-bar__item_light-grey'>
            Front-end
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
