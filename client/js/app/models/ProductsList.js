class ProductsList {
  constructor() {
    this._products = [];
  }

  add(product) {
    this._products.push(product);
  }

  get products() {
    return [].concat(this._products);
  }
}
