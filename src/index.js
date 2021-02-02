import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

//function Greeting(){
 // return <h1>This is nasim and this is my first component</h1>
//}

//const Greeting = () => {
 // return React.createElement('h1', {}, "Hello Nasim how are , I am ok");
//}


//ReactDOM.render(
  //<React.StrictMode>
   // <Greeting />
 // </React.StrictMode>,
 // document.getElementById('root')
//);

const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hello Nasim')
  );
};
ReactDOM.render(<Greeting />, document.getElementById('root'));

