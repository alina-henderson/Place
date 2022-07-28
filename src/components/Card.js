export default class Card {
  constructor(selector, name, link, alt, likes, id, userId, ownerId, handleCardClick, handleCardDelete, handleLikeCard) {
    this._selector = selector; //saved selector as class char
    this._name = name;
    this._link = link;
    this._alt = alt;
    this._likes = likes;
    this._isLike = likes.some(item => item._id === this._userId);
    this._cardId = id;
    this._userId = userId;
    this._ownerId = ownerId;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleLikeCard = handleLikeCard;

    // this._element = this._getTemplate();
    // this._cardPic = this._element.querySelector('.element__picture');
    // 
    
    // this._trash = this._element.querySelector('.element__button-trash')
  }

  _getTemplate() { //returns template by selector
    return document.querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true)
  }

  // _likeCard = () => {
  //   this._like.classList.toggle('element__button-like_active')
  // }
  // debugger
  handleLike() {
    console.log('this', this);

    // this._likesNumber = this._element.querySelector('.element__likes-number');
    this._element.querySelector('.element__likes-number').textContent = this._likes.length;
    this._like = this._element.querySelector('.element__button-like');
    this._isLike = !this._isLike
    if (this._isLike) {
      this._like.classList.add('element__button-like_active');
    } else {
      this._like.classList.remove('element__button-like_active');
    }
  }

  removeCard = () => {
    this._element.remove();
    this._element = null
  }

  getCardID() {
    return this._cardId;
  }

  getIsLike() {
    return this._isLike;
  }



  //returns html structure
  getView() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__picture').src = this._link;
    this._element.querySelector('.element__picture').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__likes-number').textContent = this._likes.length;



    if (this._ownerId !== this._userId) {
      this._element.querySelector('.element__button-trash').classList.add('element__button-trash_hidden')
    }

    this._isLike ? this._like.classList.add('element__button_active') : null;

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__button-like').addEventListener('click', () => this._handleLikeCard(this));
    this._element.querySelector('.element__button-trash').addEventListener('click', () => this._handleCardDelete(this));
    this._element.querySelector('.element__picture').addEventListener('click', () => this._handleCardClick());
  }
}