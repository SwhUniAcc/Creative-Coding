class Pipe
{
  constructor()
  {
    // Initialse a Pipe Object
    this.x = width-50;
    this.origin = random(height-100);
    this.gap = 200;
    // add a width for your bars
    this.w = 55;
    // add the top of the gap
    this.top = this.origin - (this.gap/2);
    // add the bottom of the gap
    this.bottom = this.origin + (this.gap/2);
    // set a boolean for a hit
    this.highlight = false;
  }

  // Detect if the bird hits the pipe
  hits(bird)
  {
    if (bird.y < this.top || bird.y > this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  // Show the pipe
  show()
  {
    fill(255,0,0);
    // rect(x, y, w, h);
    fill(75,250,125);
    // top bar with this.w and this.top
    rect(this.x, 0, this.w, this.top);
    // bottom bar with this.w and this.bottom 
    rect(this.x, this.bottom, this.w, height);
  }

  // Update the pipe to move to the left
  update()
  {
    this.x --;
  }
}