<?php
require_once 'Twig/Autoloader.php';
Twig_Autoloader::register();

try {
  $dbh = new PDO('mysql:dbname=lesson6;host=localhost', 'root', 'root');
} catch (PDOException $e) {
  echo "Error: Could not connect. " . $e->getMessage();
}

$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try {
  if(isset($_GET['limit'])){
    $limit = $_GET['limit'];
  } else {
    $limit = 5;
  }
  
  $sql = "SELECT goods.id AS id, goods.name AS name, goods.src AS src, goods.srcBig AS srcBig, goods.descriptionFull AS description, goods.price AS price FROM goods limit $limit";
  $sth = $dbh->query($sql);
  while ($row = $sth->fetchObject()) {
    $data[] = $row;
  }

  print_r($_GET['a']);
  
  
  unset($dbh); 

  $loader = new Twig_Loader_Filesystem('templates');
  
  $twig = new Twig_Environment($loader);
  
  $template = $twig->loadTemplate('watches.tmpl');

  echo $template->render(array (
    'data' => $data,
    'count'=>count($data)
  ));

  
} catch (Exception $e) {
  die ('ERROR: ' . $e->getMessage());
}
?>

