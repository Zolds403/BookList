//jshint esversion: 7
import React from 'react';
import ReactDom from 'react-dom';


function Greeting() {
  return (<div>
    <h4>this is Zsone and this is my first component</h4>
  </div>);
}


ReactDom.render(<Greeting/>,document.getElementById('root'));