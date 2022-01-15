class Card {
  constructor(selector, name, link, alt) {
    this._selector = selector;
      this._name = name;
      this._link = link;
      this._alt = alt;
  }

  //create a card
  _getTemplate() {
    return document.querySelector(this._selector)
    .content
    .querySelector('.element')
    .cloneNode(true)
  }

  //get template , saved initial data and insert them in span
  getView() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__title');
    


    return this._getTemplate();
  }
}

export default Card;