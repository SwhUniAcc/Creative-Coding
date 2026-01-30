function setup() {
createCanvas(1024, 1024);
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

function draw() {
  // put drawing code here
}
