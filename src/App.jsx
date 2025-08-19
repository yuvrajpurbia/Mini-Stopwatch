import { useRef, useState } from 'react'
import './App.css'

function App() {

  // State variable to keep track of elapsed time in seconds
  const [time, setTime] = useState(0);

  // useRef stores the interval ID so we can start/stop it later
  const timeRef = useRef(null);

  // Function to start the timer
  function startTimer() {
    // Assign interval ID to timeRef.current
    timeRef.current = setInterval(() => {
      // Update time every second by adding +1
      setTime(time => time + 1);
    }, 1000);
  } 

  // Function to stop the timer
  function stopTimer() {
    // Clear the interval using the stored interval ID
    clearInterval(timeRef.current);
    // Reset ref value back to null
    timeRef.current = null;
  } 
  
  // Function to reset the timer
  function resetTimer() {
    // Stop the timer first
    stopTimer();
    // Reset time value back to 0
    setTime(0);
  }

  return (
   <div>
    {/* Display current stopwatch time */}
    <h1> Stopwatch: {time} Seconds</h1>
    <br/>

    {/* Start Button */}
    <button onClick={startTimer}>
      Start 
    </button>
    <br/><br/>
   
    {/* Stop Button */}
    <button onClick={stopTimer}>
      Stop  
    </button>
    <br/><br/>

    {/* Reset Button */}
    <button onClick={resetTimer}>
      Reset   
    </button>
    <br/><br/>
   </div>
  )
}

export default App
