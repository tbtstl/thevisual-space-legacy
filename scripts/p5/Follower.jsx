import React, {Component} from 'react';
import p5 from "p5";

import Ball from './utils/Ball.js';
import Vector from './utils/vector.js';

export default class Follower extends Component {
  componentDidMount() {
    new p5(this.sketch);
  }

  sketch(p) {
    const containerId = 'canvas-container';
    let width = window.innerWidth - 100;

    if (width >= 480){
      width = window.innerWidth/2;
    }

    let height = window.innerHeight - 100;
    width = Math.min(height, 800);
    height = Math.min(width, 800);

    window.addEventListener('resize', function(){
      let newWidth = window.innerWidth - 100;

      if (newWidth >= 480){
        newWidth = window.innerWidth/2;
      }
      let newHeight = window.innerHeight - 100;
      width = Math.min(newWidth, 800);
      height = Math.min(newHeight, 800);

      let canvas = p.createCanvas(width, height);
      canvas.class('fl w-100 pa2 v-mid');
      canvas.parent(containerId);
    }, true);

    const frameRate = 30;
    const initialBall = {
      location: new Vector(0,0),
      velocity: new Vector(0, 0),
      acceleration: new Vector(0, 0),
      width: width,
      height: height
    };

    let b;

    p.setup = () => {
      let canvas = p.createCanvas(width, height);
      p.frameRate(frameRate);
      p.smooth();

      canvas.parent(containerId);

      let location = new Vector(0, 0);
      let velocity = new Vector(0, 0);
      let acceleration = new Vector(0, 0);
      b = new Ball(initialBall, p);
    };

    p.draw = ()=> {
      p.background(255);
      b.update();
      b.display();
    }
  }

  render() {
    return (<div></div>);
  }
};
