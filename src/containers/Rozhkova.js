// import logo from '../logo.svg';

import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> {count} </p>
      <button class="buttonR" onClick={() => setCount(count - 1)}>
        Назад
      </button> &nbsp;

      <button class="buttonR" onClick={() => setCount(count + 1)}>
        Вперед
      </button>
    </div>
  );
}

function App() {
    return (
      <div className="Rozhkova">
          <img src={'https://sun9-75.userapi.com/impf/TVsuS2vjlO4npDxpBsnCJdYejbsbbb9nOFSzmA/YjnBvN5UJJo.jpg?size=1280x1280&quality=96&sign=afef7913392596772899a30d726ba7d4&type=album'} className="App-logo" alt="logo" />
          <br/>
          Рожкова Валерия Анатольевна<br/>
          <br/>
          Студентка 4 курса инженерно-технологического института<br/>
          <br/>
          <div className="rozhok"> Направление подготовки: информационные системы и технологии</div>
          <Example />
      </div>
    );
  }
  
  export default App;
  