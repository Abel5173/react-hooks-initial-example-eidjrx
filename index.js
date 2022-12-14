import React, { useState } from 'react';
import './style.css';
import ReactDOM from 'react-dom';

function Hello() {
  const [name, setName] = useState('Abel');

  return <h1>Hello, {name}.</h1>;
}

const element = <Hello />;
ReactDOM.render(element, document.getElementById('root'));
