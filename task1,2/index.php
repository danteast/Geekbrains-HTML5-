<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Галерея</title>
</head>
<body>
    <div class="container">
        <?php
        $images = scandir("images/1920x1080");
        for ($i = 2; $i<count($images); $i++): ?>
            <a href="images/1920x1080/<?= $images[$i]?>" target='_blank'>
                <img class='photo' src="images/1920x1080/<?= $images[$i]?>">
            </a>
        <?php
            endfor;
        ?>    
    </div>    
</body>
</html>
