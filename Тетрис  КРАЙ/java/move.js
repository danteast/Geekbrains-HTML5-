class Move {
    constructor() {
        this.currentBlockNumb = 0; // порядковый номер фигуры в массиве "blocks" (от 1 до 7), генерируется рандомно
        this.newBlock = {}; // объект - новая фигура (7 вариантов)
        this.alterBlock = {}; // клон новой фигуры
        this.countSteps = 0; // переменная - фиксирует количество клеток по вертикали, которая фигура прошла от начального положения
        this.horizontalStep = 0 // переменная - фиксирует на сколько клеток фигура сместилась по 
        //горизонтали от центрального положения (от -4 до 6)
    }

    /**
     * Метод получает другие игровые объекты, которые нужны ему для работы.
     */
    init(
        board, menu, game, water, status, blockT, blockCub, blockStick, blockZr, blockZl, blockGr, blockGl, blockT1,
        blockCub1, blockStick1, blockZr1, blockZl1, blockGr1, blockGl1) {
        this.board = board;
        this.menu = menu;
        this.water = water;
        this.game = game;
        this.status = status;
        this.blockT = new BlockT();
        this.blockCub = new BlockCub();
        this.blockStick = new BlockStick();
        this.blockZr = new BlockZr();
        this.blockZl = new BlockZl();
        this.blockGr = new BlockGr();
        this.blockGl1 = new BlockGl1();
        this.blockT1 = new BlockT1();
        this.blockCub1 = new BlockCub1();
        this.blockStick1 = new BlockStick1();
        this.blockZr1 = new BlockZr1();
        this.blockZl1 = new BlockZl1();
        this.blockGr1 = new BlockGr1();
        this.blockGl1 = new BlockGl1();
        this.blocks = [blockT, blockCub, blockStick, blockZr, blockZl, blockGr, blockGl];
        this.blocks1 = [blockT1, blockCub1, blockStick1, blockZr1, blockZl1, blockGr1, blockGl1]
    }

    /**
     * метод генерирует случайное число от 0 до 6
     */
    whatBlock() {
        this.currentBlockNumb = Math.floor(Math.random() * 7);
    }

    /**
     * метод создает новую фигуру и ее клон
     */
    createNewBlock() {
        this.alterBlock = Object.create(this.blocks1[this.currentBlockNumb]);
        this.newBlock = Object.create(this.blocks[this.currentBlockNumb]);
        this.returnMeth(this.newBlock.bodyUp, this.alterBlock.bodyUp);
        this.horizontalStep = 0
    }

    /**
     * метод генерирует перемещение фигуры на 1 клетку вниз
     */
    performStep() {
        let currentBlock = this.newBlock.currPosition;
        currentBlock.forEach(function (element) {
            element.y++;
        });
        this.countStepsMeth();
    }

    /**
     * метод считает количество клеток, на которое опустилась фигура по вертикали
     */
    countStepsMeth() {
        this.countSteps++;
    }

    /**
     * метод останавливает фигуру по достижению ею "дна" игрового поля или касания "воды"
     */
    stopTheBlock() {
        this.water.addWater();
        this.clearCountSteps();
        this.deleteBlock();
    }

    /**
     * метод обнуляет количество клеток, на которое опустилась фигура по вертикали
     */
    clearCountSteps() {
        this.countSteps = 0;
    }

    /**
     * метод обнуляет объект новой фигуры
     */
    deleteBlock() {
        this.newBlock = {};
    }

    /**
     * метод пермещает фигуру на 1 клетку влево
     */
    goLeft() {
        if (this.isCellEmpty(-3)) {
            return;
        }
        this.newBlock.currPosition.forEach(function (elems) {
            elems.x--;
        });
        this.horizontalStep--
    }

    /**
     * метод пермещает фигуру на 1 клетку вправо
     */
    goRight() {
        if (this.isCellEmpty(6)) {
            return;
        }
        this.newBlock.currPosition.forEach(function (elems) {
            elems.x++;
        });
        this.horizontalStep++
    }

    /**
     * метод проверяет, не является ли перемещение ударом в стенку
     * @param {Number} dir - для левой стенки = -3, для правой = 6
     */
    isCellEmpty(dir) {
        let t = 0;
        this.newBlock.currPosition.forEach(function (elems) {
            if (elems.x == dir) {
                t = 1;
                return true;
            }
        });
        if (t == 1) {
            return true;
        }
    }

    /**
     * метод поворачивает фигуру по часовой стрелке (при нажатии на клавишу "ArrowUp")
     */
    rotateRight() {
        if (this.newBlock.name == "blockCub") {
            return;
        } else if (
            this.newBlock.name == "blockStick" ||
            this.newBlock.name == "blockZr" ||
            this.newBlock.name == "blockZl"
        ) {
            this.rotateShort();
            return
        } else {
            this.rotateLong();
            return
        }

    }

    /**
     * метод отвечает за поворот фигур с 2-мя возможными положениями
     */
    rotateShort() {
        let newBlock = this.newBlock;
        let alterBlock = this.alterBlock;
        switch (this.newBlock.currPosition) {
            case this.newBlock.bodyUp:
                this.returnMeth(newBlock.bodyRight, alterBlock.bodyRight);
                this.changeBlockPosition(newBlock.bodyRight);
                this.newBlock.currPosition = newBlock.bodyRight;
                break;
            case this.newBlock.bodyRight:
                this.returnMeth(newBlock.bodyUp, alterBlock.bodyUp);
                this.changeBlockPosition(newBlock.bodyUp);
                this.newBlock.currPosition = newBlock.bodyUp;
                break
        }
    }

    /**
     * метод отвечает за поворот фигур с 4-мя возможными положениями
     */
    rotateLong() {
        let newBlock = this.newBlock;
        let alterBlock = this.alterBlock;
        switch (this.newBlock.currPosition) {
            case this.newBlock.bodyUp:
                this.returnMeth(newBlock.bodyRight, alterBlock.bodyRight);
                this.changeBlockPosition(newBlock.bodyRight);
                this.newBlock.currPosition = newBlock.bodyRight;
                break;
            case this.newBlock.bodyRight:
                this.returnMeth(newBlock.bodyDown, alterBlock.bodyDown);
                this.changeBlockPosition(newBlock.bodyDown);
                this.newBlock.currPosition = newBlock.bodyDown;
                break;
            case this.newBlock.bodyDown:
                this.returnMeth(newBlock.bodyLeft, alterBlock.bodyLeft);
                this.changeBlockPosition(newBlock.bodyLeft);
                this.newBlock.currPosition = newBlock.bodyLeft;
                break;
            case this.newBlock.bodyLeft:
                this.returnMeth(newBlock.bodyUp, alterBlock.bodyUp);
                this.changeBlockPosition(newBlock.bodyUp);
                this.newBlock.currPosition = newBlock.bodyUp;
                break;
        }
    }

    /** Назначает перевернутому значению фигуры координаты Х и Y, соответствующие
     * последним координатам предыдущего значения фигуры
     *
     * @param {object} nextPosition - следующее положение фигуры после поворота
     */
    changeBlockPosition(nextPosition) {
        this.changeBlockPositionY(nextPosition);
        this.changeBlockPositionX(nextPosition)
    }

    /**
     * метод прибавляет к координате Y след. положения фигуры количество клеток, на которое фигура уже опустилась
     * @param {object} nextPosition - следующее положение фигуры после поворота
     */
    changeBlockPositionY(nextPosition) {
        let j = this.countSteps;
        nextPosition.forEach(function (coord) {
            coord.y += j;
        })
    }

    /**
     * метод прибавляет к координате Х след. положения фигуры количество клеток, на которое фигура сдвинулась
     * по горизонтали
     * @param {object} nextPosition - следующее положение фигуры после поворота
     */
    changeBlockPositionX(nextPosition) {
        let j = this.horizontalStep;
        nextPosition.forEach(function (coord) {
            coord.x += j
        });
        this.checkHoriz(nextPosition);
        this.checkHoriz(nextPosition);
    }

    /**
     * метод проверяет не оказывается ли после поворота хотя бы один элемент фигуры за пределами игрового поля
     * @param {object} nextPosition - следующее положение фигуры после поворота
     */
    checkHoriz(nextPosition) {

        nextPosition.forEach(function (coord) {
            if (coord.x < -3) {
                nextPosition.forEach(function (coord) {
                    coord.x++
                })
            } else if (coord.x > 6) {
                nextPosition.forEach(function (coord) {
                    coord.x--
                })
            }

        })
    }

    /**
     * метод возвращает значение координат фигуры к начальному значению
     * @param {object} positionNew - положение реальной фигуры после поворота
     * @param {object} positionAlter - значение положения фигуры в клоне фигуры
     */
    returnMeth(positionNew, positionAlter) {
        this.returnY(positionNew, positionAlter);
        this.returnX(positionNew, positionAlter);

    }

    /**
     * метод возвращает значение координаты Y фигуры к начальному значению
     * @param {object} positionNew - положение реальной фигуры после поворота
     * @param {object} positionAlter - значение положения фигуры в клоне фигуры
     */
    returnY(positionNew, positionAlter) {
        let Y1 = 0;
        let Y2 = 0;
        let Y3 = 0;
        let Y4 = 0;
        Y1 = positionAlter[0].y;
        Y2 = positionAlter[1].y;
        Y3 = positionAlter[2].y;
        Y4 = positionAlter[3].y;
        positionNew[0].y = Y1;
        positionNew[1].y = Y2;
        positionNew[2].y = Y3;
        positionNew[3].y = Y4;
    }

    /**
     * метод возвращает значение координаты X фигуры к начальному значению
     * @param {object} positionNew - положение реальной фигуры после поворота
     * @param {object} positionAlter - значение положения фигуры в клоне фигуры
     */
    returnX(positionNew, positionAlter) {
        let X1 = 0;
        let X2 = 0;
        let X3 = 0;
        let X4 = 0;
        X1 = positionAlter[0].x;
        X2 = positionAlter[1].x;
        X3 = positionAlter[2].x;
        X4 = positionAlter[3].x;
        positionNew[0].x = X1
        positionNew[1].x = X2
        positionNew[2].x = X3
        positionNew[3].x = X4
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