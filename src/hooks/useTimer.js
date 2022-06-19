import { useState } from "react";

export default function useTimer(step = 1000) {

    const [time, setTime] = useState(0);
    const [startedAt, setStartedAt] = useState(null);
    const [timerId, setTimerId] = useState(null);

    const startTimer = () => {
        if (!timerId) {
            setStartedAt(new Date());
            let t = Number(time);
            const newTimerId = setInterval(() => {
                setTime(t++);
            }, step);
            setTimerId(newTimerId);
        } else {
            throw new Error("Timer already launched.");
        }
    }

    const stopTimer = () => {
        if (timerId) {
            clearInterval(timerId);
            setTimerId(null);
            const savedTime = Number(time);
            setTime(0);
            return {
                time: savedTime,
                startedAt
            };
        } else {
            throw new Error("No timer launched.");
        }
    }

    const getTimeAsHms = () => {
        var h = Math.floor(time / 3600);
        var m = Math.floor(time % 3600 / 60);
        var s = Math.floor(time % 3600 % 60);
    
        var hDisplay = h < 10 ? '0' + h : h;
        var mDisplay = m < 10 ? '0' + m : m;
        var sDisplay = s < 10 ? '0' + s : s;
        return `${hDisplay}:${mDisplay}:${sDisplay}`; 
    }

    return {
        time,
        startTimer,
        stopTimer,
        getTimeAsHms
    }

}