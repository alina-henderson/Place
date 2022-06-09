export default class Card {
  constructor(selector, name, link, alt, likes, id, userId, ownerId, handleCardClick, handleCardDelete, handleLikeCard) {
    this._selector = selector; //saved selector as class char
    this._name = name;
    this._link = link;
    this._alt = alt;
    this._likes = likes;
    this._isLike = likes.some(item => item._id === this._userId);
    this._cardId = id
    this._userId = userId;
    this._ownerId = ownerId;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleLikeCard = handleLikeCard;
    this._element = this._getTemplate();
    this._cardPic = this._element.querySelector('.element__picture');
    this._like = this._element.querySelector('.element__button-like');
    this._likesNumber = this._element.querySelector('.element__likes-number');
    this._trash = this._element.querySelector('.element__button-trash')
    // if (this._isLike) {
    //   this._like.classList.add('element__button-like_active');
    // }
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

  handleLike(item) {
    this._likesNumber.textContent = item.likes.length;
    this._isLike = !this._isLike
    if (this._isLike) {
      this._like.classList.add('element__button-like_active');
    } else {
      this._like.classList.remove('element__button-like_active');
    }
  }

  _deleteCard = () => {
    this._element.remove();
    this._element = null
  }

  getCardID() {
    return this._cardID;
  }

  getIsLike() {
    return this._isLike
  }

  // _hideTrash = () => {
  //   if (this._ownerId != this._userId) {
  //     this._trash.classList.add('element__button-trash_hidden');
  //   }
  // }


  //returns html structure
  getView() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__picture').src = this._link;
    this._element.querySelector('.element__picture').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._likesNumber.textContent = this._likes.length;

    //  this._isLike ? this._like.classList.add('element__button_active') : null;

    if (this._ownerId !== this._userID) {
      this._trash.classList.add('element__button-trash_hidden')
    }
    // this._hideTrash();
    this._setEventListeners();
        console.log("this._element", this._element)

    return this._element;
  }

  _setEventListeners() {
    this._like.addEventListener('click', this._handleLikeCard);
    this._trash.addEventListener('click', this._handleCardDelete);
    this._cardPic.addEventListener('click', () => {
      this._handleCardClick()
    });
  }
}