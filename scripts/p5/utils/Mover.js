import Vector from './vector.js';

export default class Mover {
  constructor(customAttrs, p){
    const defaultAttrs = {
      location: new Vector(0,0),
      velocity: new Vector(0, 0),
      acceleration: new Vector(0, 0),
      mass: 1,
      width: 800,
      height: 800,
      color: 175,
      stroke: 0,
      update: this.defaultUpdate,
      display: this.defaultDisplay
    };
    let attrs = Object.assign({}, defaultAttrs, customAttrs);
    this.location = attrs.location;
    this.velocity = attrs.velocity;
    this.acceleration = attrs.acceleration;
    this.mass = attrs.mass;
    this.canvasWidth = attrs.width;
    this.canvasHeight = attrs.height;
    this.color = attrs.color;
    this.stroke = attrs.stroke;
    this.p = p;
    this.update = attrs.update;
    this.display = attrs.display;
  }

  defaultUpdate() {
    this.velocity = this.velocity.add(this.acceleration);
    this.location = this.location.add(this.velocity);

    if(this.location.x > this.canvasWidth){
      this.location.x = this.canvasWidth;
      this.velocity.x = this.velocity.x * -1;
    } else if (this.location.x < 0){
      this.location.x = 0;
      this.velocity.x = this.velocity.x * -1;
    }

    if(this.location.y > this.canvasHeight){
      this.location.y = this.canvasHeight;
      this.velocity.y = this.velocity.y * -1;
    } else if (this.location.y < 0){
      this.location.y = 0;
      this.velocity.y = this.velocity.y * -1;
    }

    this.acceleration = this.acceleration.multiply(0);
  }

  defaultDisplay(){
    this.p.stroke(this.stroke);
    this.p.fill(this.color);
    this.p.ellipse(this.location.x, this.location.y, this.mass*10, this.mass*10);
  }

  applyForce(f){
    let force = f.divide(this.mass);
    this.acceleration = this.acceleration.add(force);
  }
}
