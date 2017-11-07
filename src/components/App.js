import React, { Component } from 'react';
import '../App.css';

import Header from './Header';
import Timer from './Timer';
import Controls from './Controls';

class App extends Component {
  initialValue = {
    minutes: 25,
    seconds: 0
  }

  state = {
    ...this.initialValue,
    danger: false,
    counting: false,
    customHidden: true
  }

  start() {
    if (this.state.minutes <= 0 && this.state.seconds <= 0) {
      this.reset();
    }
    this.setState({counting: true});
    this.int = window.setInterval(() => {
      if (this.state.seconds === 0) {
        this.setState({
          minutes: this.state.minutes - 1,
          seconds: 59
        });
      } else {
        this.setState({
          seconds: this.state.seconds - 1
        });
      }
      if (this.state.minutes <= 0 && this.state.seconds <= 0) {
        window.clearInterval(this.int);
        this.setState({
          danger: false,
          counting: false
        });
      }
      if (this.state.minutes === 1 && this.state.seconds === 0) {
        this.setState({danger: true});
      }
    }, 1000);
  }

  pause() {
    this.setState({counting: false});
    window.clearInterval(this.int);
  }

  reset() {
    if (!this.state.counting) {
      this.setState(this.initialValue);
    }
  }

  changeMins(e) {
    this.setState({
      minutes: +e.target.value
    });
  }

  changeSecs(e) {
    this.setState({
      seconds: +e.target.value
    });
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
        <Controls
          showCustom={() => {this.setState({customHidden: !this.state.customHidden})}}
          counting={this.state.counting}
          customHidden={this.state.customHidden}
          changeMins={this.changeMins.bind(this)}
          changeSecs={this.changeSecs.bind(this)}
          start={this.start.bind(this)}
          pause={this.pause.bind(this)}
          reset={this.reset.bind(this)}
        />
      </div>
    );
  }
}

export default App;
