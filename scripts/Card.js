import { openPopup } from "./index.js";

class Card {
  constructor(selector, name, link, alt) {
    this._selector = selector; //saved selector as class char
    this._name = name;
    this._link = link;
    this._alt = alt;
  }

  _getTemplate() { //returns template by selector
    return document.querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true)
  }

  _popupImage = () => {
    const popupPic = document.querySelector('.popup_pic');
    openPopup(popupPic);
    popupPic.querySelector('.popup__image').src = this._link;
    popupPic.querySelector(".popup__image").alt = this._alt;
    popupPic.querySelector('.popup__sign').textContent = this._name;
  }

  _likeCard = () => {
    this._element.querySelector('.element__button-like').classList.toggle('element__button-like_active')
  }

  _deleteCard = () => {
    this._element.remove();
  }

  getView() { //returns html structure
    this._element = this._getTemplate();
    this._cardPic = this._element.querySelector('.element__picture');
    this._cardPic.src = this._link;
    this._cardPic.alt = this._alt;
    this._element.querySelector('.element__title').textContent = this._name;
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__button-like').addEventListener('click', this._likeCard);
    this._element.querySelector('.element__button-trash').addEventListener('click', this._deleteCard);
    this._element.querySelector('.element__picture').addEventListener('click', this._popupImage);
  }
}

export default Card;