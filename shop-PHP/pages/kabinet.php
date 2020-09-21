<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<body>
<div class="header">
<?php
$gtitle="Личный кабинет";
$gmtitle="Личный кабинет";
$qdesc="Лучший интернет магазин смартфонов";
$email=$_SESSION['email'];
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 
include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/header.php");
include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/menu.php");
$sql3  = "select name,email from users WHERE email='$email'";
$res3 = mysqli_query($connect,$sql3);
$login2=$_COOKIE['login'];
while($data3 = mysqli_fetch_assoc($res3)){$login=$data3['name'];$login2=$data3['email'];}
?>
</div>
<div class="zagl"><h1><?=$gtitle?></h1></div>
  <div class="container kabinet">
  <?
if (!empty  ($email)){
  $query = mysqli_query($connect,"SELECT * FROM orders WHERE email='$email'");	
if( @mysqli_num_rows( $query ) > 0 )
    { 
             $sql  = "select * from orders where email='$email'";
     $res = mysqli_query($connect,$sql);
	?><div class="products"><?
     while($data = mysqli_fetch_assoc($res)){
		$idproduct=$data['product'];
		$count=$data['count'];
		$pp=$data['id'];
		$status=$data['status'];
		$datem=date("H:i", strtotime($data['date']));$_mD = date(".m.", strtotime($date));
		$date=date("d.m.Y", strtotime($data['date']));$_mD = date(".m.", strtotime($date));
		$date=str_replace($_mD, " ".$_monthsList[$_mD]." ", $date);
		$sql2  = "select * from products where id='$idproduct'";
        $res2 = mysqli_query($connect,$sql2);
		
        while($data2 = mysqli_fetch_assoc($res2)){?>
		<div class="product">
		<div class="small_img"><img src="<?=$data2['pathsmall'].=$data2['filename']?>" alt="<?=$data2['title']?>"></div>
		<div class="product_title"><?=$data2['title']?></div>
		<div class="price"><?=number_format($data2['price'], 0, '.', ' ')?> Руб.</div>
		<div class="qualitity">Кол-во:<?=$count?></div>
		<hr><?$a=$data2['price']*$count?>
		<div class="summcart">Сумма:<?=number_format($a, 0, '.', ' ')?> Руб.</div>
	</div>	
	
<?}
    }$zapr2  = "SELECT SUM(price*count) as sum2 FROM orders where email='$email'";
				$sum2 = mysqli_query($connect,$zapr2);
				while($data5 = mysqli_fetch_assoc($sum2)){
		$itog2=$data5['sum2'];}
    ?></div><div class="itog">Общая сумма заказа: <span><?=number_format($itog2, 0, '.', ' ')?> Руб.</span></div>
	<div class="szakaz">
	<div>Добро пожаловать, <?=$login?>!</div>
	<div>Ваш логин: <?=$login2?></div><hr>
  <div>Номер заказа: <?=$pp?></div>
  <div>Дата заказа: <?=$date?></div>
  <div>Время заказа: <?=$datem?></div>
  <div>Статус заказа: <?=$status?></div>
</div><?
	}
    else
    {?><div class="szakaz">
	<div>Добро пожаловать, <?=$login.$login2?>!</div>
	<div>Ваш логин: <?=$login2?></div><hr><?
echo  "Нет заказов";
	}
}
else {?><h3>Авторизация</h3>
<div style="text-align:center;">Тестовый логин: info@info.ru  Тестовый пароль: 123</div><br>
	<form action="../modules/pass.php" method="POST">
		<input type="email" name="emails" placeholder="Ваш email" value="">
		<input type="password" name="passs" placeholder="Ваш пароль" value="">
		 <input class="cartbtn" type="submit" value="Войти">
		 </form><hr>
		 <h3>Регистрация</h3>
	<form action="../modules/registr.php" method="POST">
		<input type="text" name="name" placeholder="Ваше имя" value="">
		<input type="email" name="email" placeholder="Ваш email" value="">
		<input type="password" name="pass" placeholder="Ваш пароль" value="">
		 <input class="cartbtn" type="submit" value="Зарегистрироваться">
		</form>
<?		 
}
 
  if ($email){?>
  <form action="../modules/exit.php" method="POST">
		<input class="cartbtn" type="submit" name="exit" value="Выйти">
		</form>
   </div>
<?}?>
<?include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/footer.php");?>   
</body>
  </html>