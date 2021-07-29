import './NotFound.css';

function NotFound() {
  return (
    <section className='not-found'>
      <h3 className='not-found__title'>404</h3>
      <p className='not-found__subtitle'>Страница не найдена</p>
      <button className='not-found__link'>Назад</button>
    </section>
  );
}

export default NotFound;
