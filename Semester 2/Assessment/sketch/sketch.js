let mySound;
let amp;
let fft;
let fileInput;

// default song when opening the website
function preload() {
  mySound = loadSound('megadeth.mp3');
}

function togglePlay() {
if (!sound || !loaded) return;
if (sound.isPlaying()) {
sound.pause();
} else {
sound.loop();
}
}

function setup(){
  let cnv = createCanvas(1024, 1024);
  cnv.mousePressed(canvasPressed);
  textAlign(CENTER); 
  textSize(50);
  strokeWeight(10);
  stroke(255);


  amp = new p5.Amplitude();

  fft = new p5.FFT();

  // File input (accept only audio)
  fileInput = createFileInput(handleFile);
  fileInput.position(10, 1034);
}

function handleFile(file) {
  if (file.type === 'audio') {
    // stops the currently playing sound
    if (mySound && mySound.isPlaying()) {
      mySound.stop();
    }

    // load new sound from the uploaded file
    mySound = loadSound(file.data, () => {
      console.log("New file loaded.");

      // reconnect analyzers
      amp.setInput(mySound);
      fft.setInput(mySound);

      mySound.loop(); // automaticlly play the new file
    });
  } else {
    console.log("Not an audio file.");
  }
}

// clicking the page starts the audio / visual code
function draw(){
    background(0,5); // second number = how fast the shape on screen fades after moving / removing itself


      if (!mySound.isPlaying()){
    console.log('not playing');
    text('Click to open  my eye', width/2, height/1.1);
  }

  let spectrum = fft.analyze();
  console.log(spectrum);
  
// defines the energy ranges
  let treble = fft.getEnergy("treble");
  let mid = fft.getEnergy("mid");
  let bass = fft.getEnergy("bass");

// maps the sounds to the correct ranges, mapping the "treble, mid, and bass" in these instances
  let mappedTreble = map(treble, 0, 50, 50, 125); 
  let mappedMid = map(mid, 0, 0, -200, 100); 
  let mappedBass = map(bass, 0, 255, 200, 50);

  let level = amp.getLevel();
  console.log(level);
  
// map the level to correct range
  let mappedLevel = map(level, 0, 0.2, 0, 100);

// will always move point of origin to the middle of the canvas regardless of size
  translate(width / 2, height / 2);

// total number of points to draw
  let noOfPoints = 125;

// for all of the points
  for (let i = 0; i < noOfPoints; i++) {
    rotate(TWO_PI / noOfPoints); // rotate around a circle - default for p5 is radians
    point(mappedLevel, height/4);

  let scaleMidLine = map(mid, 0, 255, 0, width); 


// treble's / big dots shapes
strokeWeight(random(2.5, 50));
stroke(random(0,5), random(71,171), random(7.1, 71));
point(mappedTreble, height/random(5, 7.5));

// mid's / lines shapes
strokeWeight(2);
stroke(225,225,225);
point(mappedMid, height/225);
strokeWeight(2.5);
line(0, height/1, scaleMidLine/-1, height/-1.5);

// bass's / small dots shapes
strokeWeight(16);
stroke(0, random(171,225), random(75, 175));
point(mappedBass, height/random(2.5,12.5));

  }

}

function canvasPressed() {
  if (mySound) {
  mySound.loop();
  }
}