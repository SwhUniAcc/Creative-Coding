let rectWidth = 350;
let rectHeight = 125;
let ellHeight = 360;
let ellWidth = 360;

// creating a background
function setup() {
    createCanvas(1880, 990)
    background(255);
    noLoop();
}

// display stuff on the background
function draw() {
// Text 1    
    textSize(25);
    text("Test One", 5, 25); 

// Text 2
    textSize(25);
    fill(0, 75, 255);
    stroke(10);
    strokeWeight(5);
    text("Test Two", 5, 50);

// Ellipse 1
    fill(75, 0, 225);
    ellipse(940, 495, ellWidth, ellHeight);
    console.log(ellWidth);
    console.log(ellHeight);

// Retangale 1
    fill(75, 255, 0);
    rect(765, 150, rectWidth, rectHeight);
    console.log(rectWidth);
    console.log(rectHeight);

// Retangale 2 (Halved)
    fill(255, 75, 0);
    rect(765, 75, rectWidth/2, rectHeight/2)
    console.log(rectWidth/2);
    console.log(rectHeight/2);

 //Retangle 3 (Randomized)
    noFill()
    drawShape(rectWidth, rectHeight)
}

function drawShape(rectangleWidth, rectangleHeight) {
    let xPos = random(0, rectWidth);
    let yPos = random(0, rectHeight);

    rect(xPos, yPos, rectangleWidth, rectangleHeight);

}
