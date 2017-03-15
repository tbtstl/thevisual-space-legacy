import Vector from './vector.js';

export default class Ball {
  constructor(x, y, xSpeed, ySpeed, screenWidth, screenHeight, p){
    this.position = new Vector(x, y);
    this.velocity = new Vector(xSpeed, ySpeed);
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.p = p;
  }

  update() {
    this.position = this.position.add(this.velocity);

    if((this.position.x > this.screenWidth) || (this.position.x < 0)){
      this.velocity.x = this.velocity.x * -1;
    }

    if((this.position.y > this.screenHeight) || (this.position.y < 0)){
      this.velocity.y = this.velocity.y * -1;
    }
  }

  display(){
    this.p.stroke(0);
    this.p.fill(175);
    this.p.ellipse(this.position.x, this.position.y, 48, 48);
  }
}
