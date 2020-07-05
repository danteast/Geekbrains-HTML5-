"use strict";

class Board {
  constructor() {
    this.boardEl = document.getElementById("game");
  }

  init(settings, snake, food) {
    this.settings = settings;
    this.snake = snake;
    this.food = food;
  }
  /**
   * Метод отрисовывает игровое поле.
   */
  renderBoard() {
    this.boardEl.innerHTML = "";
    for (let row = 0; row < this.settings.rowsNumb; row++) {
      let tr = document.createElement("tr");
      this.boardEl.appendChild(tr);
      for (let col = 0; col < this.settings.colsNumb; col++) {
        let td = document.createElement("td");
        tr.appendChild(td);
      }
    }
  }

  /**
   * Метод отрисовывает змейку
   */
  renderSnake() {
    const snakeElBody = this.getSnakeElBody(this.snake.body);
    if (snakeElBody) {
      snakeElBody.forEach(function (tdEl) {
        tdEl.classList.add("snakeBody");
      });
    }
    snakeElBody[0].classList.add("head");
  }

  /**
   * Отрисовывает еду на поле
   * @param {number} coords
   */
  renderFood(coords) {
    const foodcell = this.getCellEl(coords.x, coords.y);
    foodcell.classList.add("food");
  }

  clearBoard() {
    const tdElems = document.querySelectorAll("td");
    tdElems.forEach(function (td) {
      td.className = "";
    });
  }

  /**
   * Получаем набор тегов td, представляющих тело змейки.
   * @param {array} bodyCoords массив объектов с координатами
   * @returns {HTMLTableCellElement[]|null} возвращается набор тегов td если были
   * переданы координаты, иначе null.
   */
  getSnakeElBody(bodyCoords) {
    if (bodyCoords.length > 0) {
      const bodyElems = [];
      for (let value of bodyCoords) {
        let elem = this.getCellEl(value.x, value.y);
        bodyElems.push(elem);
      }
      return bodyElems;
    }
    return null;
  }

  /**
   * Получаем ячейку таблицы.
   * @param {number} x координата по оси х.
   * @param {number} y координата по оси y.
   * @returns {HTMLTableCellElement} тег td
   */
  getCellEl(x, y) {
    return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
  }

  /**
   * Является ли следующий шаг, шагом в стену.
   * @param {Object} nextCellCoords - координаты ячейки, куда змейка собирается сделать шаг.
   * @param {number} nextCellCoords.x
   * @param {number} nextCellCoords.y
   * @returns {boolean}
   */
  // isNextStepToWall(nextCellCoords) {
  //     let nextCell = this.getCellEl(nextCellCoords.x, nextCellCoords.y);
  //     if (nextCell === null) {
  //         return true
  //     }
  //     return false
  // }

  /**
   * Метод проверяет съела ли змейка еду.
   * @returns {boolean} true если змейка находится на еде, иначе false.
   */
  isSnakeEating() {
    return this.boardEl.querySelector(".food").classList.contains("snakeBody");
  }
}

class Snake {
  constructor() {
    (this.body = [{
        x: 1,
        y: 3,
      },
      {
        x: 1,
        y: 2,
      },
      {
        x: 1,
        y: 1,
      },
    ]),
    (this.possDirections = ["down", "up", "left", "right"]);
    this.direction = "down";
    this.ateHimSelf = false;
    this.increaseAtr = false
  }

  init(settings, board, game) {
    this.settings = settings;
    this.board = board;
    this.game = game;
  }

  /**
   * Меняем направление движения.
   * @param {string} direction направление может быть down, up, left, right.
   * @throws {Error} при передаче не корректного направления выбрасывается ошибка.
   */
  changeDirection(newDirection) {
    if (!this.possDirections.includes(newDirection)) {
      throw new Error(
        "Передано неверное направление движения. Вы передали " + newDirection
      );
    }
    if (this.oppositeDirection(newDirection)) {
      return;
    }
    this.direction = newDirection;
  }

  /**
   * Метод проверяет, является ли переданное направление, противоположным
   * тому куда сейчас движется змейка.
   * @param {string} newDirection новое направление, может быть up, down, right, left.
   * @returns {boolean} true если новое направление противоположно текущему,
   * иначе false.
   */
  oppositeDirection(newDirection) {
    if (this.direction == "down" && newDirection == "up") {
      return true;
    }
    if (this.direction == "up" && newDirection == "down") {
      return true;
    }
    if (this.direction == "left" && newDirection == "right") {
      return true;
    }
    if (this.direction == "right" && newDirection == "left") {
      return true;
    }
    return false;
  }

