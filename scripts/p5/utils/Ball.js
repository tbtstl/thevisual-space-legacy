import Vector from './vector.js';

export default class Ball {
  constructor(customAttrs, p){
    const defaultAttrs = {
      location: new Vector(0,0),
      velocity: new Vector(0, 0),
      acceleration: new Vector(0, 0),
      width: 800,
      height: 800
    };
    let attrs = Object.assign({}, defaultAttrs, customAttrs);
    this.location = attrs.location;
    this.velocity = attrs.velocity;
    this.acceleration = attrs.acceleration;
    this.canvasWidth = attrs.width;
    this.canvasHeight = attrs.height;
    this.p = p;
  }

  update() {
    let mouse = new Vector(this.p.mouseX, this.p.mouseY);
    mouse = mouse.subtract(this.location);
    mouse = mouse.setMag(0.1);
    this.acceleration = mouse;

    this.velocity = this.velocity.add(this.acceleration);
    this.location = this.location.add(this.velocity);
    this.velocity = this.velocity.limit(5);

    if((this.location.x > this.canvasWidth) || (this.location.x < 0)){
      this.velocity.x = this.velocity.x * -1;
    }

    if((this.location.y > this.canvasHeight) || (this.location.y < 0)){
      this.velocity.y = this.velocity.y * -1;
    }
  }

  display(){
    this.p.stroke(0);
    this.p.fill(175);
    this.p.ellipse(this.location.x, this.location.y, 48, 48);
  }
}
