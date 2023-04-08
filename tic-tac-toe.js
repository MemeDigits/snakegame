const gameboard = document.getElementById('gameboard');
const cells = document.querySelectorAll('.cell');
const winnerMessage = document.getElementById('winner');
const resetButton = document.getElementById('reset-btn');
let is69 = false; // true: 69, false: 420
let gameboardState = [null, null, null, null, null, null, null,
