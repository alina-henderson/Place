export default class Card {
  constructor(selector, name, link, alt, handleCardClick) {
    this._selector = selector; //saved selector as class char
    this._name = name;
    this._link = link;
    this._alt = alt;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._cardPic = this._element.querySelector('.element__picture');
    this._like = this._element.querySelector('.element__button-like');
  }

  _getTemplate() { //returns template by selector
    return document.querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true)
  }

  _likeCard = () => {
    this._like.classList.toggle('element__button-like_active')
  }

  _deleteCard = () => {
    this._element.remove();
    this._element = null
  }

  //returns html structure
  getView() { 
    this._cardPic.src = this._link;
    this._cardPic.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._like.addEventListener('click', this._likeCard);
    this._element.querySelector('.element__button-trash').addEventListener('click', this._deleteCard);
    this._cardPic.addEventListener('click',() => {
    this._handleCardClick()
  });
  }
}