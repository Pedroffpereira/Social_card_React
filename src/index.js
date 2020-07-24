import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Card from './card';
import * as serviceWorker from './serviceWorker';
import react from './img/logo192.png'
import node from './img/node.png'
ReactDOM.render(
  <React.StrictMode>
    <div class="grid">
      <Card title="Study Reactjs" logo={react} description="I started studying react in June on the freecodecamp website and because i like Javascript programming language" />
      <Card title="Study Nodejs" logo={node} description="I started studying Nodejs in April on the freecodecamp website and because i like Backend language" />
      <Card title="Study Expressjs" description="I started studying this library in April on freecodecamp and some videos " />
      
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
