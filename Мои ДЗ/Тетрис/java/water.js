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

    fillwater() {
        const tdElems = document.querySelectorAll("td");
        tdElems.forEach(function (td) {
            if (td.classList.contains('waterBody')) {
                let waterCell = {
                    x: 0,
                    y: 0
                };
                waterCell.x = Number(td.dataset.col);
                waterCell.y = Number(td.dataset.row);
                this.waterBlocks.push(waterCell)
            }
        })

    }

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
        this.game.increaseCount();
        return this.fullRows
    }



    deleteWaterRow() {
        this.haveLine();
        let waterBlocks2 = [];
        let waterNone = [];
        if (this.fullRows.length > 0) {
            for (let j = 0; j < this.waterBlocks.length; j++) {
                for (let i = 0; i < this.fullRows.length; i++) {
                    if (this.waterBlocks[j].y == this.fullRows[i]) {
                        waterNone.push(this.waterBlocks[j])
                    }
                }
            }
        }
        for (let j = 0; j < this.waterBlocks.length; j++) {
            if (!waterNone.includes(this.waterBlocks[j])) {
                waterBlocks2.push(this.waterBlocks[j])
            }
        }
        this.waterBlocks = waterBlocks2;
        this.downRows(this.fullRows.length)
    }


    downRows(quantityOfRowsDelete) {
        this.waterBlocks.forEach(function (waterCell) {
            waterCell.y += quantityOfRowsDelete
        })
    }

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