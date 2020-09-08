<?php   
    include 'config.php';
    // print_r ($connect);
    $sql = 'select * from parfumeshop where id ='.$_GET['id'];   
    $row = mysqli_query($connect, $sql);
    $product = mysqli_fetch_assoc($row);     
        ?>
        <link rel="stylesheet" href="../css/style.css">
        <div class = 'product-card-big'>        
            <h1 class = 'title'><?= $product['brand']?></h1>
            <img class='photo-alt' src="../<?= $product['image_alt']?>" alt='picture'>
            <h3 class = 'descr'><?= $product['description']?></h3>
            <h3 class = 'price'>Цена - <?= $product['price']?>$</h3>         
            <h4 class = 'descr'><?= $product['full_descr']?></h4>        
        </div>  
        
