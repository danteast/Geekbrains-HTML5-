<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<body>
<div class="header">
<?php
$gtitle="Магазин элитных наручных часов";
$gmtitle="Магазин элитных наручных часов";
$qdesc="Лучший интернет магазин элитных наручных часов"; 
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php");
include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/header.php");
include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/menu.php");
?></div>
  <div class="container">
  <?php include ($_SERVER['DOCUMENT_ROOT']. "/site/pages/main.php")?>
  </div>

<?include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/footer.php");?>   
</body>
</html>

