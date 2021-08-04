import './NotFound.css';

function NotFound() {
  return (
    <section className='not-found'>
      <div className="not-found__container">
      <h3 className='not-found__title'>404</h3>
      <p className='not-found__subtitle'>Страница не найдена</p>
      <button className='not-found__link'>Назад</button>
      </div>
    </section>
  );
}

export default NotFound;
