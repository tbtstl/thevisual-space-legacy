import React, { Component } from 'react';

export default class ProjectList extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: props.name,
      date: props.date,
      color: props.color || 'dark-gray',
      bg: props.bg,
      onSelected: props.onSelected,
      currentColor: props.currentColor,
      mouseInside: false
    };

    this.clicked = this.clicked.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
  }

  clicked(){
    this.state.onSelected(this.state.name, this.state.color, this.state.bg);
  }

  mouseEnter(){
    this.setState({mouseInside: true});
  }

  mouseExit(){
    this.setState({mouseInside: false});
  }

  render() {
    let nameClass = 'f3 hover-' + this.state.currentColor + ' ' + this.state.color;
    let dateClass = 'pl4 ' + this.state.color;

    return (
      <div className="ma1">
        <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit}><a href="#" onClick={this.clicked} className={nameClass}>{this.state.name}</a>
          {this.state.mouseInside ? (" It's a ball that follows your mouse ¯\\_(ツ)_/¯") : null}
        </div>
        <div className={dateClass}>{this.state.date}</div>
      </div>
    );
  }
};
