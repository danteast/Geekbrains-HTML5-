const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        cart: [],
        imgCatalog: 'https://placehold.it/200x150',
        searchLine: '',
        isVisibleCart: true
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            for (let el of this.products) {
                if (el.id_product == product.id_product && !this.cart.includes(el)) {
                    el.quantity = 1,
                        this.cart.push(el);
                } else if (el.id_product == product.id_product) {
                    product.quantity++
                }
            }

        },
        delProduct(product) {
            for (let el of this.cart) {
                if (el.id_product == product.id_product && el.quantity > 1) {
                    el.quantity--
                } else if (el.id_product == product.id_product) {
                    this.cart.splice(this.cart.indexOf(el), 1);
                }
            }
        },

        filterGoods() {
            const regExp = new RegExp(`${this.searchLine}`, 'ig');
            for (let product of this.products) {
                if (!regExp.test(product.product_name)) {
                    document.querySelector(`.product-item:nth-child(${this.products.indexOf(product) + 1})`)
                        .style.display = 'none'
                }
            }


        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            })
    }
})