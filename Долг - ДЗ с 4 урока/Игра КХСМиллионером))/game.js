let game = {
  run() {
    let playersProgress = 0;
    alert("Начинаем игру");
    for (i = 0; 1 < quest.length; i++) {
      let answer = parseInt(
        prompt(`${i + 1}-й вопрос: ${quest[i].text}. 
            Варианты ответов: 
            1: ${quest[i].Answ1};
            2: ${quest[i].Answ2};
            3: ${quest[i].Answ3};
            4: ${quest[i].Answ4}
            `)
      );
      if (answer == quest[i].correctAnsw) {
        alert("Вы угадали!!!");
        playersProgress++;
      } else if (answer < 1 || answer > 4) {
        alert("Введите корректное число");
        i--;
        continue;
      } else {
        alert(
          "Вы проиграли, правильный ответ - " +
            quest[i].correctAnsw +
            ". " +
            " Количество правильных ответов - " +
            playersProgress
        );
        return;
      }
    }
  },
  init() {
    console.log("Чтобы начать игру наберите game.run() и нажмите ENTER");
  },
};
game.init();
