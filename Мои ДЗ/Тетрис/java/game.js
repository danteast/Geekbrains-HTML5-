class Game {
    constructor() {
        this.tickIdentifier = null;
        this.messageEl = document.getElementById("message");
        this.countTable = document.getElementById("count");
        this.count = 0
    }

    /**
     * Метод получает другие игровые объекты, которые нужны ему
     * для работы.
     * 
     */
    init(board, menu, move, water, status, blockT, blockCub, blockStick, blockZr, blockZl, blockGr, blockGl) {
        this.board = board;
        this.menu = menu;
        this.move = move;
        this.water = water;
        this.status = status;
        this.blockT = blockT;
        this.blockCub = blockCub;
        this.blockStick = blockStick;
        this.blockZr = blockZr;
        this.blockZl = blockZl;
        this.blockGr = blockGr;
        this.blockGl = blockGl;
        this.blocks = [blockT, blockCub, blockStick, blockZr, blockZl, blockGr, blockGl];
    }

    /**
     * Метод назначает обработчики на события клика на кнопки "Старт",
     * "Пауза", а также на стрелки на клавиатуре.
     */
    begin() {
        this.move.whatBlock();
        this.move.createNewBlock();

        this.menu.addButtonsClickListeners(
            this.start.bind(this),
            this.pause.bind(this)
        );
        document.addEventListener("keydown", this.pressKeyHandler.bind(this));

    }

    /**
     * Метод запускает игру.
     */
    start() {
        if (this.status.isPaused()) {
            this.status.setPlaying();
            this.tickIdentifier = setInterval(
                this.doTick.bind(this),
                700
            );
        }
    }

    /**
     * Метод ставит игру на паузу.
     */
    pause() {
        if (this.status.isPlaying()) {
            this.status.setPaused();
            clearInterval(this.tickIdentifier);
        }
    }

    /**
     * Этот метод запускается каждую секунду и осуществляет:
     * 1. перемещение змейки
     * 2. проверяет проиграна/выиграна ли игра
     * 3. увеличивает размер змейки если она ест еду
     * 4. заново отрисовывает положение змейки и еды
     */
    doTick() {
        if (this.move.isMoveImpossible()) {
            this.move.stopTheBlock();
            this.move.whatBlock();
            this.move.createNewBlock();
            this.water.deleteWaterRow()
            clearInterval(this.tickIdentifier)
        }
        this.countTable.innerText = `Счет: ${this.count}`;
        this.move.performStep();
        // if (this.board.isSnakeEating()) {
        //     this.snake.increaseBody();
        //     this.food.setNewFood();
        // }
        if (this.isGameLost()) {
            return;
        }
        // if (this.water.haveLine()) {
        //     this.water.deleteLine();
        // }
        // if (this.isGameWon()) {
        //     return;
        // }
        // this.countTable.innerText = `Счет: ${this.count}`;
        // this.restToPick.innerText = `Осталось проглотить: ${this.restCount}`;
        // this.increaseSpeed();
        // this.snake.increaseAtr = false;
        this.board.clearBoard();
        // this.water.fillwater()
        this.board.renderWater();
        this.board.renderBlock();


    }

    // increaseSpeed() {
    //     if (!this.count == 0 && this.count % 3 == 0 && this.snake.increaseAtr) {
    //         this.settings.speed++;
    //         this.tickIdentifier = setInterval(
    //             this.doTick.bind(this),
    //             1000 / this.settings.speed)
    //     }
    // }


    /**
     * Метод проверяет выиграна ли игра, останавливает игру,
     * выводит сообщение о выигрыше.
     * @returns {boolean} если длина змейки достигла длины нужной
     * для выигрыша, тогда true, иначе false.
     */
    isGameWon() {
        if (this.snake.body.length == this.settings.winLength) {
            clearInterval(this.tickIdentifier);
            this.setMessage("Вы выиграли");
            return true;
        }
        return false;
    }

    increaseCount() {
        this.count += this.water.fullRows.length

    }

    /**
     * Метод проверяет проиграна ли игра, останавливает игру
     * в случае проигрыша, выводит сообщение о проигрыше.
     * @returns {boolean} если мы шагнули в стену, тогда
     * true, иначе false.
     */
    isGameLost() {
        for (let i = 1; i < 11; i++) {
            let upCell = this.board.getCellEl(i, 2);
            if (upCell.classList.contains('waterBody')) {
                clearInterval(this.tickIdentifier);
                this.setMessage("Вы проиграли");

                return true;
            }
        }
        return false;
    }

    /**
     * В зависимости от нажатой кнопки (вверх, вниз, влево, вправо) будет
     * вызываться соответствующий метод.
     * @param {KeyboardEvent} event
     */
    pressKeyHandler(event) {
        switch (event.key) {
            case "ArrowUp":
                this.move.rotateRight();
                break;
            case "ArrowDown":
                this.tickIdentifier = setInterval(
                    this.doTick.bind(this), 100);
                break;
            case "ArrowLeft":
                this.move.goLeft();
                break;
            case "ArrowRight":
                this.move.goRight();;
                break;
        }
    }

    /**
     * Метод выводит сообщение на странице.
     * @param {string} text
     */
    setMessage(text) {
        this.messageEl.innerText = text;
    }
}

window.addEventListener("load", () => {
    const board = new Board();
    const game = new Game();
    const menu = new Menu();
    const water = new Water();
    const move = new Move();
    const status = new Status();

    const blockT = new BlockT();
    const blockCub = new BlockCub();
    const blockStick = new BlockStick();
    const blockZr = new BlockZr();
    const blockZl = new BlockZl();
    const blockGr = new BlockGr();
    const blockGl = new BlockGl();




    board.init(game, move, water, blockT, blockCub, blockStick, blockZr, blockZl, blockGr, blockGl);
    game.init(board, menu, move, water, status, blockT, blockCub, blockStick, blockZr, blockZl, blockGr, blockGl);
    move.init(board, menu, game, water, status, blockT, blockCub, blockStick, blockZr, blockZl, blockGr, blockGl);
    water.init(board, menu, game, move, status, blockT, blockCub, blockStick, blockZr, blockZl, blockGr, blockGl)
    board.renderBoard();
    game.begin();
});