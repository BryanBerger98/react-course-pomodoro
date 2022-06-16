import { memo } from "react";

const TimerText = memo(({isTimerStarted}) => {

    return (
        <p>
            {isTimerStarted ? 'Le timer est démarré' : 'Le timer est arrêté'}
        </p>
    )

});

export default TimerText;