  /**
   * Метод осуществляет шаг змейки. Добавляет ячейку перед существующим
   * положением головы и удаляет одну ячейку в хвосте. Если впереди стена,
   * то перекидывает ячейку тела на противоположный конец игрового поля
   */
  performStep() {
    let currentHead = this.body[0];
    let newHead = {
      x: currentHead.x,
      y: currentHead.y,
    };
    switch (this.direction) {
      case "down":
        if (newHead.y < this.settings.rowsNumb) {
          newHead.y++;
        } else {
          newHead.y = 1;
        }
        break;
      case "up":
        if (newHead.y > 1) {
          newHead.y--;
        } else {
          newHead.y = this.settings.rowsNumb;
        }
        break;
      case "right":
        if (newHead.x < this.settings.colsNumb) {
          newHead.x++;
        } else {
          newHead.x = 1;
        }
        break;
      case "left":
        if (newHead.x > 1) {
          newHead.x--;
        } else {
          newHead.x = this.settings.colsNumb;
        }
        break;
    }
    let newHeadEl = this.board.getCellEl(newHead.x, newHead.y);
    if (newHeadEl.classList.contains("snakeBody")) {
      this.ateHimSelf = true;
      return false;
    }

    this.body.unshift(newHead);
    this.body.pop();
  }

  /**
   * Метод дублирует в массиве объектов представляющих тело змейки
   * последнюю ячейку, т.е. в массиве в конце оказываются два
   * одинаковых объекта. Когда метод performStep в самом конце
   * удаляет последний элемент массива, он удаляет сдублированный
   * объект, таким образом тело змейки растет.
   */
  increaseBody() {
    let bodyLastCell = this.body[this.body.length - 1];
    let lastCellDouble = {
      x: bodyLastCell.x,
      y: bodyLastCell.y,
    };
    this.body.push(lastCellDouble);
    this.increaseCount();
  }

  increaseCount() {
    this.game.count++;
    this.game.restCount--;
    this.increaseAtr = true
  }
}

class Food {
  constructor() {
    this.x = null;
    this.y = null;
  }
  /**
   * Метод получает другие игровые объекты, которые нужны ему
   * для работы.
   * @param {Settings} settings объект настроек
   * @param {Snake} snake объект змейки
   * @param {Board} board объект игрового поля
   */
  init(settings, snake, board) {
    this.settings = settings;
    this.snake = snake;
    this.board = board;
  }
  /**
   * Устанавливает еду по сгенерированным координатам
   */
  setNewFood() {
    const foodCoords = this.generateRandomCoords();
    this.board.renderFood(foodCoords);
  }

  /**
   * Метод устанавливает на игровом поле еду по текущим
   * координатам.
   */
  setFood() {
    this.board.renderFood(this);
  }

  /**
   * Генерирует случайные координаты, проверяет, существует ли ячейка
   * с такими координатами на игровом поле и не совпадает ли она с телои
   * змейки
   */
  generateRandomCoords() {
    while (true) {
      this.x = Math.floor(Math.random() * this.settings.rowsNumb);
      this.y = Math.floor(Math.random() * this.settings.colsNumb);
      let cell = this.board.getCellEl(this.x, this.y);
      if (cell == null) {
        continue;
      }
      if (cell.classList.contains("snakeBody")) {
        continue;
      }
      return this;
    }
  }
}

class Game {
  constructor() {
    this.tickIdentifier = null;
    this.messageEl = document.getElementById("message");
    this.countTable = document.getElementById("count");
    this.restToPick = document.getElementById("rest");
    this.count = 0;
    this.restCount = 0
  }

  /**
   * Метод получает другие игровые объекты, которые нужны ему
   * для работы.
   * @param {Settings} settings
   * @param {Status} status
   * @param {Board} board
   * @param {Snake} snake
   * @param {Menu} menu
   * @param {Food} food
   */
  init(settings, status, board, snake, menu, food) {
    this.settings = settings;
    this.snake = snake;
    this.restCount = this.settings.winLength - this.snake.body.length;
    this.status = status;
    this.board = board;
    this.menu = menu;
    this.food = food;
  }

  /**
   * Метод назначает обработчики на события клика на кнопки "Старт",
   * "Пауза", а также на стрелки на клавиатуре.
   */
  begin() {
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
        1000 / this.settings.speed
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

    this.snake.performStep();
    if (this.board.isSnakeEating()) {
      this.snake.increaseBody();
      this.food.setNewFood();
    }
    if (this.isGameLost()) {
      return;
    }
    if (this.isGameWon()) {
      return;
    }
    this.countTable.innerText = `Счет: ${this.count}`;
    this.restToPick.innerText = `Осталось проглотить: ${this.restCount}`;
    this.increaseSpeed();
    this.snake.increaseAtr = false;
    this.board.clearBoard();
    this.food.setFood();
    this.board.renderSnake();
  }

