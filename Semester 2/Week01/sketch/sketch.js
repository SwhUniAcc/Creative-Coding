let mySound;
let amp;


fft = new p5.FFT();
fft.setInput(mySound);

function preload() {
  mySound = loadSound('megadeth.mp3');
}

function setup(){
  let cnv = createCanvas(1024, 1024);
  cnv.mousePressed(canvasPressed);
  textAlign(CENTER); 
  textSize(50);
  strokeWeight(10);
  stroke(255);

  amp = new p5.Amplitude();
  amp.setInput(mySound);
}

function draw(){
    background(0,50);
        stroke(255);

      if (!mySound.isPlaying()){
    console.log('not playing');
    text('Click here to turn the speaker on', width/2, height/2);
  }

  let spectrum = fft.analyze();
  console.log(spectrum);
  
// defines the energy ranges
  let treble = fft.getEnergy("treble");
  let mid = fft.getEnergy("mid");
  let bass = fft.getEnergy("bass");

// maps the sounds to the correct ranges, mapping the "treble, mid, and bass" in these instances
  let mappedTreble = map(treble, 0, 50, 50, 200); 
  let mappedMid = map(mid, 0, 255, -200, 100); 
  let mappedBass = map(bass, 0, 255, -200, 50);

  let level = amp.getLevel();
  console.log(level);
  
// map the level to correct range
  let mappedLevel = map(level, 0, 0.2, 0, 100);

// will always move point of origin to the middle of the canvas regardless of size
  translate(width / 2, height / 2);

// total number of points to draw
  let noOfPoints = 140;

// for all of the points
  for (let i = 0; i < noOfPoints; i++) {
    rotate(TWO_PI / noOfPoints); // rotate around a circle - default for p5 is radians
    point(mappedLevel, height/4);

  let scaleMidLine = map(mid, 0, 255, 0, width); 


// treble's shapes
strokeWeight(12);
stroke(0,71,171);
point(mappedTreble, height/12);

// mid's shapes
strokeWeight(6);
stroke(0,0,255);
point(mappedMid, height/2.25);
strokeWeight(5);
line(0, height/2.25, scaleMidLine, height);

// bass's shapes
strokeWeight(6);
stroke(255);
point(mappedBass, height/10);

  }

}

function canvasPressed() {
  mySound.play();
  mySound.loop();
}