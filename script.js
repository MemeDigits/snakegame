let currentPlayer = 1;
let cells = document.querySelectorAll('.cell');
let win = document.querySelector('.win');
let tie = document.querySelector('.tie');

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {
  if (!this.classList.contains('clicked')) {
    if (currentPlayer === 1) {
      this.textContent = 'X';
      this.classList.add('clicked', 'player1');
      currentPlayer = 2;
    } else {
      this.textContent = 'O';
      this.classList.add('clicked', 'player2');
      currentPlayer = 1;
    }
    checkWin();
  }
}

function checkWin() {
  let winner = '';
  if (checkRow(0, 1, 2) || checkRow(3, 4, 5) || checkRow(6, 7, 8) ||
      checkRow(0, 3, 6) || checkRow(1, 4, 7) || checkRow(2, 5, 8) ||
      checkRow(0, 4, 8) || checkRow(2, 4, 6)) {
    winner = (currentPlayer === 1) ? 'O' : 'X';
    win.textContent = `Player ${currentPlayer} wins with ${winner}`;
    reset();
  } else if (checkTie()) {
    tie.textContent = 'Game is a tie';
    reset();
  }
}

function checkRow(a, b, c) {
  if (cells[a].classList.contains('clicked') &&
      cells[a].classList.contains(`player${currentPlayer}`) &&
      cells
