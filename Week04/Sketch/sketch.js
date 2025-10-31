function setup() {
    createCanvas(1000, 1000);
    noStroke();
}

function draw() {
  background(25);
    for (let x = 50; x < width; x = x + 100)
    {
      for (let y = 50; y < height; y = y + 100)
    {
        // herringBone(x,y,50);

      fill(0, random(21, 71), random(121, 171));
        noStroke();
          switch(key){
           case "1": 	
	          herringBone(x,y,50);
            console.log("Herring");
            break;
           case "2": 
           	ellipse(x,y,97,97);
           break;
	    }
    }
  }
}

function herringBone(xVal, yVal, unit) {
	strokeWeight(1);
  stroke(255);

	line(xVal, yVal, xVal - unit, yVal + unit);
	line(xVal, yVal, xVal + unit, yVal + unit);
	line(xVal, yVal - unit, xVal - unit, yVal);
	line(xVal, yVal - unit, xVal + unit, yVal);
	line(xVal, yVal - unit, xVal, yVal + unit);
	line(xVal + unit, yVal - unit, xVal + unit, yVal + unit);
}