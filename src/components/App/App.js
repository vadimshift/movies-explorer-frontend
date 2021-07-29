import './App.css';
import { Route, Switch } from 'react-router-dom';

import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className='page'>
      <div className='page__container'>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/signin'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Register />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
