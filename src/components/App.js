import React, { Component } from 'react';
import '../App.css';

import Header from './Header';
import Timer from './Timer';
import Controls from './Controls';

class App extends Component {
  state = {
    minutes: 25,
    seconds: 0
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Timer {...this.state} />
        </div>
        <div className="row">
          <Controls />
        </div>
      </div>
    );
  }
}

export default App;
