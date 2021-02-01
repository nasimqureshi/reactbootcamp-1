import React from 'react';
import ReactDOM from 'react-dom';

function Greeting(){
  return <h1>This is nasim and this is my first component</h1>
}


ReactDOM.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>,
  document.getElementById('root')
);


