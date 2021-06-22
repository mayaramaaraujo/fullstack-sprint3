class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._alert = new Bind(
      new Alert(),
      new AlertView($('#alertView')),
      'message'
    );

    this._productsList = new Bind(
      new ProductsList(), 
      new ProductsView($('#productsList')), 
      'add');

    this.allProducts();
  }

  allProducts() {
    // TODO: implementar

    let service = new ProductsService();
    service
      .allProducts()
      .then(products => {
        products.forEach(product => {
          this._productsList.add(product);
        })
      })
      .catch(error => {
        console.log(error)
        this._alert.message = error;
      });

    // this._alert.message = 'ProductsController ainda não foi implementado.';
  }
}
