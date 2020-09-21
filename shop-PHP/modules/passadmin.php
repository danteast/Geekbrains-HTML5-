<?php
session_start();
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 
$salt = "6wBmGSCsBE";
$emails = (!empty($_POST['admin'])) ? strip_tags($_POST['admin']) : '';
$passs = (!empty($_POST['passs'])) ? $salt.md5(strip_tags($_POST['passs'])).$salt : '';
$sql = "select id from users where login='$emails' and pass='$passs'";
$res = mysqli_query($connect,$sql);

if(mysqli_num_rows($res)>0){
    $_SESSION['admin'] = $emails;
	header("Location: /site/admin/admin.php");
    
}
else{
   header("Location: /site/admin/admin.php");
}