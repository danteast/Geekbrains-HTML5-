<?php 
    include 'count.php';
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Отзывник</title>
</head>
<body>
    <div class='window'>     
        <p><?= $txt ?></p>
    </div>
    <div>
        <form>
            <input type="textarea" name='msg' class='msg' rows ='10' placeholder='Ваше сообщение' value='<?= $_GET['msg'] ?>'>
            <input type="submit" name='send' value='Send message'>            
        </form>
    </div>
</body>
</html>