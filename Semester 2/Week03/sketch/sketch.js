let negEdge = -100;
let posEdge = 100;
let count = 0;
let shape1;
let shape2;
let inconsolata;

function preload() {
	inconsolata = loadFont('Inconsolata-Regular.ttf');
  }

function setup() {

let cnv = createCanvas(500,500, WEBGL);
cnv.mousePressed(userStartAudio);
textFont(inconsolata);
textSize(width / 20);
textAlign(CENTER, CENTER);
  
  shape1 = new Shape(random(negEdge,posEdge), random(negEdge,posEdge), random(negEdge,posEdge));
  shape2 = new Sphere(random(negEdge,posEdge), random(negEdge,posEdge), random(negEdge,posEdge));

}

function draw() {
  background(0);
  if (getAudioContext().state !== 'running') {
	fill(255);
  	text('Click to start', 0, 0);
}
	ambientLight(255,255,255);
  

//let xVal = random(negEdge,posEdge);
//let yVal = random(negEdge,posEdge);
//let zVal = random(negEdge,posEdge);

//push();
//translate(xVal, yVal, zVal);
//box(10);
//pop();

//let red = map(xVal, -100, 100, 0, 255);
//let green = map(yVal, -100, 100, 0, 255);
//let blue = map(zVal, -100, 100, 0, 255);
//ambientMaterial(red, green, blue);

shape1.update();
shape1.display();
shape1.checkEdges();

shape2.update();
shape2.display();
shape2.checkEdges(); 

	rotateY(count);
	count = count + (0.003);

	stroke(255);
	drawEdges();
}



function drawEdges() {
  line(negEdge, posEdge, negEdge, posEdge, posEdge, negEdge);
  line(negEdge, negEdge, negEdge, posEdge, negEdge, negEdge);
  line(negEdge, posEdge, negEdge, negEdge, negEdge, negEdge);
  line(posEdge, posEdge, negEdge, posEdge, negEdge, negEdge);

  line(negEdge, posEdge, posEdge, posEdge, posEdge, posEdge);
  line(negEdge, negEdge, posEdge, posEdge, negEdge, posEdge);
  line(negEdge, posEdge, posEdge, negEdge, negEdge, posEdge);
  line(posEdge, posEdge, posEdge, posEdge, negEdge, posEdge);

  line(negEdge, posEdge, negEdge, negEdge, posEdge, posEdge);
  line(posEdge, posEdge, negEdge, posEdge, posEdge, posEdge);
  line(negEdge, negEdge, negEdge, negEdge, negEdge, posEdge);
  line(posEdge, negEdge, negEdge, posEdge, negEdge, posEdge);

}