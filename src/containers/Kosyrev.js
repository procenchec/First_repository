// import logo from '../logo.svg';
import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import { useState } from 'react';

function App() {
  return (
    <div className="Kosyrev">
      <img src={'https://i.gifer.com/2GU.gif'} className="App-logo" alt="logo" />

          Косырев М.А.
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
function Darwerbut({ stateDrawer }) {
  const [state, setState] = stateDrawer || [];
  return (<Drawer anchor={'Right'} open={state} onClose={() => setState(false)}>
    <App />
  </Drawer>
  );
}
export default App;