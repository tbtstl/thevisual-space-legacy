import Vector from './vector.js';

export default class Mover {
  constructor(customAttrs, p){
    const defaultAttrs = {
      location: new Vector(0,0),
      velocity: new Vector(0, 0),
      acceleration: new Vector(0, 0),
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
    this.velocity = this.velocity.limit(5);

    if((this.location.x > this.canvasWidth) || (this.location.x < 0)){
      this.velocity.x = this.velocity.x * -1;
    }

    if((this.location.y > this.canvasHeight) || (this.location.y < 0)){
      this.velocity.y = this.velocity.y * -1;
    }
  }

  defaultDisplay(){
    this.p.stroke(this.stroke);
    this.p.fill(this.color);
    this.p.ellipse(this.location.x, this.location.y, 48, 48);
  }
}