  increaseSpeed() {
    if (!this.count == 0 && this.count % 3 == 0 && this.snake.increaseAtr) {
      this.settings.speed++;
      this.tickIdentifier = setInterval(
        this.doTick.bind(this),
        1000 / this.settings.speed)
    }
  }

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

  /**
   * Метод проверяет проиграна ли игра, останавливает игру
   * в случае проигрыша, выводит сообщение о проигрыше.
   * @returns {boolean} если мы шагнули в стену, тогда
   * true, иначе false.
   */
  isGameLost() {
    if (this.snake.ateHimSelf == true) {
      clearInterval(this.tickIdentifier);
      this.setMessage("Вы проиграли");
      return true;
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
        this.snake.changeDirection("up");
        break;
      case "ArrowDown":
        this.snake.changeDirection("down");
        break;
      case "ArrowLeft":
        this.snake.changeDirection("left");
        break;
      case "ArrowRight":
        this.snake.changeDirection("right");
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

class Menu {
  constructor() {
    this.startBtnEl = document.getElementById("startBtn");
    this.pauseBtnEl = document.getElementById("pauseBtn");
  }

  /**
   * Метод назначает переданные функции в качестве обработчиков
   * событий клика на кнопки "Старт" и "Пауза".
   * @param {Function} startBtnClickHandler
   * @param {Function} pauseBtnClickHandler
   */
  addButtonsClickListeners(startBtnClickHandler, pauseBtnClickHandler) {
    this.startBtnEl.addEventListener("click", startBtnClickHandler);
    this.pauseBtnEl.addEventListener("click", pauseBtnClickHandler);
  }
}

class Status {
  constructor() {
    this.setPaused();
  }

  /** Это значит что мы играем. */
  setPlaying() {
    this.condition = "playing";
  }

  /** Это значит что игра на паузе. */
  setPaused() {
    this.condition = "paused";
  }

  /**
   * @returns {boolean} если мы сейчас играем, тогда true, иначе false.
   */
  isPlaying() {
    return this.condition === "playing";
  }

  /**
   * @returns {boolean} если сейчас игра на паузе, тогда true, иначе false.
   */
  isPaused() {
    return this.condition === "paused";
  }
}

class Settings {
  /**
   * @param {Object} params - Парметры игры.
   * @param {number} params.rowsCount - количество строк игрового поля.
   * @param {number} params.colsCount - количество колонок игрового поля.
   * @param {number} params.speed - скорость перемещения змейки.
   * @param {number} params.winLength - какую длину надо наесть, чтобы выиграть.
   * @throws {Error} если переданы не верные настройки выбрасывается
   * соответствующая ошибка.
   */
  init(params) {
    let defaultParams = {
      rowsNumb: 21,
      colsNumb: 21,
      speed: 2,
      winLength: 50,
    };
    Object.assign(defaultParams, params);

    if (defaultParams.rowsNumb < 10 || defaultParams.rowsNumb > 30) {
      throw new Error(
        "Неверные настройки, значение rowsNumb должно быть в диапазоне [10, 30]."
      );
    }
    this.rowsNumb = defaultParams.rowsNumb;

    if (defaultParams.colsNumb < 10 || defaultParams.colsNumb > 30) {
      throw new Error(
        "Неверные настройки, значение colsNumb должно быть в диапазоне [10, 30]."
      );
    }
    this.colsNumb = defaultParams.colsNumb;

    if (defaultParams.speed < 1 || defaultParams.speed > 10) {
      throw new Error(
        "Неверные настройки, значение speed должно быть в диапазоне [1, 10]."
      );
    }
    this.speed = defaultParams.speed;

    if (defaultParams.winLength < 5 || defaultParams.winLength > 50) {
      throw new Error(
        "Неверные настройки, значение winLength должно быть в диапазоне [5, 50]."
      );
    }
    this.winLength = defaultParams.winLength;
  }
}

window.addEventListener("load", () => {
  const settings = new Settings();
  const board = new Board();
  const snake = new Snake();
  const status = new Status();
  const menu = new Menu();
  const food = new Food();
  settings.init({
    speed: 4,
    winLength: 10,
  });
  const game = new Game();


  board.init(settings, snake);
  food.init(settings, snake, board);
  snake.init(settings, board, game);
  game.init(settings, status, board, snake, menu, food);

  board.renderBoard();
  board.renderSnake(snake);

  food.setNewFood();
  game.begin();
});