import React, { useState } from 'react';
import './index.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 7);
    }
};

  const decreaseProgress = () => {
    if (progress > 0) {
      setProgress(progress - 7);
    }
};

  return (
    <div className="progress-bar-container">
      <h1>Progress Bar</h1>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="buttons">
        <button onClick={decreaseProgress}>Decrease</button>
        <button onClick={increaseProgress}>Increase</button>
      </div>
    </div>
);
};

export default ProgressBar;
