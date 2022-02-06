export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  //вставляет element методом prepend в поле _container

  addItem(element) {
    const element = this._renderer(item);
    this._container.prepend(element);
  }


  renderItem() {
    this._items.forEach((item) => {
      this.addItem(element);
    })

}