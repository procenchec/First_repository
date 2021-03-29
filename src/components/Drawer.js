import Drawer from '@material-ui/core/Drawer';
import React from 'react';

function Darwerbut({ stateDrawer, ...rest }) {
    const [state, setState] = stateDrawer || [];
    return (<Drawer anchor={'Right'} open={state} onClose={() => setState(false)} {...rest}/>

    );
}

export default Darwerbut