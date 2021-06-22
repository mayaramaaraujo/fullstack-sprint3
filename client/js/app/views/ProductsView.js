class ProductsView extends View {
  constructor(element) {
    super(element);
  }

  template(data) {
    console.log(data.products)
    return `<h1>hello </h1>`
  }
}
