<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<body>
<div class="header">
<?php
$gtitle="Главная";
$gmtitle="Каталог смартфонов";
$qdesc="Лучший интернет магазин смартфонов";
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 

?>
</div>
<div class="zagl"><h1>Каталог товаров</h1></div>
  <div class="container products">
  <?$sql  = "select * from products ORDER BY price ASC";
$res = mysqli_query($connect,$sql);
while($data = mysqli_fetch_assoc($res)){?>
		<div class="product">
		<div class="small_img"><a href="pages/product.php?id=<?=$data['id']?>"><img src="<?=$data['pathsmall'].=$data['filename']?> " alt="<?=$data['title']?>"></a></div>
		<div class="product_title"><a href="pages/product.php?id=<?=$data['id']?>"><?=$data['title']?></a></div>
		<div class="small_desc"><?=mb_substr(stripslashes($data['small_desc']), 0, 100)?>...</div><hr>
		<div class="price"><?=$data['price']?> Руб.</div>
		<div class="buy btn"><a href = "../site/modules/cataloghelper.php?id=<?=$data['id']."&count=1&price=".$data['price']?>">В корзину</a></div>   
		</div>
		<?
?>
<?}?>
<?include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/footer.php");?>	   
</body>
</html>