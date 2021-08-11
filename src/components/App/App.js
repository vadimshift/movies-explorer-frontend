import './App.css';
import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import * as AuthApi from '../../utils/AuthApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(loggedIn);

  const onRegister = (data) => {
    return AuthApi.register(data)
      .then(() => {
        history.push('/signin');
      })
      .catch((err) => console.log(err));
  };

  const onLogin = (data) => {
    return AuthApi.authorization(data)
      .then((data) => {
        setLoggedIn(true);
        localStorage.setItem('token', data.token);
        history.push('/movies');
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
            component={Movies}
          />
          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
          />
          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            component={Profile}
          />
          <Route path='/signin'>
            <Login onLogin={onLogin} />
          </Route>
          <Route path='/signup'>
            <Register onRegister={onRegister} />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
