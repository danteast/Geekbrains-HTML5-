"use strict";

class Board {
    constructor() {
        this.boardEl = document.getElementById("game");
        // this.water = []
    }

    init(game, move, water, blockT, blockCub, blockStick, blockZr, blockZl, blockGr, blockGl) {
        this.game = game;
        this.move = move;
        this.water = water;
        this.blockT = blockT;
        this.blockCub = blockCub;
        this.blockStick = blockStick;
        this.blockZr = blockZr;
        this.blockZl = blockZl;
        this.blockGr = blockGr;
        this.blockGl = blockGl;
    }
    /**
     * Метод отрисовывает игровое поле.
     */
    renderBoard() {
        this.boardEl.innerHTML = "";
        for (let row = 0; row < 18; row++) {
            let tr = document.createElement("tr");
            this.boardEl.appendChild(tr);
            for (let col = 0; col < 10; col++) {
                let td = document.createElement("td");
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
                if (row < 1) {
                    td.classList.add('transpCells')
                }
            }
        }
    }

    renderBlock() {
        const blockElBody = this.getBlockElBody(this.move.newBlock.currPosition);
        if (blockElBody) {
            blockElBody.forEach(function (tdEl) {
                tdEl.classList.add("blockBody");
            });
        }
    }

    renderWater() {
        const waterBody = this.getWaterElBody(this.water.waterBlocks);
        if (waterBody) {
            waterBody.forEach(function (tdEl) {
                tdEl.classList.add("waterBody");
            })
        }
    }

    // addWater() {
    //     // const waterBlock = {};
    //     let elArray = this.getBlockElBody(this.move.newBlock.currPosition);
    //     for (let i = 0; i < elArray.length; i++) {
    //         // waterBlock.push(elArray[i]);
    //         // elArray[i].classList.add('waterBody');
    //         // elArray[i].classList.remove('blockBody');
    //         this.water.push(elArray[i])
    //     }
    //     return this.water
    // }


    /**
     * Получаем набор тегов td, представляющих тело блока.
     * @param {array} bodyCoords массив объектов с координатами
     * @returns {HTMLTableCellElement[]|null} возвращается набор тегов td если были
     * переданы координаты, иначе null.
     */
    getBlockElBody(bodyCoords) {
        if (bodyCoords.length > 0) {
            const bodyElems = [];
            for (let value of bodyCoords) {
                let elem = this.getCellEl(value.x + 4, value.y);
                bodyElems.push(elem);
            }
            return bodyElems;
        }
        return null;
    }

    getWaterElBody(waterCoords) {
        if (waterCoords.length > 0) {
            const waterElems = [];
            for (let i = 0; i < waterCoords.length; i++) {
                let waterElem = this.getCellEl(waterCoords[i].x + 4, waterCoords[i].y);
                waterElems.push(waterElem);
            }
            return waterElems;
        }
        return null;
    }

    getCellEl(x, y) {
        return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
    }

    clearBoard() {
        const tdElems = document.querySelectorAll("td");
        tdElems.forEach(function (td) {
            td.className = "";
            if (Number(td.dataset.row) < 1) {
                td.classList.add('transpCells')
            }
        });
    }
}