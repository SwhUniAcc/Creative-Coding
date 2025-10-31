let pressed = false;
let myGreeting = "Hey";
let yourResponse = "Hello";
let numOne = 1;
let numTwo = 2;
let numbers = ["One", "Two", "Three"]
let words = ["Every", "girl", "deserves", "to", "take", "part", "in", "creating", "the", "technology", "that", "will", "change", "our world"];
let xVal = 25;
let yVal = 25;
let myColours = [];
let xPos = 0;
let yPos = 0;

function setup() {
  createCanvas(1024, 400);
  background(color(25));
  noLoop();

// add colours to text
for (let i = 0; i < 256; i++) {
  myColours.push(i);
  console.log(myColours);
}

console.log(myGreeting); // "Hey"
console.log(yourResponse); // "Hello"

// displays numbers in the console
console.log(numOne);
console.log(numTwo);

// adds numbers in the console
console.log(numOne + numTwo); // 3

// Prints entire array in the console
console.log(numbers);

// types words in the array out seperatly in the console
console.log(numbers[0]); // "One"
console.log(numbers[1]); // "Two"
console.log(numbers[2]); // "Three"

console.log(words);

// tells me the last word in the array in the console
console.log(words[words.length-1]); // "our world"

// adds words to array
words.push("and", "change", "who", "runs", "it")
console.log(words);
}

function draw() {
  noStroke();
  for (let i = 0; i < myColours.length; i++) {
    myColours = shuffle(myColours);
    fill(myColours[i], 0, 150);
    rect(xPos, 0, width/256, height);
    xPos = xPos+(width/256);
  }

// types every word from the array out on the canvas
for (var i = 0; i <words.length; i++) {
  console.log(words[i]);
   textAlign(CENTER);
   text(words[i], xVal,yVal);
     xVal += 25
     yVal += 20
  }
}
