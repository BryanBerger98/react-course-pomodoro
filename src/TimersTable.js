import { useContext } from "react";
import { TasksContext } from "./contexts/Tasks";
import TimeDisplay from "./TimeDisplay";

export default function TimersTable() {

    const { tasksData, removeTask } = useContext(TasksContext);

    return(
        <>
            <h3>{tasksData.count} task{tasksData.count > 0 ? 's' : ''} registered</h3>
            <table className="timers-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasksData && tasksData.tasks && tasksData.tasks.map((timer, index) => (
                            <tr key={index}>
                                <td>
                                    {new Date(timer.startedAt).toLocaleDateString()} at {new Date(timer.startedAt).toLocaleTimeString()}
                                </td>
                                <td>
                                    {timer.title}
                                </td>
                                <td>
                                    {timer.description}
                                </td>
                                <td>
                                    <TimeDisplay time={timer.time} />
                                </td>
                                <td>
                                    <button type="button" onClick={() => removeTask(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {(!tasksData || !tasksData.tasks || tasksData.tasks.length === 0) && <p style={{textAlign: 'center'}} >No task registered</p>}
        </>
    )

}