let rectWidth = 360;
let rectHeight = 125;
let ellHeight = 360;
let ellWidth = 360;

// creating a background
function setup() {
    createCanvas(720, 720)
    background(255);
    noLoop();
}

// display stuff on the background
function draw() {
     noStroke();

// Body
    fill(0, 71, 171);
    rect(150, 500, 420, 300, 20);

// Arm Shadow L
    fill(0, 61, 161);
    rect(225, 550, 20, 300, 5);

// Arm Shadow R
    fill(0, 61, 161);
    rect(475, 550, 20, 300, 5);

// Hood
    fill(0, 61, 161);
    ellipse(360, 475, ellWidth, ellHeight/2);

// Head
    fill(255, 228, 173);
    ellipse(360, 360, ellWidth, ellHeight);

// Eye L
    fill(255);
    ellipse(300, 360, 70, 30);

// Iris L
    fill(173, 216, 255);
    ellipse(300, 360, 32, 30);

 // Pupil L
    fill(0);
    ellipse(300, 360, 21, 20);

// Eyebrow L
    fill(50, 25, 0);
    rect(260, 325, 75, 10, 5);

// Eye R
    fill(255);
    ellipse(425, 360, 70, 30);

// Iris r
    fill(173, 216, 255);
    ellipse(425, 360, 32, 30);

 // Pupil R
    fill(0);
    ellipse(425, 360, 21, 20);

 // Eyebrow R
    fill(50, 25, 0);
    rect(390, 325, 75, 10, 5);

// Hair Mid
    fill(50, 25, 0);
    rect(170, 180, 380, 75, 20);

 // Hair L
    fill(50, 25, 0);
    rect(170, 225, 75, 275, 20);

// Hair R
    fill(50, 25, 0);
    rect(475, 225, 75, 275, 20);

// Mouth
    fill(0);
    rect(325, 475, 75, 10, 5);

}
