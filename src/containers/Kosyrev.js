// import logo from '../logo.svg';
import Drawer from '@material-ui/core/Drawer';
import React from 'react';

function App() {
  return (
    <div className="Kosyrev">
      <img src={'https://i.gifer.com/2GU.gif'} className="App-logo" alt="logo" />

          Косырев М.А.
      <Darwerbut />
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
export default Darwerbut;