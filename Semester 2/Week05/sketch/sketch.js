let bird;
let pipe;
let pipes = [];
let health = 1;
let level = 1;

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipe = new Pipe();
}

function draw() {
  if (health < 1) {
    level = 0; // change levels
  }
  // switch statement
  switch(level) {
    case 0:
      gameOver();
      break;

    case 1:
      runGame();
      break;
  }
}

// run the game function
function runGame() {
  background(125,200,250);
  bird.show();
  bird.update();
  if (frameCount % 400 == 0) {
    //console.log(frameCount);
    pipes.push(new Pipe());

  }

  for (var i = 0; i < pipes.length; i++) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
      health --;
    }
  }
  // add the health text
  fill(255);
  textSize(24);
  textAlign(LEFT, CENTER);
  text("Health: "+health, 10, 30);
}

// game over function
function gameOver() {
  console.log("gameOver");
  background(0);
  fill(255);
  textSize(100);
  textAlign(CENTER, CENTER);
  text("GAME OVER", width/2, height/2);
  text("YOU SUCK!!", width/2, 350);
}

// press space bar
function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}