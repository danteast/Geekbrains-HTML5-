<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<body>
<div class="header">
<?php
$gtitle="Редактирование товара";
$gmtitle="Редактирование товара";
$qdesc="Лучший интернет магазин смартфонов";
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 
include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/header.php");
include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/menu.php");
$ids = $_SESSION['ids']?>
</div>
<div class="zagl"><h1><?=$gtitle." с id  ".$ids?></h1></div>
  <div class="container products">
  <?$sql  = "select * from products WHERE id='$ids'";
$res = mysqli_query($connect,$sql);
while($data = mysqli_fetch_assoc($res)){?>
		<div class="formadmin">
		<form enctype="multipart/form-data" action="adminhelper.php" method="POST">
		<input name = "ids" type="hidden" value="<?=$ids?>">
		<div><label for="title">Название товара:</label><br><input name = "title" type="text" value="<?=$data['title']?>"></div>
		<div><label for="alias">Псевдоним товара:</label><br><input name = "alias" type="text" value="<?=$data['alias']?>"></div>
		<div><label for="full_desc">Полное описание:<br></label><textarea name = "full_desc" rows="10" type="text"><?=$data['full_desc']?></textarea></div>
		<div><label for="small_desc">Краткое описание:<br></label><textarea name = "small_desc" rows="10" type="text"><?=$data['small_desc']?></textarea></div>
		<div><label for="price">Стоимость товара:<br></label><input name = "price" type="number" step="any" value="<?=$data['price']?>"></div>
             <div><label for="file">Изображение товара:</label><br>
			 <input name="userfile" type="file" required></div><br><br>
             <p><input class="btn" name="izm" type="submit" value="Сохранить"></p>
         </form>
		</div>
		<?
?>
<?}?>
<?include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/footer.php");?>	   
</body>
</html>
