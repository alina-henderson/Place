export default class Card {
	constructor(selector, name, link, alt, likes, id, userId, ownerId, handleCardClick, handleCardDelete, handleLikeCard) {
		this._selector = selector; //saved selector as class char
		this._name = name;
		this._link = link;
		this._alt = alt;
		this._likes = likes;
		this._cardId = id;
		this._userId = userId;
		this._ownerId = ownerId;
		this._handleCardClick = handleCardClick;
		this._handleCardDelete = handleCardDelete;
		this._handleLikeCard = handleLikeCard;

		this._element = this._getTemplate();
		this._image = this._element.querySelector(".element__picture");
		this._title = this._element.querySelector(".element__title");
		this._likesNumber = this._element.querySelector(".element__likes-number");
		this._trash = this._element.querySelector(".element__button-trash");
		this._like = this._element.querySelector(".element__button-like");
		this._isLike = this._likes.find((like) => like._id === this._userId);
	}

	_getTemplate() {
		//returns template by selector
		return document.querySelector(this._selector).content.querySelector(".element").cloneNode(true);
	}

	handleLike(item) {
		this._likesNumber.textContent = item.likes.length;
		this._isLike = !this._isLike;
		if (this._isLike) {
			this._like.classList.add("element__button-like_active");
		} else {
			this._like.classList.remove("element__button-like_active");
		}
	}

	removeCard = () => {
		this._element.remove();
		this._element = null;
	};

	getCardID() {
		return this._cardId;
	}

	getIsLike() {
		return this._isLike;
	}

	//returns html structure
	getView() {
		this._isLike ? this._like.classList.add("element__button-like_active") : null;

		this._image.src = this._link;
		this._image.alt = this._name;
		this._title.textContent = this._name;
		this._likesNumber.textContent = this._likes.length;

		if (this._ownerId !== this._userId) {
			this._trash.classList.add("element__button-trash_hidden");
		}

		this._setEventListeners();
		return this._element;
	}

	_setEventListeners() {
		this._like.addEventListener("click", () => this._handleLikeCard(this));
		this._trash.addEventListener("click", () => this._handleCardDelete(this));
		this._image.addEventListener("click", () => this._handleCardClick());
	}
}
