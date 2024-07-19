import React from 'react'
import counter  from './counter';
import Tabs from './tabs';
import social from './socialmedia'
import GamePicker from './gamepicker';
import ProgressBar from './progressbar';
import Gallery from './gallery';

function App() {
  return (
    <div>
    <counter/>
    <tabs/>
    <social />
    <gamepicker/>
    <progressbar/>
    </div>  
)
}

export default (counter, Tabs, social, GamePicker, ProgressBar, Gallery)
