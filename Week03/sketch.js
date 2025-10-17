let x
let easing = 0.05;

function setup() {
  createCanvas(750, 750);
  x = width/2;
}

function draw() {
  let targetX = mouseX;
   x += (targetX - x) * easing;
  background(102);
  line(x, 0, x, height);
}
