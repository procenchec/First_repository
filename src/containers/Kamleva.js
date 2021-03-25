// import logo from '../logo.svg';

import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> {count} </p>
      <button class="button" onClick={() => setCount(count - 1)}>
        Назад
      </button> &nbsp;

      <button class="button" onClick={() => setCount(count + 1)}>
        Вперед
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="Kamleva">
        <img src={'https://99px.ru/sstorage/86/2015/07/image_861007151003132215733.gif'} className="App-logo" alt="logo" />
            
        Камлёва Н.С. Б-ИСиТ-41

     <Example />
    </div>
  );
}

export default App;