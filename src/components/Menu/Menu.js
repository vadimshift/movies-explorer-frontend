import './Menu.css';

function Menu(props) {
    return (
      <div className="menu">
          {props.children}
      </div>
    );
  }
  
export default Menu;