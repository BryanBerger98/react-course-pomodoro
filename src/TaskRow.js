import { memo } from "react"
import TimeDisplay from "./TimeDisplay";

const TaskRow = memo(({task, removeTask}) => {

    return(
        <tr>
            <td>
                {new Date(task.startedAt).toLocaleDateString()} at {new Date(task.startedAt).toLocaleTimeString()}
            </td>
            <td>
                {task.title}
            </td>
            <td>
                {task.description}
            </td>
            <td>
                <TimeDisplay time={task.time} />
            </td>
            <td>
                <button type="button" onClick={removeTask}>Delete</button>
            </td>
        </tr>
    )
}, (prevProps, nextProps) => {
    console.info("MEMO");
    if (prevProps.show === nextProps.show) {
        return true;
    }
    return false;
});

export default TaskRow;