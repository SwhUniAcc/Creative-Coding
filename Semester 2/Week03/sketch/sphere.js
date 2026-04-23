class Sphere extends Shape  {
	
	constructor(startX, startY, startZ){
        super(startX, startY, startZ);
		this.x = startX;
		this.y = startY;
        this.z = startZ;
		this.r = 18;

		this.xVel = random(0.1,1, WEBGL);
		this.yVel = random(0.1,1, WEBGL);
        this.zVel = random(0.1,1, WEBGL);

        this.osc =  new p5.Oscillator('sinc');
        this.osc.amp(0.5);
        this.osc.start();
	}
	
	update() {
		this.x += random(-this.xVel, this.xVel)
		this.y += random(-this.yVel, this.yVel)
        this.z += random(-this.zVel, this.zVel)

    // change oscillator frequency based x axis
    let freq = map(this.x, -100, 100, 440, 660);
    this.osc.freq(freq);
		
    // change oscillator amplitude based y axis
    let amp = map(this.y, -100, 100, 0.2, 0.1);
    this.osc.amp(amp);

    // change oscillator panning based z axis
    let pan = map(this.z, -100, 100, 0.9, 0.1);
    this.osc.pan(pan);
        
    }

display() {
	let red = map(this.x, -100, 100, 0, 255);
	let green = map(this.y, -100, 100, 0, 255);
	let blue = map(this.z, -100, 100, 0, 255);
	ambientMaterial(red, green, blue);

	push();
		translate(this.x, this.y, this.z);
		sphere(this.r);
	pop();
}

	checkEdges() {
        super.checkEdges();
		
	}

}