import { Component } from "react";
import './App.css'
import Timer from "./Timer";
import TimersTable from "./TimersTable";
export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
          timers: []
        };
    }

    saveTime(time) {
      const timers = [...this.state.timers, time];
      this.setState({
        timers
      });
    }

    render() {
        return(
          <div className="container">
            <h1>Pomodoro Timer</h1>
            <Timer saveTime={this.saveTime.bind(this)}/>
            {this.state.timers && this.state.timers.length > 0 && <TimersTable timers={this.state.timers} />}
          </div>
        );
    }

}