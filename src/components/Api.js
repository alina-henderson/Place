export default class Api {
	constructor({ url, headers }) {
		this._url = url;
		this._headers = headers;
	}

	_handleResponse(res) {
		return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
	}

	getUserInfo() {
		return fetch(`${this._url}/users/me`, {
			headers: this._headers,
		}).then((res) => this._handleResponse(res));
	}

	getInitialCards() {
		return fetch(`${this._url}/cards`, {
			headers: this._headers,
		}).then((res) => this._handleResponse(res));
	}

	editProfile(userData) {
		return fetch(`${this._url}/users/me`, {
			method: "PATCH",
			headers: this._headers,
			body: JSON.stringify({
				name: userData.name,
				about: userData.occupation,
			}),
		}).then((res) => this._handleResponse(res));
	}

	addCard(data) {
		return fetch(`${this._url}/cards`, {
			method: "POST",
			headers: this._headers,
			body: JSON.stringify(data),
		}).then(this._handleResponse);
	}

	deleteCard(cardId) {
		return fetch(`${this._url}/cards/${cardId}`, {
			method: "DELETE",
			headers: this._headers,
		}).then((res) => this._handleResponse(res));
	}

	addLikeCard(id) {
		return fetch(`${this._url}/cards/${id}/likes`, {
			method: "PUT",
			headers: this._headers,
		}).then((res) => this._handleResponse(res));
	}

	deleteLikeCard(id) {
		return fetch(`${this._url}/cards/${id}/likes`, {
			method: "DELETE",
			headers: this._headers,
		}).then((res) => this._handleResponse(res));
	}

	patchAvatar(userData) {
		return fetch(`${this._url}/users/me/avatar`, {
			method: "PATCH",
			headers: this._headers,
			body: JSON.stringify({
				avatar: userData.link,
			}),
		}).then((response) => this._handleResponse(response));
	}
}
