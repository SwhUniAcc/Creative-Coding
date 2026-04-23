this.osc =  new p5.Oscillator('sinc');
this.osc.amp(0.5);
this.osc.start();

class Shape  {
	
	constructor(startX, startY){
		this.x = startX;
		this.y = startY;
		this.r = 18;

		this.xVel = random(0.1,1);
		this.yVel = random(0.1,1);
	}
	
	update() {
		this.x = this.x + this.xVel;
		this.y = this.y + this.yVel;
		this.z = this.z + this.zVel;
		
	}

display() {
	let red = map(this.x, -100, 100, 0, 255);
	let green = map(this.y, -100, 100, 0, 255);
	let blue = map(this.z, -100, 100, 0, 255);
	ambientMaterial(red, green, blue);

	push();
		translate(this.x, this.y, this.z);
		box(this.r);
	pop();
}

	checkEdges() {
		if (this.x > posEdge-(this.r/2)) {
		  	this.xVel *= -1;
			this.x = posEdge-(this.r/2);
		} else if (this.x < negEdge+(this.r/2)) {
		  	this.xVel *= -1;
			this.x = negEdge+(this.r/2);
		}

		if (this.y > posEdge-(this.r/2)) {
			this.yVel *= -1;
			this.y = posEdge-(this.r/2);
		} else if (this.y < negEdge+(this.r/2)) {
			this.yVel *= -1;
			this.y = negEdge+(this.r/2);
		}
		
	}

}