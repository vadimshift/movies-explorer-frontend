import './NavTab.css';
import { HashLink } from 'react-router-hash-link';

function NavTab() {
  return (
    <nav className='navtab'>
      <HashLink smooth to='#about-project'>
        <button className='navtab__button'>О проекте</button>
      </HashLink>
      <HashLink smooth to='#techs'>
        <button className='navtab__button'>Технологии</button>
      </HashLink>
      <HashLink smooth to='#about-me'>
        <button className='navtab__button'>Студент</button>
      </HashLink>
    </nav>
  );
}

export default NavTab;
