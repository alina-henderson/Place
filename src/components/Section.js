export default class Section {
  constructor({ renderer }, containerSelector) {
    // this._items = items;
    // this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }


  addItem(element) {
    this._container.prepend(element);
  }


  renderItems(cards) {
    console.log('cards', cards)
    cards.forEach((item) => {
      console.log('item', item)
      console.log('rendered', this._renderer)
      this._renderer(item);
    })
  }
}