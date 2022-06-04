export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _handleResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка ${res.status}`)
  }

getUserInfo() {
  return fetch(`${this._url}/users/me`, {
    headers: this._headers
  })
  .then((res) => this._handleResponse(res));
}

editProfile(userData) {
  return fetch(`${this._url}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name: userData.name,
      about: userData.occupation
    })
  }).then((response) => this._handleResponse(response))
}

// getInitialCards() {
//   return fetch(`${this._url}/cards `, {
//       headers: this._headers
//   })
//   .then((res) => this._handleResponse(res));
// }




}



// api.getInitialCards()
//   .then((result) => {
//     // обрабатываем результат
//   })
//   .catch((err) => {
//     console.log(err); // выведем ошибку в консоль
//   });