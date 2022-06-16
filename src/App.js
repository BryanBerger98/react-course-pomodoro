import { useContext } from 'react';
import './App.css'
import { ThemeContext } from './contexts/Theme';
import Timer from "./Timer";
import TimersTable from "./TimersTable";

export default function App() {

  const {theme, toggleTheme} = useContext(ThemeContext);

  return(
    <div className={`container ${theme}`}>
      <h1>Pomodoro Timer</h1>
      <button type='button' onClick={toggleTheme}>Toggle to {theme === 'light' ? 'dark' : 'light'}</button>
      <Timer />
      <TimersTable />
    </div>
  )

}