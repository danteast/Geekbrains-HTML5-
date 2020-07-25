const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
class ProductList {
  constructor(container = ".product") {
    this.container = container;
    this.buyBtn = document.querySelector('.buy-btn')
    this.goods = [];
    this.allProducts = [];
    this._getProducts()
      .then(data => {
        this.goods = [...data];
        this.render()
      });
    // this.cartBlock = new Cart();
    // this.cartItem = new CartItem();    
    // productList.init(cartItem, cartBlock)

  }
  init(cartBlock) {
    // this.cartItem = cartItem;
    this.cartBlock = cartBlock
  }

  _getProducts() {
    return fetch(`${API}/catalogData.json`)
      .then(result => result.json())
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const item = new ProductItem(product);
      block.insertAdjacentHTML("beforeend", item.render());
    }
    block.insertAdjacentHTML("beforeend", this.renderfinalProductListSum());
  }


  rerenderCart() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const item = new ProductItem(product);
      block.insertAdjacentHTML("beforeend", item.render());
    }
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
    this.title = product.product_name;
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
  constructor(container = ".cart", productQuantity) {
    this.container = container;
    this.productQuantity = productQuantity;
    this.cartBlock = document.querySelector(".cart");
    this.cartTable = document.querySelector(".cartTable");
    this.cart = [];
    this.cancelArr = [];
    this.buyArr = [];
    this.cartBtn = document.getElementById("cartBtn");
    this.FinalSum = 0;
    this._putProductsInCart()
      .then(data => {
        this.cart = [...data.contents];
        // for (let item of this.cart) {
        //   this.reInitQuantity(item.id)
        // }
      });

  }

  init(productList) {
    // this.cartItem = cartItem;
    this.productList = productList
  }

  _putProductsInCart() {
    return fetch(`${API}/getBasket.json`)
      .then(result => result.json())
      .catch(error => {
        console.log(error);
      })
  }



  // reInitQuantity(productId) {
  //   const item = this.cart.find(elem => elem.id = productId)
  //   item.quantity = this.productQuantity[this.cart.indexOf(item)]
  // }

  /**
   * Метод  назначает "слушатель событий" для кнопки Корзины
   */
  addCartBtnClickListener() {
    this.cartBtn.addEventListener("click", this.renderCart.bind(this));
  }

  addCancelBtnClickListener(index) {
    this.cancelArr[index] = [...document.querySelectorAll('.cancel')][index];
    this.cancelArr[index].id = index;
    // let event = null;
    this.cancelArr[index].addEventListener("click", (event) => {
      let y = event.currentTarget.id;
      if (this.cart[y].quantity > 1) {
        this.cart[y].quantity--
      } else {
        this.cart.splice(y, y + 1);
      }
      this.renderCart2();
      this.cancelArr[index].id = 0;
    });

  }

  /**
   * Метод отрисовывает Корзину в виде таблицы
   */
  renderCart() {
    this.checkCartStatus();
    for (let product of this.cart) {
      const item = new CartItem(product);
      const index = this.cart.indexOf(product);
      this.cartTable.insertAdjacentHTML("beforeend", item.renderCartItem());
      this.addCancelBtnClickListener(index)
    }
  }


  renderCart2() {
    this.cartTable.innerHTML = '';
    for (let product of this.cart) {
      const item = new CartItem(product);
      const index = this.cart.indexOf(product);
      this.cartTable.insertAdjacentHTML("beforeend", item.renderCartItem());
      this.addCancelBtnClickListener(index)
    }
  }

  addBuyBtnClickListener() {
    this.buyArr = [...document.querySelectorAll('.buy-btn')];
    this.buyArr.forEach(btn => {
      btn.id = index;
      this.addEventListener("click", (event) => {
        let y = event.currentTarget.id;
        cartBlock.cart[y].quantity++;
        // const cart = new Cart()
        // cart.rerenderCart()
      });
    });
  }

  checkCartStatus() {
    if (this.cartBlock.style.display === 'block') {
      this.cartBlock.style.display = 'none';
    } else {
      this.cartBlock.style.display = 'block';
      this.cartTable.innerHTML = ''
    }
  }
}

/**
 * класс "Товар в Корзине"
 */
class CartItem {
  constructor(product) {
    this.id = product.id_product;
    this.title = product.product_name;
    this.price = product.price;
    this.quantity = product.quantity;
  }

  init(cartBlock, productList) {
    this.cartBlock = cartBlock;
    this.productList = productList
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
            <td>${this.title}</td>
            <td>цена: ${this.price} руб.</td>
         <td>${this.quantity} шт.</td>
    <td><button class = 'cancel' > Отменить</td></tr > `;
  }
}

// window.addEventListener("load", () => {
//   const productList = new ProductList();
//   const cartBlock = new Cart();
//   productList.init(cartBlock);
//   cartBlock.init(productList);
//   // const cartItem = new CartItem();
//   // cartItem.init(cartBlock, productList);

// });
let List = new ProductList();
let cart = new Cart();
cart.addCartBtnClickListener();
cart.addBuyBtnClickListener()