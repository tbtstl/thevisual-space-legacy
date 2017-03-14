import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="f-headline lh-solid fl w-90 pa2">The Visual</h1>
        <h5 className="f2 lh-copy fr w-10 pa2">.space</h5>
        <p className="fl w-100 pa2 f5 lh-copy">A collection of web experiments by <a className="light-purple" href="https://tysonbattistella.com" target="_blank">Tyson Battistella</a></p>
      </div>
      );
  }
};
