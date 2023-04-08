const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', startGame);

let isGameActive = false;
let currentPlayer = '69';

const gameBoard = document.getElementById('game-board');
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

let boardState = ['', '', '', '', '', '', '', '', ''];

function startGame() {
	isGameActive = true;
	currentPlayer = '69';
	boardState = ['', '', '', '', '', '', '', '', ''];
	gameBoard.innerHTML = '';
	renderBoard();
}

function renderBoard() {
	for (let i = 0; i < 9; i++) {
		const box = document.createElement('div');
		box.classList.add('box');
		box.setAttribute('data-index', i);
		box.addEventListener('click', handleBoxClick);
		box.innerText = boardState[i] === '' ? '' : boardState[i] === '69' ? '69' : '420';
		if (boardState[i] === '69') {
			box.classList.add('player-69');
		} else if (boardState[i] === '420') {
			box.classList.add('player-420');
		}
		gameBoard.appendChild(box);
	}
}

function handleBoxClick(event) {
	const clickedBox = event.target;
	const clickedBoxIndex = clickedBox.getAttribute('data-index');
	if (boardState[clickedBoxIndex] !== '' || !isGameActive) {
		return;
	}
	handlePlayerMove(clickedBox, clickedBoxIndex);
	handleResult();
}

function handlePlayerMove(clickedBox, clickedBoxIndex) {
	boardState[clickedBoxIndex] = currentPlayer;
	clickedBox.innerText = currentPlayer;
	if (currentPlayer === '69') {
		clickedBox.classList.add('player-69');
		currentPlayer = '420';
	} else {
		clickedBox.classList.add('player-420');
		currentPlayer = '69';
	}
}

function handleResult() {
	for (let i = 0; i < winningCombinations.length; i++) {
		const [a, b, c] = winningCombinations[i];
		if (boardState[a] === '' || boardState[b] === '' || boardState[c] === '') {
			continue;
		}
		if (boardState[a] === boardState[b] && boardState[b] === boardState[c]) {
			isGameActive = false;
			alert(`Player ${boardState[a]} has won!`);
			break;
		}
	}
	if (!boardState.includes('') && isGameActive) {
		isGameActive = false;
		alert('Tie!');
	}
}
