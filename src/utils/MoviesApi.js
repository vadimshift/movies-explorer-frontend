const ApiUrl = 'https://api.nomoreparties.co/beatfilm-movies';

  export function getMovies() {
    return fetch(`${ApiUrl}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => data)
}