<?php
session_start();
$ses=session_id();
$email=$_SESSION['email'];
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 
$id=$_GET['id'];
$count=$_GET['count'];
$price=$_GET['price'];
if ($email){
	$query = mysqli_query($connect,"SELECT * FROM cart WHERE product='$id' AND user='$email'");	
    if( @mysqli_num_rows( $query ) > 0 )
    {
        mysqli_query($connect,"UPDATE cart SET count = count+1 WHERE product='$id'");
		header("Location: /site/index.php");
    }
    else
    {
       mysqli_query($connect,"INSERT INTO cart (product, count, price, user, session) values ('$id', '$count', '$price', '$email', '')");
	   header("Location: /site/index.php");
}}

else{
$query = mysqli_query($connect,"SELECT * FROM cart WHERE product='$id' AND session='$ses'");	
if( @mysqli_num_rows( $query ) > 0 )
    {
        mysqli_query($connect,"UPDATE cart SET count = count+1 WHERE product='$id'");
		header("Location: /site/index.php");
    }
    else
    {
       mysqli_query($connect,"INSERT INTO cart (product, count, price, session) values ('$id', '$count', '$price', '$ses')");
	   header("Location: /site/index.php");
    }
}
?>