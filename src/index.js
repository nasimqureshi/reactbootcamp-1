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

//const Greeting = () => {
  //return React.createElement(
    //'div',
    //{},
    //React.createElement('h1', {}, 'Hello Nasim')
 // );
//};
//ReactDOM.render(<Greeting />, document.getElementById('root'));

//const Greeting = () => {
  //return(
    //<div>
      //<Person />
      //<Message />
    //</div>
  //);
//};
//const Person = () => <h2>Nasim Qureshi</h2>
//const Message = () => {
  //return <p>This is nasim's message</p>
//}
//ReactDOM.render(<Greeting />, document.getElementById('root'));


function BookList () {
  return (
  <section>
    <Book />
  </section>
  )
}

const Book = () => {
return (
  <article>
  <Image />
  <Title />
  </article>
  
)
}
const Image =() => (
<Image src="https://img.thriftbooks.com/api/images/s/9fbc5bad7fca23370dfda95285763876796aac20.jpg" alt="" /> 
)
const Title = () => (
  <h1>Llama Llama I Love YouLlama Llama </h1>
)
  
ReactDOM.render(<BookList />, document.getElementById('root'));
