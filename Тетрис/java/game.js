class Game {
  constructor() {
    this.tickIdentifier = null;
    this.messageEl = document.getElementById("message");
    this.countTable = document.getElementById("count");
    this.count = 0;
    this.arrowDown = false;
    this.timeIdentifier = 700;
  }

  /**
   * Метод получает другие игровые объекты, которые нужны ему
   * для работы.
   *
   */
  init(
    board,
    menu,
    move,
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
    this.blocks = [
      blockT,
      blockCub,
      blockStick,
      blockZr,
      blockZl,
      blockGr,
      blockGl,
    ];
  }

  /**
   * Метод назначает обработчики на события клика на кнопки "Старт",
   * "Пауза", а также на стрелки на клавиатуре.
   */
  begin() {
    this.move.whatBlock();
    this.move.createNewBlock();
    this.water.changeCount();
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
        this.timeIdentifier
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
   * 1. движение фигур
   * 2. проверяет проиграна/выиграна ли игра
   * 3. создает новые фигуры
   * 4. заново отрисовывает "воду" и удаляет полные ряды
   */
  doTick() {
    if (this.move.isMoveImpossible()) {
      this.move.stopTheBlock();
      this.move.whatBlock();
      this.move.createNewBlock();
      this.water.deleteWaterRow();
      if (this.arrowDown == true) {
        this.stopTime();
        this.changeTimeIdentifier(700);
        // this.arrowDown = false;
      }
    }
    if (this.isGameLost()) {
      return;
    }
    if (this.isGameWon()) {
      return;
    }
    this.move.performStep();
    this.board.clearBoard();
    this.board.renderWater();
    this.board.renderBlock();
  }
  /**
   * метод увеличивает скорость падения фигур по мере набора очков
   */

  stopTime() {
    clearInterval(this.tickIdentifier);
  }

  changeTimeIdentifier(interval) {
    this.tickIdentifier = setInterval(this.doTick.bind(this), interval);
    this.timeIdentifier = interval;
  }

  increaseSpeed() {
    if (this.count >= 1 && this.count < 4) {
      this.stopTime();
      this.changeTimeIdentifier(400);
    } else if (this.count >= 5 && this.count < 6) {
      this.stopTime();
      4;
      this.changeTimeIdentifier(500);
    } else if (this.count >= 7 && this.count < 8) {
      this.stopTime();
      this.changeTimeIdentifier(400);
    } else if (this.count >= 9 && this.count < 10) {
      this.stopTime();
      this.changeTimeIdentifier(300);
    } else if (this.count >= 11 && this.count < 12) {
      this.stopTime();
      this.changeTimeIdentifier(200);
    }
  }

  /**
   * Метод проверяет выиграна ли игра, останавливает игру,
   * выводит сообщение о выигрыше.
   * @returns {boolean} если достигнут счёт 30 очков
   * для выигрыша, тогда true, иначе false.
   */
  isGameWon() {
    if (this.count == 5) {
      this.stopTime();
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
    for (let i = 1; i < 11; i++) {
      let upCell = this.board.getCellEl(i, 2);
      if (upCell.classList.contains("waterBody")) {
        this.stopTime();
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
        // this.doTick.bind(this);
        this.stopTime();
        this.changeTimeIdentifier(100);
        this.arrowDown = true;
        break;
      case "ArrowLeft":
        this.move.goLeft();
        break;
      case "ArrowRight":
        this.move.goRight();
        break;
    }
    return event.key;
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

  const blockT1 = new BlockT1();
  const blockCub1 = new BlockCub1();
  const blockStick1 = new BlockStick1();
  const blockZr1 = new BlockZr1();
  const blockZl1 = new BlockZl1();
  const blockGr1 = new BlockGr1();
  const blockGl1 = new BlockGl1();

  board.init(
    game,
    move,
    water,
    blockT,
    blockCub,
    blockStick,
    blockZr,
    blockZl,
    blockGr,
    blockGl
  );
  game.init(
    board,
    menu,
    move,
    water,
    status,
    blockT,
    blockCub,
    blockStick,
    blockZr,
    blockZl,
    blockGr,
    blockGl
  );
  move.init(
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
    blockGl,
    blockT1,
    blockCub1,
    blockStick1,
    blockZr1,
    blockZl1,
    blockGr1,
    blockGl1
  );
  water.init(
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
  );
  board.renderBoard();
  game.begin();
});
