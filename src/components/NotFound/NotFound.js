import './NotFound.css';
import { Link, useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <section className='not-found'>
      <div className='not-found__container'>
        <h3 className='not-found__title'>404</h3>
        <p className='not-found__subtitle'>Страница не найдена</p>
        <Link onClick={goBack} className='not-found__link'>
          Назад
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
