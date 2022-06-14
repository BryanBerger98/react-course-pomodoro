import { Component } from "react";

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h < 10 ? '0' + h : h;
    var mDisplay = m < 10 ? '0' + m : m;
    var sDisplay = s < 10 ? '0' + s : s;
    return `${hDisplay}:${mDisplay}:${sDisplay}`; 
}

export default class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            time: 0,
            timeToDisplay: '00:00:00',
            isTimerStarted: false
        }
    }

    handleStartTimer() {
        if (!this.state.isTimerStarted) {
            this.setState({
                isTimerStarted: true,
                startDate: new Date()
            });
            this.timerId = setInterval(() => {
                this.setState({
                    time: this.state.time + 1,
                    timeToDisplay: secondsToHms(this.state.time + 1)
                });
            }, 1000);
        } else {
            clearInterval(this.timerId);
            this.props.saveTime({
                startDate: this.state.startDate,
                time: this.state.time,
                timeToDisplay: this.state.timeToDisplay
            })
            this.setState({
                isTimerStarted: false,
                startDate: null,
                time: 0,
                timeToDisplay: '00:00:00'
            });
        }
    }

    render() {
        return(
            <>
                <p className="clock-timer">
                    {
                        this.state.timeToDisplay
                    }
                </p>
                <button className={`clock-btn clock-btn-${this.state.isTimerStarted ? 'stop' : 'start'}`} onClick={this.handleStartTimer.bind(this)}>
                    {this.state.isTimerStarted ? 'Stop' : 'Start'}
                </button>
            </>
        )
    }

}