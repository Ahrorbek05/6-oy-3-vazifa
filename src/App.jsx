import React from 'react'
import counter  from './counter';
import Tabs from './tabs';
import social from './socialmedia'

function App() {
  return (
    <div>
    <counter/>
    <tabs/>
    <social />
    </div>  
)
}

export default (counter, Tabs, social)
