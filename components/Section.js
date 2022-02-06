export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }


  addItem(object) {
    const element = this._renderer(object);
    this._container.prepend(element);
  }


  renderItem() {
    this._items.forEach((item) => {
      this.addItem(item);
    })

  }
}