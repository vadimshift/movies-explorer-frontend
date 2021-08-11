export const BASE_URL = 'https://api.vadim.movies-explorer.nomoredomains.rocks';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    headers,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ name, email, password }),
  }).then((res) => checkResponse(res));
};

export const authorization = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    headers,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponse(res));
};

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    /* headers, */
    method: 'GET',
    credentials: 'include',
  }).then((res) => checkResponse(res));
};

/* export const authorization = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponse(res));
}; */
