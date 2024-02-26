import React, { useState } from 'react';
import './index.css';

function App() {
  const [col, setCol] = useState('pink');

  
  const changeBodyColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div>
      <div className="box">
        <button style={{ backgroundColor: 'red' }} onClick={() => {setCol('red'); changeBodyColor('red');}}>Red</button>
        <button style={{ backgroundColor: 'blue' }} onClick={() => {setCol('blue'); changeBodyColor('blue');}}>Blue</button>
        <button style={{ backgroundColor: 'black' }} onClick={() => {setCol('black'); changeBodyColor('black');}}>Black</button>
        <button style={{ backgroundColor: 'pink' }} onClick={() => {setCol('pink'); changeBodyColor('pink');}}>Pink</button>
        <button style={{ backgroundColor: 'orange' }} onClick={() => {setCol('orange'); changeBodyColor('orange');}}>Orange</button>
        <button style={{ backgroundColor: 'white' }} onClick={() => {setCol('white'); changeBodyColor('white');}}>White</button>
      </div>
    </div>
  );
}

export default App;
