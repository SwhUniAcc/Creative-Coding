class Bird
{
  constructor()
  {
    this.y = height/2;
    this.x = 64;

    this.gravity = 0.6;
    this.velocity = 0;
    this.lift = -8;
  }

  show() 
  {
    fill(255, 255, 0);
    ellipse(this.x, this.y, 32, 32);
  }
  
  up()
  {
    this.velocity += this.lift;
  }

  update() 
  {
    this.velocity += this.gravity;
    this.y += this.velocity;
    // hits the bottom of the screem
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    // hits the top of the screen
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

    if(this.velocity > 10) {
      this.velocity = 10;
    }
    //console.log(this.velocity, this.gravity);
  }
}
