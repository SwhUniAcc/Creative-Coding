
let img_1;

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = './tm-my-image-model/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  img_1 = loadImage('Arrow.png');
}

function setup() {
  console.log("running setup");
  videoWidth = 512;  // if i remove this the code no longer works
  videoHeight = 512; // if i remove this the code no longer works
  createCanvas(1024, 1024);
  // Create the video
  video = createCapture(VIDEO);
  video.size(videoWidth, videoHeight);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  imageMode(CENTER); /// POSITION IMAGE IN THE CENTER
  image(flippedVideo, 512, 512);
  imageMode(CENTER); /// POSITION IMAGE IN THE CENTER
  image(img_1, 2000, 2000, 256, 256); // LOAD IMAGE

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);

  if (label == "Up") {
  rotate(PI / 180 * -90);
  image(img_1, -125, 512, 250, 250); 
}
else if (label == "Down") {
  rotate(PI / 180 * 90);
  image(img_1, 900, -512, 250, 250); 
}
else if (label == "Left") {
  rotate(PI / 90 * 180);
  image(img_1, 900, 512, 250, 250); 
}
else if (label == "Right") {
  scale(-1,1);
  image(img_1, -125, 512, 250, 250); 
}
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  console.log(results);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}

