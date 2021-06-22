class ProductsView extends View {
  constructor(element) {
    super(element);
  }

  template(data) {
    return data.products.map(product => {
      return `
        <li class="products__card">
          <div class="card">
            <img
              class="card__img"
              src="${product.image}"
              alt="${product.description}"
            />
            <p class="card__description">${product.description}</p>
            <p class="card__price">${product.price}</p>
          </div>
        </li>
        `
    }).join('');   
  }
}