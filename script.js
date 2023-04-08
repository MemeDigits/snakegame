// Define variables
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const blockSize = 10;
let snake = [];
let food = {};
let direction = "right";
let score = 0;
let gameLoop;

// Create the snake
function createSnake() {
  let length = 5;
  for (let i = length - 1; i >= 0; i--) {
    snake.push({ x: i, y: 0 });
  }
}

// Create the food
function createFood() {
  food.x = Math.floor(Math.random() * (canvas.width / blockSize)) * blockSize;
  food.y = Math.floor(Math.random() * (canvas.height / blockSize)) * blockSize;
}

// Draw the snake and the food
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the snake
  ctx.fillStyle = "green";
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(
      snake[i].x * blockSize,
      snake[i].y * blockSize,
      blockSize,
      blockSize
    );
  }

  // Draw the food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, blockSize, blockSize);

  // Draw the score
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText(`Score: ${score}`, 10, 30);
}

// Move the snake
function move() {
  let head = { x: snake[0].x, y: snake[0].y };

  if (direction === "right") {
    head.x++;
  } else if (direction === "left") {
    head.x--;
  } else if (direction === "up") {
    head.y--;
  } else if (direction === "down") {
    head.y++;
  }

  // Check if the snake hit the wall or itself
  if (
    head.x < 0 ||
    head.x >= canvas.width / blockSize ||
    head.y < 0 ||
    head.y >= canvas.height / blockSize ||
    checkCollision(head, snake)
  ) {
    gameOver();
    return;
  }

  // Check if the snake ate the food
  if (checkCollision(head, [food])) {
    score++;
    createFood();
  } else {
    snake.pop();
  }

  snake.unshift(head);
}

// Check if there's a collision between two objects
function checkCollision(a, b) {
  for (let i = 0; i < b.length; i++) {
    if (a.x === b[i].x && a.y === b[i].y) {
      return true;
    }
  }
  return
