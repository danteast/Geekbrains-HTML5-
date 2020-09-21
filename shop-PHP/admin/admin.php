<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<body>
<div class="header">
<?php
$gtitle="Админ панель";
$gmtitle="Админ панель";
$qdesc="Лучший интернет магазин смартфонов";
$email=$_SESSION['admin'];
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 
include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/header.php");
include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/menu.php");
$sql3  = "select name,login from users WHERE login='$email'";
$res3 = mysqli_query($connect,$sql3);
while($data3 = mysqli_fetch_assoc($res3)){$login=$data3['name'];$login2=$data3['email'];}
?>
</div>
<div class="zagl"><h1><?=$gtitle?></h1></div>
  <div class="container admin">
  <?
if (!empty  ($email)){?>
<div>Добро пожаловать, мой Господин!</div>
<h3 style="text-align:left;">Товары в каталоге</h3>
<div class="adminproducts">
<?$sql  = "select * from products ORDER BY id DESC";
$res = mysqli_query($connect,$sql);
while($data = mysqli_fetch_assoc($res)){?>
		<div class="adminproduct">
		<div class="small_img"><img src="<?=$data['pathsmall'].=$data['filename']?>" alt="<?=$data['title']?>"></div>
		<div class="product_title"><span>ID: </span><?=$data['id']?><hr></div>
		<div class="product_title"><span>Название: </span><?=$data['title']?><hr></div>
		<div class="small_desc"><span>Кракое описание: </span><?=$data['small_desc']?><hr></div>
		<div class="big_desc"><span>Полное описание: </span><?=$data['full_desc']?></div><hr>
		<div class="price"><span>Цена: </span><?=$data['price']?> Руб.</div><?$ids=$data['id']?>
		<div><form action="../admin/adminhelper.php" method="POST"><input type="hidden" name="ids" value="<?=$ids?>">
		<input class="cartbtn" type="submit" name="correct" value="Редактировать">
		<input class="cartbtn" type="submit" name="delete" value="Удалить"></form></div>   
		</div>
		<?
?>
<?}?>
  </div><h3>Добавление товаров</h3>
  <div class="formadmin">
         <form enctype="multipart/form-data" action="adminhelper.php" method="POST">
		 <input name = "title" type="text" required placeholder="Название товара">
		 <input name = "alias" type="text" required placeholder="Псевдоним товара">
		  <textarea name = "full_desc" rows="10" type="text" required placeholder="Полное описание"></textarea>
		  <textarea name = "small_desc" rows="10" type="text" required placeholder="Краткое описание"></textarea>
		 <input name = "price" type="number" step="any" required placeholder="Цена товара">
             <input name="userfile" type="file" required><br><br>
             <p><input class="btn" type="submit" value="Добавить товар"></p>
         </form>
    </div>  
<?}	
else {?><h3>Авторизация</h3>
<div style="text-align:center;">Тестовый логин: admin  Тестовый пароль: 123</div><br>
	<form action="../modules/passadmin.php" method="POST">
		<input type="text" name="admin" placeholder="Ваш логин" value="">
		<input type="password" name="passs" placeholder="Ваш пароль" value="">
		 <input class="cartbtn" type="submit" value="Войти">
		 </form><hr>
<?		 
}
 
  if ($email){?>
  <form action="../modules/exit.php" method="POST">
		<input class="cartbtn" type="submit" name="exitadmin" value="Выйти">
		</form>
   </div>
<?}?>
<?include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/footer.php");?>   
</body>
  </html>