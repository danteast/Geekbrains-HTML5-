<?php    
    include 'config.php';
    // print_r ($connect);
    $sql = 'select * from parfumeshop';
    $table = mysqli_query($connect, $sql);            
    while($data = mysqli_fetch_assoc($table)) {               
        ?>
        <div class = 'product-item'>        
        <a class='product-card' href="php/product-card.php?id=<?= $data['id'] ?>" target='_blank' onclick = <?= $data['look'] ?>>
            <h2 class = 'title'><?= $data['brand']?></h2>
            <img class='photo' src="<?= $data['image']?>">
            <p class='under'>Фото просмотрено - <?= $data['look'] ?> раз(a)</p>
            <h3 class = 'descr'><?= $data['description']?></h3>
            <h3 class = 'price'><?= $data['price']?>$</h3>           
        </a><br>
        <a class='buy-btn' href="php/cart.php?id=<?= $data['id'] ?>" target='_blank'>В корзину</a>
       <!-- <input class = 'buy-btn' type='submit' name='btn[]' value='В корзину'> -->
        
        </div>  
        <?php
            
        }
        ?> 
     
    


<!-- <script>
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        showCart: false,
        errorResult: 0,
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        cartItems: [],
        filtered: [],
        imgCart: 'https://placehold.it/50x100',
        products: [],
        imgProduct: 'https://placehold.it/200x150'
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        addProduct(item) {
            this.errorResult = 0;
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cartItems.find(el => el.id_product === item.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            const prod = Object.assign({
                                quantity: 1
                            }, item);
                            this.cartItems.push(prod)
                        }
                    } else {
                        this.errorResult = 1
                    }
                })
        },
        remove(item) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        },
        filter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let item of data.contents) {
                    this.$data.cartItems.push(item);
                }
            });
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
       
    }

});
</script> -->