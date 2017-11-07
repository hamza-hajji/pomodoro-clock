import React, { Component } from 'react';
import '../App.css';

import Header from './Header';
import Timer from './Timer';
import Controls from './Controls';

class App extends Component {
  state = {
    minutes: 5,
    seconds: 0,
    danger: false
  }

  start() {
    let int = window.setInterval(() => {
      if (this.state.seconds === 0) {
        this.setState({
          minutes: this.state.minutes - 1,
          seconds: 60
        });
      } else {
        this.setState({
          seconds: this.state.seconds - 1
        });
      }
      if (this.state.minutes === 0 && this.state.seconds === 0) {
        window.clearInterval(int);
      }
    }, 10);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.setState.minutes === 1) {
      this.setState({danger: true});
    }
  }

  pause() {

  }

  reset() {

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
          <Controls
            start={this.start.bind(this)}
            pause={this.pause.bind(this)}
            reset={this.reset.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
