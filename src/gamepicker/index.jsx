import React, { useState } from 'react';
import './index.css'

const games = ['CS GO', 'CALL of DUTY', 'PUBG MOBILE', 'MINECRAFT', 'GTA', 'FIFA FC25', 'BLUR', 'MORTAL COMBAT'];

const GamePicker = () => {
  const [RandomGame, setRandomGame] = useState('');
  const pickRandomGame = () => {
  const randomIndex = Math.floor(Math.random() * games.length);
    setRandomGame(games[randomIndex]);
  };

  return (
    <div className='game-picker'>
      <h1>Game Picker</h1>
      <button onClick={pickRandomGame}>Random Game</button>
      {RandomGame && <p>Random Game: {RandomGame}</p>}
    </div>
  );
};

export default GamePicker;
