<?php
include('config.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Галерея</title>
</head>
<body>
<!-- <script>
function count() {
    let count = 0;
    return count++
}
    </script> -->
    <div class="container">    
        <?php                       
        $sql = 'select * from gallery';
        $table = mysqli_query($connect, $sql);            
        while($data = mysqli_fetch_assoc($table)) {               
            ?>
            <div class = 'block'>        
            <a href="<?= $data['path'].$data['name']?>" target='_blank' onclick = <?= $data['look'] ?>>
                <img class='photo' src="<?= $data['path'].$data['name']?>">
            </a><br>
            <h3 class='under'>Фото просмотрено - <?= $data['look'] ?> раз(a)</h3>
            </div>  
            <?php
            
        }
        ?>       
    </div>    
</body>
</html>
