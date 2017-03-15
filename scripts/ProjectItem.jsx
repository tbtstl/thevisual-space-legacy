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
      currentColor: props.currentColor
    };

    this.clicked = this.clicked.bind(this);
  }

  clicked(){
    this.state.onSelected(this.state.name, this.state.color, this.state.bg);
  }

  render() {
    let nameClass = 'f3 hover-' + this.state.currentColor + ' ' + this.state.color;
    let dateClass = 'pl4 ' + this.state.color;

    return (
      <div className="ma1">
        <div><a href="#" onClick={this.clicked} className={nameClass}>{this.state.name}</a></div>
        <div className={dateClass}>{this.state.date}</div>
      </div>
    );
  }
};
