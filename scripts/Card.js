class Card {
  constructor(name, link, alt) {
      this.name = name;
      this.link = link;
      this.alt = alt;
  }
  _getTemplate() {
    return document.querySelector(this._selector)
    .content
    .querySelector('.element')
    .cloneNode(true)
  }

  getView() {
    this._element = this._getTemplate();
    this._cardPic = this._element.querySelector('.element__picture');
    this._cardPic.src = this._link;
    this._cardPic.alt = this._alt;
    this._element.querySelector('.element__title').textContent = this.name;


    return this._element;
  }
}

export default Card;