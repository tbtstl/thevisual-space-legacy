import React, {Component} from 'react';
import p5 from "p5";

import Ball from './utils/Ball.js';
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
    let width = window.innerWidth/2;
    let height = window.innerHeight/2;
    let color = '#5E2CA5';
    let stroke = '#9EEBCF';
    let location = new Vector(width, 0);
    let velocity = new Vector(0, 0);
    let acceleration = new Vector(0, 0);

    const ballUpdate = () => {
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

    const ballDisplay = () => {
      p.stroke(stroke);
      p.fill(color);
      p.ellipse(location.x, location.y, 48, 48);
    };

    window.addEventListener('resize', function () {
      width = window.innerWidth/2;
      height = window.innerHeight/2;

      let canvas = p.createCanvas(width, height);
      canvas.class('fl w-100 pa2 v-mid');
      canvas.parent(containerId);
    }, true);

    const initialBall = {
      location: location,
      velocity: velocity,
      acceleration: acceleration,
      width: width,
      height: height,
      color: color,
      stroke: stroke,
      update: ballUpdate,
      display: ballDisplay
    };

    let b;

    p.setup = () => {
      let canvas = p.createCanvas(width, height);
      p.frameRate(frameRate);
      p.smooth();
      canvas.parent(containerId);

      b = new Ball(initialBall, p);
    };

    p.draw = ()=> {
      p.background(255, 0);
      b.update(p);
      b.display();
    }
  }

  render() {
    return (<div className="f2 lh-title">It's a ball that follows your mouse ¯\_(ツ)_/¯</div>);
  }
};
