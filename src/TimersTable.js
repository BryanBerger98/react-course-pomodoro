import { Component } from "react";

export default class TimersTable extends Component {

    render() {
        return(
            <table className="timers-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.timers.map((timer, index) => (
                            <tr key={index}>
                                <td>
                                    {new Date(timer.startDate).toLocaleDateString()} at {new Date(timer.startDate).toLocaleTimeString()}
                                </td>
                                <td>
                                    {timer.timeToDisplay}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }

}