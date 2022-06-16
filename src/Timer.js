import { useState, useContext } from "react";
import { TasksContext } from "./contexts/Tasks";
import useTimer from "./hooks/useTimer";
import TaskForm from "./TaskForm";
import TimeDisplay from "./TimeDisplay";
import TimerText from "./TimerText";

const Timer = () => {

    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const {time, startTimer, stopTimer} = useTimer(1000);

    const { addTask } = useContext(TasksContext);

    const handleStartTimer = ({title, description}) => {
        if (!isTimerStarted) {
            setIsTimerStarted(true);
            startTimer();
        } else {
            addTask({
                ...stopTimer(),
                title: title ? title : 'No title',
                description: description ? description : 'No description'
            })
            setIsTimerStarted(false);
        }
    }

    return(
        <>
            <TimeDisplay time={time} className='clock-timer' />
            <TaskForm isTimerStarted={isTimerStarted} onSubmit={handleStartTimer} />
            <TimerText isTimerStarted={isTimerStarted} />
        </>
    )

};
export default Timer;