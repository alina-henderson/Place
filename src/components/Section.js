export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  // setData(data) {
  //   this._occupation.textContent = data._occupation;
  //   this._name.textContent = data.name
  // }

  // getData(data) {
  //   return{
  //     name: this._name.textContent,
  //     occupation: this._occupation.textContent
  //   }
  // }

  renderItems(cards) {
    cards.forEach((cards) => {
      this._renderer(cards);
    })
  }
}