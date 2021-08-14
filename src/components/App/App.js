import './App.css';
import React, { useState, useEffect } from 'react';
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  Redirect,
} from 'react-router-dom';
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
  const [messageEditProfile, setMessageEditProfile] = useState('');
  const [messageErrorRegister, setMessageErrorRegister] = useState('');
  const [messageErrorLogin, setMessageErrorLogin] = useState('');
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(true);
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isMoviesErrorActive, setIsMoviesErrorActive] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isCheckShortMovies, setIsCheckShortMovies] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const isLoggedIn = localStorage.getItem('loggedIn');

  const location = useLocation();
  const history = useHistory();

  const handleCheckingShortMovies = (e) => {
    setIsCheckShortMovies(e.target.checked);
  };

  const handleLogin = (password, email) => {
    setIsSaving(true);

    MainApi.authorize(password, email)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('loggedIn', 'true');
          setIsLogin(true);
          setMessageErrorLogin('');
          history.push('/movies');
        } else if (data.error === 'Bad Request') {
          setMessageErrorLogin('Введены невалидные данные');
        } else if (data.message) {
          setMessageErrorLogin(data.message);
        }
      })
      .catch(() => {
        setMessageErrorLogin('Что-то пошло не так...');
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  const handleRegister = (name, password, email) => {
    setIsSaving(true);
    MainApi.register(name, password, email)
      .then((res) => {
        if (res) {
          setMessageErrorRegister('');
          handleLogin(password, email);
        } else if (res.error === 'Bad Request') {
          setMessageErrorRegister('Введены невалидные данные');
        } else if (res.message) {
          setMessageErrorRegister(res.message);
        }
      })
      .catch(() => {
        setMessageErrorRegister('Что-то пошло не так...');
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  const clearAllErrorMessages = () => {
    setMessageErrorRegister('');
    setMessageErrorLogin('');
    setMessageEditProfile('');
  };

  const handleEditUserInfo = (name, email) => {
    MainApi.editUserData(token, name, email)
      .then((newUser) => {
        if (newUser._id) {
          setCurrentUser(newUser);
          setIsUpdateSuccess(true);
          setMessageEditProfile('Профиль успешно обновлен!');
        } else if (newUser.message) {
          setMessageEditProfile(newUser.message);
          setIsUpdateSuccess(false);
        }
        return;
      })
      .catch(() => {
        setMessageEditProfile('При обновлении профиля произошла ошибка');
        setIsUpdateSuccess(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    setMovies([]);
    setIsLogin(false);
    setAllMovies([]);
    history.push('/');
  };

  const handleSearchMovies = (movies, keyWord) => {
    let filteredMovies = [];

    movies.forEach((movie) => {
      if (movie.nameRU.indexOf(keyWord) > -1) {
        if (isCheckShortMovies) {
          if (movie.duration <= 40) {
            return filteredMovies.push(movie);
          }
          return;
        }

        return filteredMovies.push(movie);
      }
    });

    return filteredMovies;
  };

  const searchSavedMovies = (keyWord) => {
    const allSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const searchSavedResult = handleSearchMovies(allSavedMovies, keyWord);
    setSavedMovies(searchSavedResult);
  };

  const handleDeleteMovie = (movieId) => {
    MainApi.deleteMovie(token, movieId)
      .then(() => {
        const newSavedMovies = savedMovies.filter((deletedMovie) => {
          return deletedMovie._id !== movieId;
        });
        setSavedMovies(newSavedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
      })
      .catch((err) => {
        console.log(`Ошибка ${err}, попробуйте еще раз`);
      });
  };

  const handleSaveMovie = (movie) => {
    MainApi.saveMovie(token, movie)
      .then((savedMovie) => {
        const films = [...savedMovies, savedMovie];
        localStorage.setItem('savedMovies', JSON.stringify(films));
        setSavedMovies((prevState) => [...prevState, savedMovie]);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}, попробуйте еще раз`);
      });
  };

  const searchMovies = (keyWord) => {
    setIsLoading(true);
    setMovies([]);
    setNotFound(false);
    setIsMoviesErrorActive(false);

    if (allMovies.length === 0) {
      MoviesApi.getMovies()
        .then((movies) => {
          setAllMovies(movies);
          const searchResult = handleSearchMovies(movies, keyWord);

          if (searchResult.length === 0) {
            setNotFound(true);
            setMovies([]);
          } else {
            localStorage.setItem('movies', JSON.stringify(searchResult));
            setMovies(JSON.parse(localStorage.getItem('movies')));
          }
        })
        .catch(() => {
          setIsMoviesErrorActive(true);
          setMovies([]);
        })
        .finally(() => {
          setIsLoading(false);
          setIsCheckShortMovies(false);
        });
    } else {
      const searchResult = handleSearchMovies(allMovies, keyWord);

      if (searchResult.length === 0) {
        setNotFound(true);
        setMovies([]);
        setIsLoading(false);
        setIsCheckShortMovies(false);
      } else if (searchResult.length !== 0) {
        localStorage.setItem('movies', JSON.stringify(searchResult));
        setMovies(JSON.parse(localStorage.getItem('movies')));
        setIsLoading(false);
        setIsCheckShortMovies(false);
      } else {
        setIsMoviesErrorActive(true);
        setMovies([]);
        setIsCheckShortMovies(false);
      }
    }
  };

  useEffect(() => {
    const checkToken = () => {
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        const searchedMovies = JSON.parse(localStorage.getItem('movies'));

        if (token) {
          Promise.all([
            MainApi.getUserData(token),
            MainApi.getSavedMovies(token),
          ])
            .then(([userData, movies]) => {
              setCurrentUser(userData);
              setToken(localStorage.getItem('token'));
              const films = [...savedMovies, movies];
              localStorage.setItem('savedMovies', JSON.stringify(films));
              setSavedMovies((prevState) => [...prevState, movies]);
              setMovies(searchedMovies);
              localStorage.setItem('loggedIn', 'true');
            })
            .catch((err) => {
              console.log(`Ошибка ${err}, попробуйте еще раз`);
            });
        }
      }
    }
    checkToken();
    // eslint-disable-next-line
  }, [history, isLoggedIn, isLogin]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setMessageEditProfile('');

    MainApi.getSavedMovies(token).then((res) => {
      setSavedMovies(res);
    });
  }, [location]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={isLoggedIn} /* loggedIn={loggedIn} */ />
          </Route>
          <Route exact path='/'>
            {isLoggedIn ? <Redirect to='/' /> : <Redirect to='/sign-in' />}
          </Route>
          <ProtectedRoute
            exact
            path='/movies'
            component={Movies}
            loggedIn={isLoggedIn}
            movies={movies}
            onSearchMovies={searchMovies}
            isLoading={isLoading}
            notFound={notFound}
            isErrorActive={isMoviesErrorActive}
            onMovieSave={handleSaveMovie}
            onDeleteMovie={handleDeleteMovie}
            savedMovies={savedMovies}
            onCheckingShortMovies={handleCheckingShortMovies}
            isCheckShortMovies={isCheckShortMovies}
          />
          <ProtectedRoute
            exact
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={isLoggedIn}
            movies={savedMovies}
            onDeleteMovie={handleDeleteMovie}
            onSearchSavedMovies={searchSavedMovies}
            onCheckingShortMovies={handleCheckingShortMovies}
            isCheckShortMovies={isCheckShortMovies}
          />
          <ProtectedRoute
            exact
            path='/profile'
            loggedIn={isLoggedIn}
            component={Profile}
            onLogout={handleLogout}
            onChangeUser={handleEditUserInfo}
            message={messageEditProfile}
            isUpdateSuccess={isUpdateSuccess}
            isSaving={isSaving}
          />
          <Route exact path='/signup'>
            {isLoggedIn ? (
              <Redirect to='/' />
            ) : (
              <Register
                onRegister={handleRegister}
                errorMessage={messageErrorRegister}
                onClear={clearAllErrorMessages}
                isSaving={isSaving}
              />
            )}
          </Route>
          <Route exact path='/signin'>
            {isLoggedIn ? (
              <Redirect to='/' />
            ) : (
              <Login
                onLogin={handleLogin}
                errorMessage={messageErrorLogin}
                onClear={clearAllErrorMessages}
                isSaving={isSaving}
              />
            )}
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
