<?php
$n1 = (int)$_POST['n1'];
$n2 = (int)$_POST['n2'];
$s1 = $_POST['s1'];
$s2 = $_POST['s2'];
$action=$_POST['action'];
$rezult = $_POST['rezult'];
$rezult2 = $_POST['rezult2'];
$waction = $_POST['waction'];
$false="делить на ноль нельзя!";
switch ($action) {
    case 1:
        $rezult = ($n1+$n2);
		header("Location: /site/index.php?rezult=" .$rezult ."&n1=".$n1."&n2=".$n2 ."&s1=".$s1."&s2=".$s2."&rezult2=".$rezult2."&action=1");
        break;
    case 2:
       $rezult = ($n1-$n2);
	  header("Location: /site/index.php?rezult=".$rezult ."&n1=".$n1."&n2=".$n2 ."&s1=".$s1."&s2=".$s2."&rezult2=".$rezult2."&action=2");
        break;
    case 3:
 	   $rezult = ($n1*$n2);
	   header("Location: /site/index.php?rezult=".$rezult."&n1=".$n1."&n2=".$n2 ."&s1=".$s1."&s2=".$s2."&rezult2=".$rezult2."&action=3");
       break;
	case 4:
       if ($n2!=0)
	   {$rezult = ($n1/$n2);
	   header("Location: /site/index.php?rezult=".$rezult."&n1=".$n1."&n2=".$n2 ."&s1=".$s1."&s2=".$s2."&rezult2=".$rezult2."&action=4");}
	   else{header("Location: /site/index.php?rezult=".$false."&n1=".$n1."&n2=".$n2 ."&s1=".$s1."&s2=".$s2."&rezult2=".$rezult2."&action=4");}	
       break;
}
$s1 = $_POST['s1'];
$s2 = $_POST['s2'];
if(isset(($_POST['delen'])) and ($s2==0)) {
	
	header("Location: /site/index.php?rezult2=".$false."&n1=".$n1."&n2=".$n2 ."&s1=".$s1."&s2=".$s2."&rezult=".$rezult."&action=".$waction);
}
if(isset(($_POST['delen'])) and ($s2!=0)) {
	$rezult2 = ($s1/$s2);
	header("Location: /site/index.php?rezult2=".$rezult2."&n1=".$n1."&n2=".$n2 ."&s1=".$s1."&s2=".$s2."&rezult=".$rezult."&action=".$waction);
}
 if(isset($_POST['plus'])) {
	$rezult2 = ($s1+$s2);
	header("Location: /site/index.php?rezult2=".$rezult2."&n1=".$n1."&n2=".$n2 ."&s1=".$s1."&s2=".$s2."&rezult=".$rezult."&action=".$waction);
}
else if(isset($_POST['minus'])) {
	$rezult2 = ($s1-$s2);
	header("Location: /site/index.php?rezult2=".$rezult2."&n1=".$n1."&n2=".$n2 ."&s1=".$s1."&s2=".$s2."&rezult=".$rezult."&action=".$waction);
}
else if(isset($_POST['mnog'])) {
	$rezult2 = ($s1*$s2);
	header("Location: /site/index.php?rezult2=".$rezult2."&n1=".$n1."&n2=".$n2 ."&s1=".$s1."&s2=".$s2."&rezult=".$rezult."&action=".$waction);
}
else {die ('Чёт не так');}
?>
