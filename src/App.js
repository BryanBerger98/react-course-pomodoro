import { useState } from 'react';
import './App.css'
import Timer from "./Timer";
import TimersTable from "./TimersTable";

export default function App() {

  const [timers, setTimers] = useState([]);

  const saveTime = (time) => {
    setTimers([...timers, time]);
  }

  const displayTimerDetails = (timer) => {
    alert(`
      ${new Date(timer.startedAt).toLocaleDateString()} at ${new Date(timer.startedAt).toLocaleTimeString()} \n
      ${timer.time}
    `)
  }

  return(
    <div className="container">
      <h1>Pomodoro Timer</h1>
      <Timer saveTime={saveTime}/>
      {timers && timers.length > 0 && <TimersTable timers={timers} onDisplayTimerDetails={displayTimerDetails}/>}
    </div>
  )

}