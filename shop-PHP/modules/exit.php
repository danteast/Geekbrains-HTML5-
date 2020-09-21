<?php
if(isset($_POST['exit'])){
	session_start(); setcookie(session_name(), '', 100); session_unset(); session_destroy(); $_SESSION = array(); 
	header("Location: /site/pages/kabinet.php");
}
if(isset($_POST['exitadmin'])){
	session_start(); setcookie(session_name(), '', 100); session_unset(); session_destroy(); $_SESSION = array(); 
	header("Location: /site/admin/admin.php");
}
?>