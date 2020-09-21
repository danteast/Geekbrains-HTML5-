<?php
session_start();
$ses=session_id();
$semail=$_SESSION['email'];
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 
$name=$_POST['name'];
$email=$_POST['email'];
$salt = "6wBmGSCsBE";
$query = mysqli_query($connect,"SELECT * FROM cart WHERE user='$semail'");	
if( @mysqli_num_rows( $query ) > 0 )
    {
     $sql  = "select product,count,price  from cart where user='$semail'";
     $res = mysqli_query($connect,$sql);
	 while($data = mysqli_fetch_assoc($res)){
		$idproduct=$data['product'];
		$count=$data['count'];
		$price=$data['price'];
	 	
     mysqli_query($connect,"INSERT INTO orders (email, product, count, price, status) VALUES ('$semail', '$idproduct', '$count', '$price', 'оформлен')");	
	 mysqli_query($connect,"DELETE FROM `cart` WHERE user='$semail'");
	 header("Location: /site/pages/kabinet.php");
    }
	}
    else
    {
		
    $_SESSION['email'] = $email;
	$_SESSION['name'] = $name;
    $query = sprintf("INSERT INTO users (name, email, pass) VALUES ('%s','%s','%s')", mysqli_real_escape_string($connect, $name),mysqli_real_escape_string($connect, $email),mysqli_real_escape_string($connect, $salt.md5(strip_tags($_POST['pass'])).$salt));
    mysqli_query($connect,$query);
    

  $sql  = "select * from cart where session='$ses'";
     $res = mysqli_query($connect,$sql);
     while($data = mysqli_fetch_assoc($res)){
		$idproduct=$data['product'];
		$count=$data['count'];
		$price=$data['price'];
		
     mysqli_query($connect,"INSERT INTO orders (name, email, product, count, price, status) VALUES ('$name', '$email', '$idproduct','$count','$price','оформлен')");	
	 }
	 mysqli_query($connect,"DELETE FROM `cart` WHERE session='$ses'");
		header("Location: /site/pages/kabinet.php");
    
	}

?>