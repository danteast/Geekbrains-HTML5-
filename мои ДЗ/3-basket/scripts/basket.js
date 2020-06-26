'use strict';
let basketbtns = document.querySelectorAll('.toBasketBtn');
basketbtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        let id = event.srcElement.dataset.id;
        let name = event.srcElement.dataset.name;
        let price = event.srcElement.dataset.price;
        basket.putProduct({
            id: id,
            price: price,
            name: name
        })
    })
});

let basket = {
    products: {},
    /**
     * главная функция
     * @param {{id: string, name: string, price: string}} product 
     */
    putProduct(product) {
        this.putProductIntoBasket(product);
        this.renderProduct(product);
        this.countFinalSum();
        this.addRemoveBtnListeners()
    },

    /**
     * Определяет, есть ли уже товар в корзине: если нет - кладет его, если есть - увеличивает счетчик
     * @param {*} product 
     */
    putProductIntoBasket(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                count: 1
            }
        } else {
            this.products[product.id].count++
        }

    },


    /**
     * отрисовывает товар в корзине
     */
    renderProduct(product) {
        let elementInside = document.querySelector(`.productCount[data-id = "${product.id}"]`);
        if (!elementInside == undefined) {
            elementInside.textContent++
            return
        }

        let newRow = `
            <tr>
                <th scope="row">${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="productCount" data-id="${product.id}">1</td>
                <td><i class="fas fa-trash-alt productRemoveBtn" data-id="${product.id}"></i></td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", newRow);
    },

    /**
     * считает итоговую стоимость товаров в корзине
     * @returns {number}  
     */
    countFinalSum(product) {
        let finalSum = 0;
        for (let key in this.products) {
            finalSum += this.products[key].price * this.products[key].count
        }
        return finalSum

    },

    /**
     * убирает товар из корзины
     */
    addRemoveBtnListeners(event) {
        let buttons = document.querySelectorAll('.productRemoveBtn');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', this.removeProductListener());
        }
    },

    removeProductListener(event) {
        basket.removeProduct(event);
        basket.renderFinalSum();
    },


    renderFinalSum() {
        document.querySelector('.total').textContent = this.countFinalSum();
    },

    removeProduct(event) {
        let id = event.srcElement.dataset.id;
        this.removeProductFromObject(id);
        this.removeProductFromBasket(id);

    },

    removeProductFromBasket(id) {
        let countTd = document.querySelector(`.productCount[data-id="${id}"]`);
        if (countTd.textContent == 1) {
            countTd.parentNode.remove();
        } else {
            countTd.textContent--;
        }
    },
    removeProductFromObject(id) {
        if (this.products[id].count == 1) {
            delete this.products[id];
        } else {
            this.products[id].count--;
        }
    }
}