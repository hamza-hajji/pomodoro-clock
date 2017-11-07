import React, { Component } from 'react';
import '../App.css';
import mp3_file from '../notification.mp3';

import Header from './Header';
import Timer from './Timer';
import Controls from './Controls';

class App extends Component {
  initialValue = {
    minutes: 25,
    seconds: 0,
    breakMinutes: 5,
    breakSeconds: 0
  }

  state = {
    ...this.initialValue,
    danger: false,
    counting: false,
    customHidden: true,
    sessionTime: true
  }

  start() {
    this.setState({...this.initialValue});
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
        this.playSound();
        window.clearInterval(this.int);
        this.setState({
          danger: false,
          counting: false,
          sessionTime: false
        });
        this.setState({...this.initialValue});
      }
      if (this.state.minutes === 1 && this.state.seconds === 0) {
        this.setState({danger: true});
      }
    }, 1000);
  }

  startBreak() {
    this.setState({...this.initialValue});
    if (this.state.breakMinutes <= 0 && this.state.breakSeconds <= 0) {
      this.reset();
    }
    this.setState({counting: true});
    this.int = window.setInterval(() => {
      if (this.state.breakSeconds === 0) {
        this.setState({
          breakMinutes: this.state.breakMinutes - 1,
          breakSeconds: 59
        });
      } else {
        this.setState({
          breakSeconds: this.state.breakSeconds - 1
        });
      }
      if (this.state.breakMinutes <= 0 && this.state.breakSeconds <= 0) {
        this.playSound();
        window.clearInterval(this.int);
        this.setState({
          danger: false,
          counting: false,
          sessionTime: true
        });
        this.setState({...this.initialValue});
      }
      if (this.state.breakMinutes === 1 && this.state.breakSeconds === 0) {
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
      this.setState({
        ...this.initialValue,
        counting: false,
        sessionTime: true,
        danger: false
      });
    }
  }

  changeMins(e) {
    this.initialValue.minutes = +e.target.value;
    this.setState({...this.initialValue});
  }

  changeSecs(e) {
    this.initialValue.minutes = +e.target.value;
    this.setState({...this.initialValue});
  }

  changeBreakMins(e) {
    this.initialValue.breakMinutes = +e.target.value;
    this.setState({...this.initialValue});
  }

  changeBreakSecs(e) {
    this.initialValue.breakSecs = +e.target.value;
    this.setState({...this.initialValue});
  }


  playSound() {
    const audio = new Audio(mp3_file);
    const playPromise = audio.play();
    if (playPromise !== null){
        playPromise.catch(() => {  })
    }
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
          initialValue={this.initialValue}
          changeMins={this.changeMins.bind(this)}
          changeBreakMins={this.changeBreakMins.bind(this)}
          changeSecs={this.changeSecs.bind(this)}
          changeBreakSecs={this.changeBreakSecs.bind(this)}
          {...this.state}
          start={this.start.bind(this)}
          startBreak={this.startBreak.bind(this)}
          reset={this.reset.bind(this)}
          pause={this.pause.bind(this)}
        />
      </div>
    );
  }
}

export default App;
