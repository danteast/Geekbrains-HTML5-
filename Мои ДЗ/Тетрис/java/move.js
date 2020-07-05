class Move {
    constructor() {
        this.currentBlockNumb = 0;
        this.newBlock = {};
        this.countSteps = 0;
    }

    /**
     * Метод получает другие игровые объекты, которые нужны ему
     * для работы.
     *
     */
    init(
        board,
        menu,
        game,
        water,
        status,
        blockT,
        blockCub,
        blockStick,
        blockZr,
        blockZl,
        blockGr,
        blockGl
    ) {
        this.board = board;
        this.menu = menu;
        this.water = water;
        this.game = game;
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

    whatBlock() {
        this.currentBlockNumb = Math.floor(Math.random() * 7);
    }

    createNewBlock() {
        this.newBlock = Object.create(this.game.blocks[this.currentBlockNumb]);

    }

    performStep() {
        let currentBlock = this.newBlock.currPosition;
        currentBlock.forEach(function (element) {
            element.y++;
        });
        this.countSteps++;
    }

    stopTheBlock() {
        this.water.addWater();
        this.deleteBlock();
    }

    deleteBlock() {
        let j = this.countSteps;
        let currentBlock = this.newBlock.currPosition;
        currentBlock.forEach(function (element) {
            element.y = element.y - j + 2;
        });
        this.countSteps = 0;
        this.newBlock = {};
    }

    goLeft() {
        if (this.isLeftCellEmpty()) {
            return;
        }
        this.newBlock.currPosition.forEach(function (elems) {
            elems.x--;
        });
    }

    isLeftCellEmpty() {
        let t = 0;
        this.newBlock.currPosition.forEach(function (elems) {
            if (elems.x == -3) {
                t = 1;
                return;
            }
        });
        if (t == 1) {
            return true;
        }
    }

    goRight() {
        if (this.isRightCellEmpty()) {
            return;
        }
        this.newBlock.currPosition.forEach(function (elems) {
            elems.x++;
        });
    }

    isRightCellEmpty() {
        let t = 0;
        this.newBlock.currPosition.forEach(function (elems) {
            if (elems.x == 6) {
                t = 1;
                return;
            }
        });
        if (t == 1) {
            return true;
        }
    }

    /** Назначает перевернутому значению фигуры координату Y, соответствующую
     * последней координате Y предыдущего значения фигуры
     * 
     * @param {object} nextPosition 
     */
    changeBlockPosition(nextPosition) {
        let j = this.countSteps;
        nextPosition.forEach(function (coord) {
            coord.y += j
        });
        this.returnPositionCoords(nextPosition)
    }

    /** Возвращает перевернутому значению фигуры координату Y, соответствующую
     * последней координате Y предыдущего значения фигуры
     * 
     * @param {object} nextPosition 
     */
    returnPositionCoords(nextPosition) {
        let k = this.countSteps;
        nextPosition.forEach(function (coord) {
            coord.y -= k
        });
    }

    rotateRight() {
        if (this.newBlock.name == 'blockCub') {
            return;
        } else if (this.newBlock.name == 'blockStick' || this.newBlock.name == 'blockZr' ||
            this.newBlock.name == 'blockZl') {
            switch (this.newBlock.currPosition) {
                case this.newBlock.bodyUp:
                    this.changeBlockPosition(this.newBlock.bodyRight);
                    this.newBlock.currPosition = this.newBlock.bodyRight;
                    break;
                case this.newBlock.bodyRight:
                    this.changeBlockPosition(this.newBlock.bodyUp);
                    this.newBlock.currPosition = this.newBlock.bodyUp;
                    break;
            }
            return;
        } else {
            switch (this.newBlock.currPosition) {
                case this.newBlock.bodyUp:
                    this.changeBlockPosition(this.newBlock.bodyRight);
                    this.newBlock.currPosition = this.newBlock.bodyRight;
                    break;
                case this.newBlock.bodyRight:
                    this.changeBlockPosition(this.newBlock.bodyDown);
                    this.newBlock.currPosition = this.newBlock.bodyDown;
                    break;
                case this.newBlock.bodyDown:
                    this.changeBlockPosition(this.newBlock.bodyLeft);
                    this.newBlock.currPosition = this.newBlock.bodyLeft;
                    break;
                case this.newBlock.bodyLeft:
                    this.changeBlockPosition(this.newBlock.bodyUp);
                    this.newBlock.currPosition = this.newBlock.bodyUp;
                    break;
            }
        }
    }

    /**
     * Является ли следующий шаг, шагом за пределы игрового поля.
     * @param {Object} nextCellCoords - координаты ячейки, куда змейка собирается сделать шаг.
     * @param {number} nextCellCoords.x
     * @param {number} nextCellCoords.y
     * @returns {boolean}
     */
    isMoveImpossible() {
        let currBlock = this.newBlock.currPosition;
        for (let i = 0; i < currBlock.length; i++) {
            let nextCell = this.board.getCellEl(
                currBlock[i].x + 4,
                currBlock[i].y + 1
            );
            if (nextCell === null || nextCell.classList.contains("waterBody")) {
                return true;
            }
        }
        return false;
    }
}