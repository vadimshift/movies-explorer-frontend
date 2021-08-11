import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import * as AuthApi from '../../utils/AuthApi';
import * as MainApi from '../../utils/MainApi';
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

  //регистрация пользователя
  const onRegister = (data) => {
    return AuthApi.register(data)
      .then(() => {
        history.push('/signin');
      })
      .catch((err) => console.log(err));
  };
  //авторизация пользователя
  const onLogin = (data) => {
    return AuthApi.authorization(data)
      .then((data) => {
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => console.log(err));
  };
  //записываем информацию о пользователе в глобальную переменную
  useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  //Редактирование профиля пользователя
  const handleEditUserInfo = ({ name, email }) => {
    MainApi.editUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  };
  //Выход с сайта
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/');
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} />
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
            onLogout={handleLogout}
            component={Profile}
            onEdit={handleEditUserInfo}
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
