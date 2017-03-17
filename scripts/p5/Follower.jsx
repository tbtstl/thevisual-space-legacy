import React, {Component} from 'react';
import p5 from "p5";

import Mover from './utils/Mover.js';
import Vector from './utils/vector.js';

export default class Follower extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    new p5(this.sketch);
  }


  sketch(p) {
    const containerId = 'canvas-container';

    const frameRate = 60;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let color = '#5E2CA5';
    let stroke = '#9EEBCF';
    let location = new Vector(width, 0);
    let velocity = new Vector(0, 0);
    let acceleration = new Vector(0, 0);

    const moverUpdate = () => {
      let mouse = new Vector(p.mouseX, p.mouseY);
      mouse = mouse.subtract(location);
      mouse = mouse.setMag(0.1);
      acceleration = mouse;

      velocity = velocity.add(acceleration);
      location = location.add(velocity);
      velocity = velocity.limit(5);

      if ((location.x > width) || (location.x < 0)) {
        velocity.x = velocity.x * -1;
      }

      if ((location.y > height) || (location.y < 0)) {
        velocity.y = velocity.y * -1;
      }
    };

    const moverDisplay = () => {
      p.stroke(stroke);
      p.fill(color);
      p.ellipse(location.x, location.y, 48, 48);
    };

    window.addEventListener('resize', function () {
      width = window.innerWidth;
      height = window.innerHeight;

      let canvas = p.createCanvas(width, height);
      canvas.parent(containerId);
    }, true);

    const initialMover = {
      location: location,
      velocity: velocity,
      acceleration: acceleration,
      width: width,
      height: height,
      color: color,
      stroke: stroke,
      update: moverUpdate,
      display: moverDisplay
    };

    let m;

    p.setup = () => {
      let canvas = p.createCanvas(width, height);
      p.frameRate(frameRate);
      p.smooth();
      canvas.parent(containerId);

      m = new Mover(initialMover, p);
    };

    p.draw = ()=> {
      p.background(255, 0);
      m.update(p);
      m.display();
    }
  }

  render() {
    return (<div></div>);
  }
};
