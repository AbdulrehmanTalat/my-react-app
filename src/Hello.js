import React from 'react';

import './App.css';
import './Hello.css';
function Hello({firstname,age}) {
  return <div>
      <p>my name is <strong>{firstname}</strong></p>
<p>my age is <strong className="myname">{age}</strong></p>
<p className="txt-color"> a basic mathematical function subtracting 10 from my age and now my age = <strong>{age -5}</strong></p>
<li>this is list 1</li>
<li>this is list 2</li>
<li>this is list 3</li>

  </div>
  
  
}

export default Hello;
