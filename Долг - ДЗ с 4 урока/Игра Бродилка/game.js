let game = {
    /**
     * этот метод запускает игру
     */
    run() {
        while (true) {
            const direction = mover.getDirection();
            if (direction === null) {
                alert('Игра окончена');
                return
            }
            const nextPoint = mover.getNextPosition(direction);
            if (nextPoint.x < 0) {
                alert('В этом направлении двигаться нельзя!');
                nextPoint.x++;
            } else if (nextPoint.x >= config.colsNumber) {
                alert('В этом направлении двигаться нельзя!');
                nextPoint.x--;
            } else if (nextPoint.y < 0) {
                alert('В этом направлении двигаться нельзя!');
                nextPoint.y++;
            } else if (nextPoint.y >= config.rawsNumber) {
                alert('В этом направлении двигаться нельзя!');
                nextPoint.y--;
            } else {
                renderer.clear();
                player.move(nextPoint);
                renderer.render()
            }
        }

    },
    /**
     * Этот метод выполняется при открытии страницы
     */
    init() {
        console.log('Ваше положение на игровом поле отображается в виде "о"');
        renderer.render();
        console.log('Чтобы начать игру наберите game.run() и нажмите ENTER')
    }
}

game.init();