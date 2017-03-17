import React, {Component} from 'react';
import p5 from "p5";

import Mover from './utils/Mover.js';
import Vector from './utils/vector.js';
import Attractor from './utils/Attractor.js';

export default class AttractedBubbles extends Component {
  componentDidMount() {
    new p5(this.sketch);
  }


  sketch(p) {
    const containerId = 'canvas-container';

    const frameRate = 60;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let color = '#FFDFDF';
    let stroke = '#00449E';
    let location = new Vector(width / 2, height / 2);
    let velocity = new Vector(0, 0);
    let acceleration = new Vector(0, 0);

    window.addEventListener('resize', function () {
      width = window.innerWidth;
      height = window.innerHeight;

      let canvas = p.createCanvas(width, height);
      canvas.parent(containerId);
    }, true);

    let initialMover = {
      location: location,
      velocity: velocity,
      acceleration: acceleration,
      width: width,
      height: height,
      color: color,
      stroke: stroke
    };
    // make the attractor the same color as the background
    let attractorAttrs = {
      stroke: 'rgba(0,0,0,0)',
      color: 'rgba(0,0,0,0)',
      mass: 10
    };

    let movers = [];
    let numMovers = 100;

    let attractor;

    p.mousePressed = ()=> {
      if(attractor != undefined){
        attractorAttrs.location = new Vector(p.mouseX, p.mouseY);
        attractor = new Attractor(p, attractorAttrs);
      }
    };

    p.setup = () => {
      let canvas = p.createCanvas(width, height);
      p.frameRate(frameRate);
      p.smooth();
      canvas.parent(containerId);
      for (let i = 0; i < numMovers; i++) {
        initialMover.mass = Math.floor((Math.random() * 5) + 1);
        let x = (Math.random() * (window.innerWidth)) + 1;
        let y = (Math.random() * (window.innerHeight)) + 1;
        initialMover.location = new Vector(x, y);
        movers.push(new Mover(initialMover, p));
      }

      attractor = new Attractor(p, attractorAttrs);

    };

    p.draw = ()=> {
      p.clear();

      movers.forEach((m) => {
        let attractionForce = attractor.attract(m);
        // console.log(attractionForce);
        m.applyForce(attractionForce);
        m.update();
        m.display();
      });

      if(attractor !== undefined){
        attractor.display();
      }
    }
  }

  render() {
    return (<div></div>);
  }
};
