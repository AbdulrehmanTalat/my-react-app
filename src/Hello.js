import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Hello.css';
function Hello({firstname}) {
  return <p className="myname">
   copy my name is name : {firstname}.
  </p>
}

export default Hello;