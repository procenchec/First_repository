// import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import React from "react";

function App() {
  return (
    <div className="Procenko">
      <img src={'https://i.gifer.com/7hY5.gif'} className="App-logo" alt="logo" />

        Проценко ТО

      <Count>

      </Count>

    </div>
  );
}


function Count() {
  // Объявление новой переменной состояния «count»
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня чтобы увеличить
      </button>

      <button onClick={() => setCount(count - 1)}>
        Нажми на меня чтобы уменьшить
      </button>
    </div>
  );
}
export default App;