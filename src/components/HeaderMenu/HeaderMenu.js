import './HeaderMenu.css';
/* import { Link } from 'react-router-dom'; */

function HeaderMenu(props) {
  return (
    <>
      <nav className='header-menu'>
        {props.children}
      </nav>
      {/* <button type='button' className='header-menu__mobile-button'></button> */}
    </>
  );
}

export default HeaderMenu;
