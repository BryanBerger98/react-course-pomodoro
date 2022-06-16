import { useState } from "react";
import useTimer from "./hooks/useTimer";
import TaskForm from "./TaskForm";
import TimeDisplay from "./TimeDisplay";
import TimerText from "./TimerText";

export default function Timer({saveTime}) {

    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const {time, startTimer, stopTimer} = useTimer(1000);

    const handleStartTimer = ({title, description}) => {
        if (!isTimerStarted) {
            setIsTimerStarted(true);
            startTimer();
        } else {
            saveTime({
                ...stopTimer(),
                title: title ? title : 'No title',
                description: description ? description : 'No description'
            });
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

}