<?php   
    include 'config.php';
    // print_r ($connect);
    $sql = 'select * from parfumeshop where id ='.$_GET['id'];   
    $row = mysqli_query($connect, $sql);    
    $product = mysqli_fetch_assoc($row);    
    if (isset($_GET['id'])) {
    }

