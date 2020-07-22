class ProductList {
  constructor(container = ".product") {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProduct();
    this.render();
  }
  _fetchProduct() {
    this.goods = [
      { id: 1, title: "Монитор", price: "150" },
      { id: 2, title: "Клавиатура", price: "35" },
      { id: 3, title: "Системный блок", price: "135" },
      { id: 4, title: "Мышь оптическая", price: "15" },
    ];
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const item = new ProductItem(product);
      block.insertAdjacentHTML("beforeend", item.render());
    }
    block.insertAdjacentHTML("beforeend", this.renderfinalProductListSum());
  }

  /**
   * метод считает общую стоимость всех товаров на странице
   */
  finalProductListSum() {
    let finalSum = 0;
    this.goods.forEach(function (item) {
      finalSum += +item.price;
    });
    return finalSum;
  }

  /**
   * метод рендерит строку Итоговая цена всех товаров
   */
  renderfinalProductListSum() {
    return `<div class="finalSum">Итоговая цена всех товаров - ${this.finalProductListSum()} $</div>`;
  }
}

class ProductItem {
  constructor(product, img = "https://placehold.it/200x150") {
    this.id = product.id;
    this.img = img;
    this.title = product.title;
    this.price = product.price;
  }
  render() {
    return `<div class="goods-item"><img src='${this.img}' alt = 'pic'><h3>${this.title}</h3><p>${this.price} $</p>
    <button class='buy-btn'>Купить</button></div>`;
  }
}

/**
 * класс "Корзина"
 */
class Cart {
  constructor(container = ".cart") {
    this.container = container;
    this.cart = [];
    this.cartBtn = document.getElementById("cartBtn");
    this.FinalSum = 0;
  }

  /**
   * Метод "кладет" id продукта в массив корзины
   * @param {object} product
   */
  putProductInCart(product) {
    this.cart.push(product);
  }

  /**
   * Метод  назначает "слушатель событий" для кнопки Корзины
   */
  addCartBtnClickListener() {
    this.cartBtn.addEventListener("click", this.renderCart.bind(this));
  }

  /**
   * Метод отрисовывает Корзину в виде таблицы
   */
  renderCart() {
    const cartTable = document.querySelector(this.container);
    for (let product of this.cart) {
      const item = new CartItem(product);
      cartTable.insertAdjacentHTML("beforeend", item.renderCartItem());
    }
  }
}

/**
 * класс "Товар в Корзине"
 */
class CartItem {
  constructor(product) {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.quantity = product.quantity;
  }

  /**
   * Метод считает количество выбранного товара
   */
  countProduct() {
    return this.quantity++;
  }

  /**
   * Метол отрисовывает строку товара в таблице Корзины
   */
  renderCartItem() {
    return `<tr class="cart-item">
            <td>${this.id}</td>
            <td>${this.title}</td>
            <td>${this.price}</td>
         <td>${this.quantity}</td>
    < button class = 'cancel' > Отменить < /button></tr > `;
  }
}

let List = new ProductList();
