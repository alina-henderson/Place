export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  //вставляет element методом prepend в поле _container

  addItem(element) {
    this._container.prepend(element);
  }


  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

}