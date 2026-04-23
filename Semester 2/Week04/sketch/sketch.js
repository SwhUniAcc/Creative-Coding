let x, y;
let radius = 100;
let r, g, b;
let timer = 10;
let interval = 60;
let score = 0;
let gameOver = false;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(220);
	newValues();
}

function draw() {

	textSize(24);
	textAlign(LEFT, CENTER);
	text("Score: " + score, 10, 30);
	text("Time: " + timer, 120, 30);

	if (timer <= 0) {
		gameOver = true;
		background(0);
		fill(255);
		textAlign(CENTER, CENTER);
		textSize(50);
		text("GAME OVER", windowWidth / 2, windowHeight / 2 - 40);
		textSize(30);
		text("Your final Score: " + score, windowWidth / 2, windowHeight / 2 + 10);
		textSize(20);
		text("Click here to restart", windowWidth / 2, windowHeight / 2 + 50);

		// Restart button circle
		noFill();
		stroke(0);
		ellipse(windowWidth / 2, windowHeight / 2, radius * 4, radius * 4);

		return; // stops the rest of draw() from running
	}


	else if (frameCount % interval == 0) { // if the frameCount is divisible by the interval, then the interval (in seconds) has passed and we can decrement timer 
		console.log("new circle!");
		timer--;
		background(220); // set background to grey
		newValues();
		ellipse(x, y, radius * 2, radius * 2); // draw a circle
	}

	fill(r, g, b); // create a colour fill with out random rgb values

	// if (frameCount % interval == 0) { // if the frameCount is divisible by the interval, then the interval (in seconds) has passed and we can draw a new circle
	// 	console.log("new circle!");
	// 	background(220); // set background
	// 	newValues();
	// 	ellipse(random(x), random(y), radius * 2, radius * 2); // draw a circle
	// }
}

function mousePressed() {
	if (!gameOver) {
		let d = dist(mouseX, mouseY, x, y); // find the distance between where the mouse is when pressed and our x and y values
		if (d < radius) { // is the distance smaller than the radius of the circle?
			console.log("Score!"); // log that we've been successful 
			score++; // log that we've been successful - we'll update this bit later.
			background(220);
		}
	}
	else {
		let d = dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2);
		if (d < radius * 2) {
			gameOver = false;
			timer = 10;
			score = 0;
			background(220);
		}
	}

}

function newValues() {
	x = random(windowWidth);
	y = random(windowHeight);
	r = random(255);
	g = random(255);
	b = random(255);
}
