<?php
session_start();
$ses=session_id();
$semail=$_SESSION['email'];
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 
$id=$_POST['id'];
$count=$_POST['count'];
$estmail=mysqli_query($connect,"SELECT * FROM cart WHERE product='$id' AND user='$semail'");	
	if(isset (($_POST['increase'])) and ($estmail))  {
	
	mysqli_query($connect,"UPDATE cart SET count = count+1 WHERE product=$id AND user='$semail'");
		header("Location: /site/modules/cart.php");
	
}
$estses=mysqli_query($connect,"SELECT * FROM cart WHERE product='$id' AND session='$ses'");	
	
if(isset (($_POST['increase'])) and ($estses))  {
	
	mysqli_query($connect,"UPDATE cart SET count = count+1 WHERE product=$id AND session='$ses'");
		header("Location: /site/modules/cart.php");
}

 if(isset(($_POST['decrease'])) and ($estmail)){
	 if($count == 1) {
	 	mysqli_query($connect,"DELETE FROM `cart` WHERE product=$id AND user='$semail'");	 	
	 } else {
		mysqli_query($connect,"UPDATE cart SET count = count-1 WHERE product=$id AND user='$semail'");
	 }
	 header("Location: /site/modules/cart.php");
}

if(isset(($_POST['decrease'])) and ($estses)){
	if($count == 1) {
		mysqli_query($connect,"DELETE FROM `cart` WHERE product=$id AND session='$ses'");		
	} else {
	   mysqli_query($connect,"UPDATE cart SET count = count-1 WHERE product=$id AND session='$ses'");
	}
	header("Location: /site/modules/cart.php");

}



       
    

?>