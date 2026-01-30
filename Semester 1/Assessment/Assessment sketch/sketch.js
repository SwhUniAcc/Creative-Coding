let mode = 0;

function setup() {
  createCanvas(1024, 1024);
}

function draw() {
  
  
  switch (mode) {
    case 0: //the page the user is automatically taken to when the website is opened
      background(255);
      text("please press these numbers to be taken to the corresponding compositions:", 325, 512);
      text("1 - Random  I  2 - Pattern  I  3 - Repetition", 415, 532);
      text("(Page must be reloaded to return to other pages)", 395, 552);
      break;
    case 1: //the random composition appears when pressing 1
      randomisation();
      break;
    case 2: //the pattern composition appears when pressing 2
      pattern();
      break;
    case 3: //the repetition composition appears when pressing 3
      repetition();   
      break;
    default:
  }
}

function keyPressed() {
  mode++;
}
function randomisation() { //the random composition
background(0,6,11);

  for (let x = 2; x < width; x = x + sizeX) { //creates multiple of the shape on the X axis
   for (let y = 2; y < height; y = y + sizeY) { //creates multiple of the shape on the Y axis

var sizeX = random(102); //variables that randomize shape's X value
  var sizeY = random(102); //variables that randomize shape's y value

strokeWeight(random(2.5,7.5)); //randomized stroke weights
stroke(0,random(60,70),random(160,170)); //randomized colour
  fill(0, random(71,81), random(171,181)); 
    ellipse(y,y,sizeX,sizeY, random(0,50)); //randomized diagonal line of circles
    rect(y,y,sizeX,sizeY, random(0,50)); //randomized diagonal line of rectangles

//translate the diagonal line of rectangles to the opposite side to create an X shape

push(); //stops code interacting with any other code before this line
  translate(width,0);
  scale(-1,1);
    rect(y,y,sizeX,sizeY,); 
    ellipse(y,y,sizeX,sizeY); 
pop(); //stops code interacting with any other code after this line
    }
  }
}

function pattern() { //the pattern composition
background(255);

push(); //stops code interacting with any other code before this line
  fill(0);
  noStroke();
    for (let x = 128; x < width; x = x + 256) {  //creates four more of the shape on the X axis to fill out the page
    for (let y = 128; y < height; y = y + 256) { //creates four more of the shape on the Y axis to fill out the page
  ellipse(x,y,256,256);
  }
}
pop(); //stops code interacting with any other code after this line

push(); //stops code interacting with any other code before this line
  fill(0);
  stroke(255);
  strokeWeight(5);
      for (let x = -72; x < width; x = x + 256) {  //creates five more of the shape on the X axis to fill out the page
      for (let y = -72; y < height; y = y + 256) { //creates five more of the shape on the Y axis to fill out the page
  rect(x,y,145,145); 
  }    
}
pop(); //stops code interacting with any other code after this line

push(); //stops code interacting with any other code before this line
  fill(0);
  stroke(255);
  strokeWeight(5);
      for (let x = 123; x < width; x = x + 512) {  //creates four more of the shape on the X axis to fill out the page
      for (let y = 123; y < height; y = y + 512) { //creates four more of the shape on the Y axis to fill out the page
  rect(x,y,266,266); 
  }    
}
pop(); //stops code interacting with any other code after this line
}


function repetition() { //the repetition composition
background(255);

//row 1
 for (let x = 0; x < width; x = x + 205) {  // creates 4 more of the shape on the X axis to fill out the page
  if (x % 2 === 0) { // changes the colour of every other shape (black & white rects)
    fill(255);
  } else {
    fill(0);
  }
  noStroke();
  rect(x,0,205,205);

   for (let x = 25; x < width; x = x + 205) {  // creates 3 more of the shape on the X axis to fill out the page
  if (x % 2 === 0) { // changes the colour of every other shape (black & white rects)
    fill(255);
    noStroke();
    rect(x,25,153.75,153.75,100);
  } else {
    fill(0);
    noStroke();
    rect(x,25,153.75,153.75,50);
  }

//row 2
// ( the "if" code didnt wanna work no matter what i did so im using a different and probably harder method on this row. )
  for (let x = 0; x < width; x = x + 256) {
  fill(0);
  rect(x,205,256,205);

  for (let x = 256; x < width; x = x + 512) {
  fill(255);
  rect(x,205,256,205);

  for (let x = 50; x < width; x = x + 512) {
  fill(255);
  rect(x,230,153.75,153.75,100);

  for (let x = 306; x < width; x = x + 512) {
  fill(0);
  rect(x,230,153.75,153.75,50);

//row 3
  for (let x = 0; x < width; x = x + 341) {  // creates 2 more of the shape on the X axis to fill out the page
    if (x % 2 === 0) { // changes the colour of every other shape (black & white rects)
      fill(0);
    } else {
      fill(255);
    }
  noStroke();
  rect(x,410,341,205);

  for (let x = 90; x < width; x = x + 341) {  // creates 2 more of the shape on the X axis to fill out the page
    if (x % 2 === 0) { // changes the colour of every other shape (black & white rects)
    fill(255);
    noStroke();
    rect(x,435,153.75,153.75,100);
  } else {
    fill(0);
    noStroke();
    rect(x,435,153.75,153.75,50);
  }

//row 4
  fill(255);
  rect(0,615,512,205);

  fill(0);
  rect(512,615,512.5,205);

  fill(0);
  rect(175,640,153.75,153.75,50);

  fill(255);
  rect(700,640,153.75,153.75,100);

//row 5

  fill(0);
  rect(435,850,153.75,153.75,50);
  

                }
              }
            }
          }
        }
      }
    }
  }  
}
