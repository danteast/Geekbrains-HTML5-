<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<body>
<div class="header">
<?php
$gtitle="Корзина";
$gmtitle="Корзина товаров";
$qdesc="Лучший интернет магазин смартфонов";
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 
include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/header.php");
include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/menu.php");
$ses=session_id();
$email = $_SESSION['email'];
?>
</div>
<div class="zagl"><h1><?=$gtitle?></h1></div>
  <div class="container">
  <?
  $query = mysqli_query($connect,"SELECT * FROM cart WHERE user='$email'");	
  $query2 = mysqli_query($connect,"SELECT * FROM cart WHERE session='$ses'");
 if( @mysqli_num_rows( $query ) > 0 )
    {
           $sql  = "select * from cart where user='$email'";
     $res = mysqli_query($connect,$sql);?>
	 <div class="products"><?
     while($data = mysqli_fetch_assoc($res)){
		$idproduct=$data['product'];
		$count=$data['count'];
		$sql2  = "select * from products where id='$idproduct'";
        $res2 = mysqli_query($connect,$sql2);
        while($data2 = mysqli_fetch_assoc($res2)){?>
		<div class="product">
		<div class="small_img"><img src="<?=$data2['pathsmall'].=$data2['filename']?>" alt="<?=$data2['title']?>"></div>
		<div class="product_title"><?=$data2['title']?></div>
		<div class="price"><?=number_format($data2['price'], 0, '.', ' ')?> Руб.</div>
		<div class="qualitity">
			<form action="../modules/carthelper.php" method="POST">				
					<input type="hidden" name="id" value="<?=$idproduct?>">
					<input type="number" name="count" value="<?=$count?>"> шт.		
				<div>
					<input class="cartbtn" type="submit" name="increase" value="Больше">
		 			<input class="cartbtn" type="submit" name="decrease" value="<?=($count == 1)?'Удалить':'Меньше'?>">
				</div>		
			</form>	
		</div>		
			<hr><?$a=$data2['price']*$count?>
			<div class="summcart">Сумма:<?=number_format($a, 0, '.', ' ')?> Руб.</div>
		</div>
			
<?}} $zapr2  = "SELECT SUM(price*count) as sum2 FROM cart where user='$email'";
				$sum2 = mysqli_query($connect,$zapr2);
				while($data5 = mysqli_fetch_assoc($sum2)){
		$itog2=$data5['sum2'];}
	?></div><div class="itog">Общая сумма заказа: <span><?=number_format($itog2, 0, '.', ' ')?> Руб.</span></div>
	<div class="oforml">
  <div class="qualitity"><form action="../modules/registr.php" method="POST">
  <input type="hidden" name="email" value="<?$email?>">
		<input class="btn" type="submit" name="zareg" value="Оформить заказ">
</div>
		

	</div><?
    }
  
 elseif ((empty($email)) and (@mysqli_num_rows( $query2 ) > 0))
    {
     $sql  = "select * from cart where session='$ses'";
     $res = mysqli_query($connect,$sql);
	 ?><div class="products"><?
     while($data = mysqli_fetch_assoc($res)){
		$idproduct=$data['product'];
		$count=$data['count'];
		$sql2  = "select * from products where id='$idproduct'";
        $res2 = mysqli_query($connect,$sql2);
        while($data2 = mysqli_fetch_assoc($res2)){?>
		<div class="product">
		<div class="small_img"><img src="<?=$data2['pathsmall'].=$data2['filename']?>" alt="<?=$data2['title']?>"></div>
		<div class="product_title"><?=$data2['title']?></div>
		<div class="price"><?=number_format($data2['price'], 0, '.', ' ')?> Руб.</div>
		<div class="qualitity"><form action="../modules/carthelper.php" method="POST">
		<input type="hidden" name="id" value="<?=$idproduct?>">
		<input type="number" name="count" value="<?=$count?>"> шт.</div>
		 <div><input class="cartbtn" type="submit" name="pereshet" value="Пересчитать">
		 <input class="cartbtn" type="submit" name="delete" value="Удалить"></div></form>
		<hr><? $obshaya=$data2['price']*$count?>
		<div class="summcart">Сумма:<?=number_format($obshaya, 0, '.', ' ')?></div>
		</div>
		
		
		

		
	 <?}} $zapr  = "SELECT SUM(price*count) as sum FROM cart where session='$ses'";
				$sum = mysqli_query($connect,$zapr);
				while($data4 = mysqli_fetch_assoc($sum)){
		$itog=$data4['sum'];}
		?>
	</div><div class="itog">Общая сумма заказа: <span><?=number_format($itog, 0, '.', ' ')?> Руб.</span></div>
	<div class="container oforml">
  <h3>Оформление заказа</h3>
  <div class="qualitity"><form action="../modules/registr.php" method="POST">
		<input type="text" name="name" required placeholder="Введите Ваше имя" value="">
		<input type="email" name="email" required placeholder="Введите Ваш email" value="">
		<input type="password" name="pass" required placeholder="Введите пароль" value="">
		<input class="btn" type="submit" value="Оформить заказ">
</div></div>	
    <?
	}
	else{
		echo "<div class='nocart'>Корзина пуста.<br><a class='btn' href='/site/pages/catalog.php'>Перейти в каталог</a></div>";
	}
  ?>
</div>
<?include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/footer.php");?>  
</body>
</html>