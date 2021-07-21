import './Navigation.css';

function Navigation(props) {
    return (
      <div className="navigation">
          {props.children}
      </div>
    );
  }
  
  export default Navigation;