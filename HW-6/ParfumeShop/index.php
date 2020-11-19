
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Интернет-магазин</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div id="app">
        <header>
            <div class="logo">Parfume Shop</div>
            <div class="cart">                
                <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
                <cart :cart-items="cartItems" :img="imgCart" :visibility="showCart" @remove="remove"></cart>
            </div>
        </header>
        <main class='products'>
            <?php
            include 'php/main.php';
            ?>
        </main>
    </div>
    <!-- <script defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js"
        integrity="sha384-0pzryjIRos8mFBWMzSSZApWtPl/5++eIfzYmTgBBmXYdhvxPc+XcFEk+zJwDgWbP" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> -->
    <!-- <script src="js/ProductComponent.js"></script>
    <script src="js/FilterComponent.js"></script>
    <script src="js/ErrComponent.js"></script> -->
    <!-- <script src="js/CartComponent.js"></script>
    <script src="js/main.js"></script> -->
</body>

</html>