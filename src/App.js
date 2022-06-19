import { lazy, Suspense, useContext } from 'react';
import './App.css'
import { ThemeContext } from './contexts/Theme';
import Timer from "./Timer";

const TimersTable = lazy(() => import('./TimersTable').then(module => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(module);
    }, 2000);
  })
}));

export default function App() {

  const {theme, toggleTheme} = useContext(ThemeContext);

  return(
    <div className={`container ${theme}`}>
      <h1>Pomodoro Timer</h1>
      <button type='button' onClick={toggleTheme}>Toggle to {theme === 'light' ? 'dark' : 'light'}</button>
      <Timer />
      <Suspense fallback={'Loading...'}>
        <TimersTable />
      </Suspense>
    </div>
  )

}