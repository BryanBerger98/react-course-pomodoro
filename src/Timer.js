
import { useState } from "react";
import Button from "./Button";
import useTimer from "./hooks/useTimer";
import TimeDisplay from "./TimeDisplay";
import TimerText from "./TimerText";

export default function Timer({saveTime}) {

    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const {time, startTimer, stopTimer} = useTimer(1000);

    const handleStartTimer = () => {
        if (!isTimerStarted) {
            setIsTimerStarted(true);
            startTimer();
        } else {
            saveTime(stopTimer());
            setIsTimerStarted(false);
        }
    }

    return(
        <>
            <TimeDisplay time={time} className='clock-timer' />
            <Button color={isTimerStarted ? 'sandybrown' : 'tomato'} onClick={handleStartTimer}>
                {isTimerStarted ? 'Stop' : 'Start'}
            </Button>
            <TimerText isTimerStarted={isTimerStarted} />
        </>
    )

}