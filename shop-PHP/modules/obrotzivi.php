<?php
include ($_SERVER['DOCUMENT_ROOT']. "/site/config.php"); 
$name=$_POST['name'];
$otziv=$_POST['otziv'];
$sql  = "update testmonials SET name=$name";
if (isset($_POST["name"])) {
       $sql = mysqli_query($connect, "insert into `testmonials` (`name`, `otziv`) values ('{$_POST['name']}', '{$_POST['otziv']}')");
        if ($sql) {     header("Location: /site/pages/testmonials.php"); } else {echo '<p>Чет ваще фигня случилась: ' . mysqli_error($connect) . '</p>';}
  }
?>
