import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const timerRef = useRef();

const onStartButton = () => {
 timerRef.current = setInterval(() => {
    setCount(count => count + 1)
 }, 1000);
}

const onStopButton = () => {
  clearInterval(timerRef.current);
}

const onResetButton = () => {
 clearInterval(timerRef.current);
 setCount(0);
}

  return (
    <>
    <div>
      <h1>StopWatch</h1>
    </div>
    <div>
      <p>Your Stop Watch Timer Count:</p>
    <div>
      <span>{count}</span>
    </div>
      <button onClick={onStartButton}>Start</button>
      <button onClick={onStopButton}>Stop</button>
      <button onClick={onResetButton}>Reset</button>
    </div>
   
   </>
  )
}
export default App;
