const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 430;
let y = 360;
let radius = 40;
let speed = 10;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;


//Game loop
function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    boundaryCheck();
    drawGreenBlob();
}

function boundaryCheck(){
    if (y < radius){
        y = radius;
    }
    if (y > canvas.height-radius){
        y = canvas.height-radius;
    }
    if (x < radius){
        x = radius;
    }
    if (x > canvas.width-radius){
        x = canvas.width-radius;
    }
}

function inputs (){
    if (upPressed){
        y = y - speed;
    }
    if (downPressed){
        y = y + speed;
    }
    if (leftPressed){
        x = x - speed;
    }
    if (rightPressed){
        x = x + speed;
    }
}

function drawGreenBlob(){
    ctx.fillStyle = "greenyellow";
    if (upPressed){
        ctx.fillStyle = "blue";
    }
    if (downPressed){
        ctx.fillStyle = "magenta";
    }
    if (leftPressed){
        ctx.fillStyle = "yellow";
    }
    if (rightPressed){
        ctx.fillStyle = "red";
    }
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

}

function clearScreen(){
    ctx.fillStyle="black";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);

function keyDown(event){
    //up
    if(event.keyCode == 38){
        upPressed = true;
    }
    //down
    if(event.keyCode == 40){
        downPressed = true;
    }
    //left
    if(event.keyCode == 37){
        leftPressed = true;
    }
    //right
    if(event.keyCode == 39){
        rightPressed = true;
    }
}

function keyUp(event){
    //up
    if(event.keyCode == 38){
        upPressed = false;
    }
    //down
    if(event.keyCode == 40){
        downPressed = false;
    }
    //left
    if(event.keyCode == 37){
        leftPressed = false;
    }
    //right
    if(event.keyCode == 39){
        rightPressed = false;
    }
}

drawGame();