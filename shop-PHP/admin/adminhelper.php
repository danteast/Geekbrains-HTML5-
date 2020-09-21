<?php session_start();include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 
$idgood=$_POST['idgood'];
$ids=$_POST['ids'];
if(isset($_POST['delete'])){
	mysqli_query($connect,"DELETE FROM `products` WHERE id=$ids");
		header("Location: /site/admin/admin.php");
}
if(isset($_POST['correct'])){
	$_SESSION['ids'] = $ids;
		header("Location: /site/admin/correct.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<body>
<div class="header">
<?php
$gtitle="Обработка товаров";
$gmtitle="Обработка товаров";
$qdesc="Лучший интернет магазин смартфонов";
$email=$_SESSION['email'];
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 
include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/header.php");
include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/menu.php");
$sql3  = "select name,email from users WHERE email='$email'";
$res3 = mysqli_query($connect,$sql3);
while($data3 = mysqli_fetch_assoc($res3)){$login=$data3['name'];$login2=$data3['email'];}

?>
</div>
<div class="zagl"><h1><?=$gtitle?></h1></div>
  <div class="container admin">
<?php

include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 
include 'resize.php';

if ($_FILES['userfile']['size']>512000) {
    echo "Файл слишком большой, максимальный размер файла 500 Кб!<br>";
    echo '<br><a class="btn" href="/site/admin/admin.php">Вернуться назад</a>';
    return;
}

$type = $_FILES['userfile']['type'];
if (($type != 'image/jpeg')&&($type != 'image/gif')&&($type != 'image/png')) {
    echo "Тип файла $type не поддерживается, используйте JPG или GIF или PNG!<br>";
    echo '<br><a class="btn" href="/site/admin/admin.php">Вернуться назад</a>';
    return;
}
$title=$_POST['title'];
$ids=$_POST['ids'];
$alias= strtr($_POST['alias'], " ", "_");
$price=$_POST['price'];
$small_desc=$_POST['small_desc'];
$full_desc=$_POST['full_desc'];
$uploaddir = $_SERVER['DOCUMENT_ROOT']. '/site/images/big/';
$thumbpath = $_SERVER['DOCUMENT_ROOT']. '/site/images/small/';
$pathsmall= '/site/images/small/';
$pathbig = '/site/images/big/';
$sqlthumbpath = '.\\\\tmp\\\\';
$filename = basename($_FILES['userfile']['name']);
$uploadfile = $uploaddir . $filename;
if (file_exists($uploadfile)) do {
    $arr = pathinfo($uploadfile);
    $uploadfile=$arr['dirname'].'/'.$arr['filename'].'_.'.$arr['extension'];
} while (file_exists($uploadfile));

if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
    $image = new SimpleImage();
    $image->load($uploadfile);
    $image->resizeToWidth(200);
    $arr = pathinfo($uploadfile);
    $newfilename = $thumbpath.$arr['basename'];
$image->save($newfilename);}
if(isset($_POST['izm'])){	
  mysqli_query($connect,"UPDATE products SET title='$title',alias='$alias',price='$price',small_desc='$small_desc',full_desc='$full_desc',filename='$filename',pathsmall='$pathsmall',pathbig='$pathbig' WHERE id='$ids'"); 
 echo "<div class='container'>";
    echo "Товар был успешно обновлен <br>"."<br>";
	echo "<br><a class='btn' href='/site/admin/admin.php'>Вернуться назад</a>";
	echo "</div>";
}
else{
	mysqli_query($connect, "insert into `products` (`title`, `alias`,`price`,`small_desc`,`full_desc`,`filename`,`pathsmall`,`pathbig`) values ('$title', '$alias', '$price', '$small_desc', '$full_desc', '$filename', '$pathsmall', '$pathbig')");
    echo "<div class='container'>";
    echo "Товар был успешно загружен на сайт<br>"."<br>";
	echo "<br><a class='btn' href='/site/admin/admin.php'>Вернуться назад</a>";
	echo "</div>";
	

return;
}

include ($_SERVER['DOCUMENT_ROOT']. "/site/modules/footer.php");?>   
</div>
</body>
</html>