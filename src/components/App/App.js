import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import * as AuthApi from '../../utils/AuthApi';
import * as MainApi from '../../utils/MainApi';
import * as MoviesApi from '../../utils/MoviesApi';
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
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [savedSearch, setSavedSearch] = useState('');
  const localStorageMovies = JSON.parse(localStorage.getItem('movies'));
  const [isMovies, setIsMovies] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSavedMovieList, setFilteredSavedMovieList] = useState([]);

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

  // Проверка токена
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      AuthApi.getContent(token).then((res) => {
        if (res) {
          setLoggedIn(true);
        }
      });
    }
  }, []);

  // Загружаем фильмы со стороннего апи в локальное хранилище
  useEffect(() => {
    setIsLoading(true);
    if (!localStorage.getItem('movies')) {
      Promise.all([MoviesApi.getMovies()]).then(([res]) => {
        localStorage.setItem('movies', JSON.stringify(res));
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
      setIsMovies(true);
    }
  }, [loggedIn]);

  //Загружаем сохраненные фильмы
  useEffect(() => {
    if (loggedIn) {
      MainApi.getSavedMovies()
        .then((res) => {
          setIsLoading(true);
          setSavedMovies(res);
          setFilteredSavedMovieList(res);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  // Добавление фильма в избранное
  const handleSavedMovie = (movie) => {
    if (movie.nameRU !== savedMovies.some((item) => item.nameRU)) {
      return MainApi.handleSaveMovies(movie)
        .then((saveMovie) => {
          setSavedMovies([saveMovie, ...savedMovies]);
          setFilteredSavedMovieList([saveMovie, ...filteredSavedMovieList]);
        })
        .catch((err) => console.log(err));
    }
  };
  // Удаление фильма из избранного
  const removeSavedMovie = (movieId) => {
    return MainApi.removeSaveMovie(movieId)
      .then((_) => {
        const movieList = savedMovies.filter((i) => i._id !== movieId);
        setSavedMovies(movieList);
        setFilteredSavedMovieList(movieList);
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
  };
  const handleSearchSaved = (evt) => {
    setSavedSearch(evt.target.value);
  };
  const addFilteredMovie = (value) => {
    setFilteredMovies(value);
  };
  const updateFilteredSavedMovies = (value) => {
    setFilteredSavedMovieList(value);
  };
  const editMovies = () => {
    setIsMovies(true);
  };
  function handleLogin() {
    setLoggedIn(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            handleLogin={handleLogin}
            handleSavedMovie={handleSavedMovie}
            handleSearch={handleSearch}
            search={search}
            isToggle={false}
            savedMovies={savedMovies}
            handleSaveMovie={handleSavedMovie}
            filteredMovies={filteredMovies}
            editMovies={editMovies}
            filteredMovieList={filteredMovies}
            addFilteredMovie={addFilteredMovie}
            removeSavedMovie={removeSavedMovie}
            isLoading={isLoading}
            isMovies={isMovies}
            localStorageMovies={localStorageMovies}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            handleLogin={handleLogin}
            removeSavedMovie={removeSavedMovie}
            savedMovies={savedMovies}
            isToggle={true}
            handleSearchSaved={handleSearchSaved}
            savedSearch={savedSearch}
            filteredSavedMovieList={filteredSavedMovieList}
            updateFilteredSavedMovies={updateFilteredSavedMovies}
            isLoading={isLoading}
          />
          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            component={Profile}
            onLogout={handleLogout}
            onEditProfile={handleEditUserInfo}
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
