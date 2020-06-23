const mover = {
    /**
     * Принимает и отдает от игрока направление движения
     * @returns {int} Возвращаn направление, введенное пользователем
     */
    getDirection() {
        const availableDirection = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Введите направление перемещения: кнопки 1, 2, 3, 4, 6, 7, 8 или 9'));
            if (isNaN(direction)) {
                return null
            }
            if (!availableDirection.includes(direction)) {
                alert('Введенное число не соответствует возможным направлениям');
                continue
            }
            return direction
        }

    },
    /**
     * Одает следующую точку, у которой будет находиться игрок после движения
     * @param {int} direction Направление движения игрока
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        }
        switch (direction) {
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        return nextPosition
    }

}