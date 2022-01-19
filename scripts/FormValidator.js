class FormValidator {
  constructor(selector) {
    this._selector = selector;
  }

  _getTemplate() { //returns template by selector
    return document.querySelector(this._selector)
    .content
    .querySelector('.form')
    .cloneNode(true)
  }
  
  getView() {
    return this._getTemplate();
  }
}

export default FormValidator;