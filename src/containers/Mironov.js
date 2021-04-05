// import logo from '../logo.svg';
import '../App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="Mironov">
        <img src={'https://i.gifer.com/y4.gif'} className="App-logo" alt="logo" />
            
        Миронов_Д.Ю
        <Clicker />
    </div>
  );
}
function Clicker() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>
        Next
      </button>
      <button onClick={() => setCount(count - 1)}>
        Back
      </button>
    </div>
  );
}
export default App;
