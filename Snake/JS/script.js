let game_canvas = document.querySelector(".game_canvas");
let snake = game_canvas.querySelector(".snake");
let food = game_canvas.querySelector(".food");
let score_DOM = document.querySelector(".score");

let height = 18;
let width = 18;
let snake_coords = { x: random(2, 26), y: random(2, 22) };
let food_coords = { x: random(2, 26), y: random(2, 22) };
let snake_direction = "none";
let mover;
let game_playable = true;
let score = 0;


let gameOverSound = new Audio("sound/Win.mp3");
let foodEatSound = new Audio("sound/Plop.mp3");
// function to generate random number in a certain range: 
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// function to generate the random position of apple on eat of apple:
function appleGen() {
    food_coords = { x: random(2, 26), y: random(2, 22) };
}

// Function of gameOver():
function gameOver() {
    gameOverSound.play()
    game_playable = false;
    score_DOM.innerHTML = `Game Over! <br>Score : ${score}<br><button onclick="location.reload()">Play Again</button>`;
    // location.reload()
}


// setting the position of the snake and apple according to the coordinates:
let interval = setInterval(() => {
    document.querySelector(".sakdu").innerHTML = `Food: ${food_coords.x} , ${food_coords.y} <br>
    Snake: ${snake_coords.x} , ${snake_coords.y}`
    if (snake_coords.x > 27.6) {
        clearInterval(interval);
        gameOver();
        snake_coords.x = 27.3
    }
    if (snake_coords.y > 23.65) {
        clearInterval(interval);
        gameOver();
        snake_coords.y = 23.3
    }
    if (snake_coords.x < 0) {
        clearInterval(interval);
        gameOver();
        snake_coords.x = 0
    }
    if (snake_coords.y < 0) {
        clearInterval(interval);
        gameOver();
        snake_coords.y = 0
    }
    snake.style.top = snake_coords.y * 20 + "px";
    snake.style.left = snake_coords.x * 20 + "px";

    food.style.top = food_coords.y * 20 + "px";
    food.style.left = food_coords.x * 20 + "px";
}, 1);

// Making the snake move
document.body.onkeydown = function (key) {
    if (game_playable === true) {
        if (key.key == "ArrowUp") {
            snake.style.width = "18px";
            snake.style.height = height + "px";
            snake_direction = "y-";
            clearInterval(mover);
            mover = setInterval(() => {
                snake.style.width = "18px";
                snake.style.height = height + "px";
                if (snake_direction === "y-") {
                    snake_coords.y--
                }
                if (snake_direction === "y+") {
                    snake_coords.y++
                }
                if (snake_direction === "x-") {
                    snake_coords.x--
                }
                if (snake_direction === "x+") {
                    snake_coords.x++
                }
            }, 50);
        }

        if (key.key == "ArrowDown") {
            snake.style.width = "18px";
            snake.style.height = height + "px";
            snake_direction = "y+";
            clearInterval(mover);
            mover = setInterval(() => {
                snake.style.width = "18px";
                snake.style.height = height + "px";
                if (snake_direction === "y-") {
                    snake_coords.y--
                }
                if (snake_direction === "y+") {
                    snake_coords.y++
                }
                if (snake_direction === "x-") {
                    snake_coords.x--
                }
                if (snake_direction === "x+") {
                    snake_coords.x++
                }
            }, 50);
        }

        if (key.key == "ArrowLeft") {
            snake.style.height = "18px";
            snake.style.width = height + "px";
            snake_direction = "x-";
            clearInterval(mover);
            mover = setInterval(() => {
                snake.style.height = "18px";
                snake.style.width = height + "px";
                if (snake_direction === "y-") {
                    snake_coords.y--
                }
                if (snake_direction === "y+") {
                    snake_coords.y++
                }
                if (snake_direction === "x-") {
                    snake_coords.x--
                }
                if (snake_direction === "x+") {
                    snake_coords.x++
                }
            }, 50);
        }

        if (key.key == "ArrowRight") {
            snake.style.height = "18px";
            snake.style.width = height + "px";
            snake_direction = "x+";
            clearInterval(mover);
            mover = setInterval(() => {
                snake.style.height = "18px";
                snake.style.width = height + "px";
                if (snake_direction === "y-") {
                    snake_coords.y--
                }
                if (snake_direction === "y+") {
                    snake_coords.y++
                }
                if (snake_direction === "x-") {
                    snake_coords.x--
                }
                if (snake_direction === "x+") {
                    snake_coords.x++
                }
            }, 50);
        }
    }
    else { }
}

// checking if it ate apple
eat()
function eat() {

    setInterval(() => {
        if (snake_coords.x == food_coords.x && snake_coords.y == food_coords.y) {
            foodEatSound.play();
            score++
            score_DOM.innerHTML = score;
            appleGen()
            height = height + 1;
            width = width + 1;
        }
    }, 1);
}