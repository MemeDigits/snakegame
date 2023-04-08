const board = document.querySelector('.board');
const cells = document.querySelectorAll('[data-cell]');
const result = document.querySelector('#result');
const restart = document.querySelector('#restart');
const currentPlayerDisplay = document.querySelector('#current-player');

let currentPlayer = '69';
let gameEnd = false;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

startGame();

restart.addEventListener('click', startGame);

function startGame() {
  gameEnd = false;
  cells.forEach(cell => {
    cell.classList.remove('69', '420');
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
  setBoardHoverClass();
  result.textContent = '';
  currentPlayer = '69';
  currentPlayerDisplay.textContent = '69';
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = currentPlayer === '69' ? '69' : '420';
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass
