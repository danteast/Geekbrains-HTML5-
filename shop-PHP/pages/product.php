<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<body>
<div class="header">
<?php
$id=$_GET['id'];
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 
$sql  = "select * from products where id = $id";
$res = mysqli_query($connect,$sql);
while($data = mysqli_fetch_assoc($res)){
$gtitle=$data['title'];
$gmtitle=$data['title'];
$qdesc=$data['small_desc'];
}
include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/header.php");
include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/menu.php");
?>
</div>
  <div class="container singleproduct">
 
<div class="zagl"><h1><?=$gtitle?></h1></div>
<?
$res = mysqli_query($connect,$sql);
while($data = mysqli_fetch_assoc($res)){?>
		<div class="sproduct">
		<table><tbody>
		<tr>
		<td><div class="imgblock"><img class="big_img" src="<?=$data['pathbig'].=$data['filename']?>" alt="<?=$data['title']?>"></div></td>
		<td><div class="descblock"><div class="full_disc"><?=$data['full_desc'] ?></div></div></td>
		</tr>
	</tbody>
</table></div>
		<hr>
		<div class="sprice"><?=$data['price']?> Руб.</div>
		<div class="buy btn"><a href = "../modules/productInCart.php?id=<?=$data['id']?>&count=1&price=<?=$data['price']?>">В корзину</a></div>
		<div class="buy btn"><a href = "../site/modules/cataloghelper.php?id=4">Назад</a></div>
		
<?}?>	  
</div> 
</body>
</html>
