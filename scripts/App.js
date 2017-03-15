import React, {Component} from 'react';

import Header from './Header.jsx';
import ProjectList from './ProjectList.jsx';

require('tachyons');
require('./styles/main.scss');


export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="mw9 center ph3-ns">
          <div className="cf ph2-ns">
            <div className="fl w-100 w-50-ns pa2">
              <div className="pv4">
                <ProjectList></ProjectList>
              </div>
            </div>
            <div className="fl w-100 w-50-ns pa2">
              <div className="pv4">
                <div className="fl w-100 pa2 v-mid" id="canvas-container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // Add your component markup and other subcomponent references here.
    );
  }
}
