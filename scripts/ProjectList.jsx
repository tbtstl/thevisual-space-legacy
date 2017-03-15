import React, { Component } from 'react';
import Follower from './p5/Follower.jsx';
import ProjectItem from './ProjectItem.jsx';

export default class ProjectList extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedProject: '',
      bodyColor: 'near-black',
      bodyBG: 'bg-washed-blue'
    };

    this.projectSelected = this.projectSelected.bind(this);
  }

  projectSelected(name, color, bg) {
    document.body.classList.remove(this.state.bodyColor);
    document.body.classList.remove(this.state.bodyBG);
    void document.body.offsetWidth; // recalculate to trigger animation
    document.body.classList.add(color);
    document.body.classList.add(bg);
    this.setState({selectedProject: name, bodyColor: color, bodyBG: bg});
  }

  render() {
    const currentProj = ()=>{
      switch (this.state.selectedProject){
        case 'Follower':
          return (<Follower/>);
        default:
          return (<div></div>);
      }
    };

    return (
      <div>
        {currentProj()}
        <ProjectItem name="Follower" date="Mar2017" currentColor={this.state.bodyColor} color="purple" bg="bg-light-green" onSelected={this.projectSelected}/>
      </div>
    );
  }
};
