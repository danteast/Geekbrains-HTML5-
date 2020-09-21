<?php
session_start();
  if(!empty($_POST['paswd'])){
     $pass = "admin";
    if($_POST['paswd']==$pass){
      $_SESSION['access']=true;
      header("Location: ../admin/admin.php") ;
    }
    else {
       echo "Неправильный пароль";
    }
  }
  else
  {
    ?>
<!DOCTYPE html>
<html lang="en">
<body>
<div class="header">
<?php 
include ($_SERVER['DOCUMENT_ROOT']. "/lesson7/modules/header.php");
include ($_SERVER['DOCUMENT_ROOT']. "/lesson7/menu.php");?>
</div>
  <div class="container">
    <form method="POST">
	<h3>Введите пароль admin</h3>
      <input type="text" name="paswd">
      <input class="btn" type="submit">
    </form>
    <?php
  }
?></div>     
</body>
</html>
