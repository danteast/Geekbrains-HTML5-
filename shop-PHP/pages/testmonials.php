<!DOCTYPE html>
<html lang="en">
<?php 
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php");
?>
<body>
<div class="header"><?php
$gtitle="Отзывы";
$gmtitle="Отзывы о компании";
$qdesc="Лучший интернет магазин смартфонов";
 include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/header.php");
 include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/menu.php");?>
 </div>
  <div class="container">
 <div class="zagl"><h1><?=$gtitle?></h1></div>
  <?$sql  = "select * from testmonials ORDER BY id DESC";
$res = mysqli_query($connect,$sql);
while($data = mysqli_fetch_assoc($res)){
	$currentDate = date("d.m.Y", strtotime($data['date']));$_mD = date(".m.", strtotime($currentDate));
    $currentDate = str_replace($_mD, " ".$_monthsList[$_mD]." ", $currentDate);?>
		<div class="testmonial">
		<div class="tname"><?=$data['name']?></div>
		<div class="tdate"><?=$currentDate?></div><hr>
		<div class="ttext"><?=$data['otziv']?></div>
		</div>
		<?
?>
<?}?>	
<div class="otzivi">
<h3>Оставьте свой отзыв</h3>
<form action="../modules/obrotzivi.php" method="POST">            
        <input class="inot" type="text" name="name" placeholder="Ваше имя или название компании">
        <textarea class="inot" rows="10" name="otziv" placeholder="Ваш отзыв"></textarea>
         <input class="btn" type="submit" value="Опубликовать">
    </form>
</div>
    </div>
<?include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/footer.php");?> 	
</body>
</html>