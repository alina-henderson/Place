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


    return this._element;
  }


}

export default Card;