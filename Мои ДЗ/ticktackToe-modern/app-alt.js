'use strict';
class Game {
    constructor() {
        this.field = [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ],
            this.currentPhase = 'X'
    }

    /**
     * Инициализация игры.
     */

    init(board, status) {
        this.board = board;
        this.status = status;
    }


    cellClickHandler(event) {
        if (!this.isCorrectClick(event)) {
            return
        }
        this.fillCell(event);
        if (this.smbWon()) {
            this.whoHasWon();
            this.status.setStatusStopped();
            this.status.newSuggestion()
        }
        this.togglePhase()
    }

    fillCell(event) {
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;
        event.target.textContent = this.currentPhase;
        this.field[row][col] = this.currentPhase;

    }

    smbWon() {
        return this.isLineWon({
                x: 0,
                y: 0
            }, {
                x: 1,
                y: 0
            }, {
                x: 2,
                y: 0
            }) ||
            this.isLineWon({
                x: 0,
                y: 1
            }, {
                x: 1,
                y: 1
            }, {
                x: 2,
                y: 1
            }) ||
            this.isLineWon({
                x: 0,
                y: 2
            }, {
                x: 1,
                y: 2
            }, {
                x: 2,
                y: 2
            }) ||

            this.isLineWon({
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 1
            }, {
                x: 0,
                y: 2
            }) ||
            this.isLineWon({
                x: 1,
                y: 0
            }, {
                x: 1,
                y: 1
            }, {
                x: 1,
                y: 2
            }) ||
            this.isLineWon({
                x: 2,
                y: 0
            }, {
                x: 2,
                y: 1
            }, {
                x: 2,
                y: 2
            }) ||

            this.isLineWon({
                x: 0,
                y: 0
            }, {
                x: 1,
                y: 1
            }, {
                x: 2,
                y: 2
            }) ||
            this.isLineWon({
                x: 0,
                y: 2
            }, {
                x: 1,
                y: 1
            }, {
                x: 2,
                y: 0
            });
    }

    isLineWon(a, b, c) {
        let value = this.field[a.y][a.x] + this.field[b.y][b.x] + this.field[c.y][c.x];
        return value === 'XXX' || value === '000'
    }

    togglePhase() {
        this.currentPhase = this.currentPhase == 'X' ? '0' : 'X'
    }

    whoHasWon() {
        let winner = this.currentPhase == 'X' ? 'Крестики' : 'Нолики';
        alert(winner + ' выиграли')
    }

    isCorrectClick(event) {
        return this.status.isStatusPlaying() && this.board.isClickByCell(event) && this.board.cellIsEmpty(event)
    }
};

class Board {
    constructor() {
        this.boardEl = document.getElementById('game');
    }

    init(game, status) {
        this.game = game;
        this.status = status;
    }


    renderField() {
        for (let i = 0; i < 3; i++) {
            let tr = document.createElement('tr');
            this.boardEl.appendChild(tr);
            for (let j = 0; j < 3; j++) {
                let td = document.createElement('td');
                td.dataset.row = i.toString();
                td.dataset.col = j.toString();
                tr.appendChild(td);
            }
        }
    }
    /**
     * Инициализация обработчиков событий.
     */
    initEventHandlers() {
        // Ставим обработчик, при клике на таблицу вызовется функция this.cellClickHandler.
        this.boardEl.addEventListener('click', event => this.game.cellClickHandler(event))

    }


    /**
     * определяет, был ли "клик" по игровому полю
     * @param {Event} event
     */
    isClickByCell(event) {
        return event.target.tagName === 'TD'
    }

    /**
     * определяет, свободна ли клетка, по которой произведен "клик"
     * @param {string} event     * 
     */
    cellIsEmpty(event) {
        let row = Number(event.target.dataset.row);
        let col = Number(event.target.dataset.col);
        return this.game.field[row][col] === ''
    }
}

class Status {
    constructor() {
        this.status = 'playing'
    }
    /**
     * Проверка что мы "играем", что игра не закончена.
     * @returns {boolean} Вернет true, статус игры "играем", иначе false.
     */
    isStatusPlaying() {
        return this.status === 'playing';
    }

    /**
     * Ставит статус игры в "остановлена".
     */
    setStatusStopped() {
        this.status = 'stopped';
    }

    newSuggestion() {
        return prompt(alert('хотите сыграть снова?'))


    }
}


window.addEventListener('load', () => {
    const game = new Game();
    const board = new Board();
    const status = new Status();
    game.init(board, status);
    board.init(game, status);
    board.renderField();
    board.initEventHandlers();

})
