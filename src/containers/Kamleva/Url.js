import { Route, Switch } from "react-router-dom";
import Kamleva from '../Kamleva';
import Lab1 from '../Kamleva/Lab1';

export default () => {
    return <Switch>

        <Route path="/Камлёва">
            <Kamleva />
        </Route>

        <Route path="/Камлёва/Lab1">
            <Lab1 />
        </Route>
    </Switch>

}

