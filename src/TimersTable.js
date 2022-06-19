import { useState } from "react";
import { useContext } from "react";
import { TasksContext } from "./contexts/Tasks";
import TaskRow from "./TaskRow";

export default function TimersTable() {

    const { tasksData, removeTask } = useContext(TasksContext);
    // const [titleOnly, setTitleOnly] = useState(false);

    return(
        <>
            <h3>{tasksData.count} task{tasksData.count > 0 ? 's' : ''} registered</h3>
            {/* <div>
                <input type="checkbox" id="check" onChange={(e) => setTitleOnly(e.target.checked)} />
                <label htmlFor="check">Task with title only</label>
            </div> */}
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
                        tasksData && tasksData.tasks && tasksData.tasks.map((task, index) => (
                            <TaskRow key={index} task={task} removeTask={() => removeTask(index)} />
                        ))
                    }
                </tbody>
            </table>
            {(!tasksData || !tasksData.tasks || tasksData.tasks.length === 0) && <p style={{textAlign: 'center'}} >No task registered</p>}
        </>
    )

}