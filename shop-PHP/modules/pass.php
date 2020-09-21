<?php
session_start();
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 
$salt = "6wBmGSCsBE";
$emails = (!empty($_POST['emails'])) ? strip_tags($_POST['emails']) : '';
$passs = (!empty($_POST['passs'])) ? $salt.md5(strip_tags($_POST['passs'])).$salt : '';
$sql = "select id from users where email='$emails' and pass='$passs'";
$res = mysqli_query($connect,$sql);

if(mysqli_num_rows($res)>0){
    $_SESSION['email'] = $emails;
	header("Location: /site/pages/kabinet.php");
    
}
else{
   header("Location: /site/pages/kabinet.php");
}