import React, { useState } from 'react'
import './index.css';

function Counter() {
  const [counterState, setCounterState] = useState(0);

  function handleIncrement() {
    setCounterState(counterState + 1);
  }

  function handleDecrement() {
    if (counterState > 0) {
      setCounterState(counterState - 1);
    }
  }

  return (
    <div className='wrap'>
      <h1>{counterState}</h1>
      <div className="btn">
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
