import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name,age}) {
  return <div>
    my name is {name} and my age is {age -10}
    <br></br>
    <Hello firstname={name}></Hello>
  </div>
}

export default App;
