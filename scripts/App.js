import React, { Component } from 'react';

import Header from './Header.jsx';
import ProjectList from './ProjectList.jsx';

require('tachyons');
require('./styles/main.scss');


export default class App extends Component {
  render() {
    return (
      <div>
      <Header></Header>
      <ProjectList></ProjectList>
      </div>
      // Add your component markup and other subcomponent references here.
    );
  }
}
