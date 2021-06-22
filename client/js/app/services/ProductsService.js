class ProductsService {
  constructor() {
    this._http = new HttpService();
  }

  allProducts() {
    return this._http
      .get("http://localhost:3000/api/products")
      .then(products => {
        return products.map(product => new Product(product.image, product.description, product.value))
      })
      .catch(error => { 
        console.log(error)
        throw new Error("Não foi possível obter os produtos.") 
      });
  }
}
