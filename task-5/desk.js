let desk = document.querySelector('.desk');
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const numbs = [1, 2, 3, 4, 5, 6, 7, 8]
desk1 = document.createElement('div');
desk1.className = 'white1';
desk.insertAdjacentElement('beforeEnd', desk1);
for (i = 0; i < 8; i++) {
    const lettersRow = document.createElement('div');
    lettersRow.className = 'symbols';
    lettersRow.innerText = letters[i];
    desk.insertAdjacentElement('beforeEnd', lettersRow)
}
for (i = 0; i < 8; i++) {
    const numbsCol = document.createElement('div');
    numbsCol.className = 'symbols';
    numbsCol.innerText = numbs[i];
    desk.insertAdjacentElement('beforeEnd', numbsCol);
    for (j = 0; j < 4; j++) {
        if (i % 2 == 0) {
            const squadWhite = document.createElement('div');
            squadWhite.className = 'white';
            const squadBlack = document.createElement('div');
            squadBlack.className = 'black';
            desk.insertAdjacentElement('beforeEnd', squadWhite);
            desk.insertAdjacentElement('beforeEnd', squadBlack)
        } else {
            const squadWhite = document.createElement('div');
            squadWhite.className = 'white';
            const squadBlack = document.createElement('div');
            squadBlack.className = 'black';
            desk.insertAdjacentElement('beforeEnd', squadBlack);
            desk.insertAdjacentElement('beforeEnd', squadWhite)
        }
    }

}