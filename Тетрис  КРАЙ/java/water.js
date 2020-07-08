class Water {
    constructor() {
        this.waterBlocks = [];
        this.fullRows = []
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
        move,
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
        this.game = game;
        this.move = move;
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
     * метод ищет заполненные ряды "воды"
     * @returns {array} fullRows массив, содержащий номера заполненных рядов
     */
    haveLine() {
        this.fullRows = [];
        let yRows = [];
        for (let i = 18; i > 1; i--) {
            let countRow = 0;
            this.waterBlocks.forEach(function (waterCell) {
                if (waterCell.y == i) {
                    countRow++;
                    if (countRow == 10) {
                        yRows.push(i)
                    }
                }
            })
        }
        this.fullRows = yRows;
        if (this.fullRows.length > 0) {
            this.increaseCount();
            this.changeCount();
            this.game.increaseSpeed();
        }
        return this.fullRows
    }

    /**
     * метод прибавляет очки, в зависимости от количества одновременно заполненных рядов
     */
    increaseCount() {
        switch (this.fullRows.length) {
            case 1:
                this.game.count++;
                break;
            case 2:
                this.game.count += 3;
                break;
            case 3:
                this.game.count += 5;
                break;
            case 4:
                this.game.count += 8;
                break;
        }
    }

    /**
     * метод выводит счет на экран
     */
    changeCount() {
        this.game.countTable.innerText = `Счет: ${this.game.count}`
    }

    /**
     * метод удаляет определяет ячейки, которые нужно удалить с игрового поля
     */
    deleteWaterRow() {
        if (this.haveLine() == 0) {
            return
        };
        let waterBlocks2 = [];
        let waterNone = [];
        for (let j = 0; j < this.waterBlocks.length; j++) {
            for (let i = 0; i < this.fullRows.length; i++) {
                if (this.waterBlocks[j].y == this.fullRows[i]) {
                    waterNone.push(this.waterBlocks[j])

                }
            }
        }
        for (let j = 0; j < this.waterBlocks.length; j++) {
            if (!waterNone.includes(this.waterBlocks[j])) {
                waterBlocks2.push(this.waterBlocks[j])
            }
        }
        this.waterBlocks = waterBlocks2;
        this.downRows(this.fullRows)
    }

    /**
     * метод сдвигает неудаленные ряды на освободившееся пространство
     * @param {array} fullRows 
     */
    downRows(fullRows) {
        this.waterBlocks.forEach(function (waterCell) {
            if (waterCell.y !== 18) {
                for (let i = waterCell.y + 1; i <= 18; i++) {
                    if (fullRows.includes(i)) {
                        waterCell.y++
                    }
                }
            }
        })
    }

    /**
     * метод превращает фигуру в "воду"
     */
    addWater() {
        let elArr = this.move.newBlock.currPosition;
        for (let i = 0; i < elArr.length; i++) {
            let waterCell = {
                x: elArr[i].x,
                y: elArr[i].y
            };
            this.waterBlocks.push(waterCell)
        }
    }

}