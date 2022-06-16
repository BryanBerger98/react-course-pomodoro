import TimeDisplay from "./TimeDisplay";

export default function TimersTable({timers, onDisplayTimerDetails}) {

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
                    timers.map((timer, index) => (
                        <tr key={index} onClick={() => onDisplayTimerDetails(timer)}>
                            <td>
                                {new Date(timer.startedAt).toLocaleDateString()} at {new Date(timer.startedAt).toLocaleTimeString()}
                            </td>
                            <td>
                                <TimeDisplay time={timer.time} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )

}