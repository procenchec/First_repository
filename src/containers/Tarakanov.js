import TarImg from "./../Pictures/TarakanovImg.jpg";
import Tooltip from "@material-ui/core/Tooltip";
import React, {useState} from 'react';

function Clicker() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count - 1)}>
                Back
            </button>

            <button onClick={() => setCount(count + 1)}>
                Go
            </button>
        </div>
    );
}


export function Photo() {
    const web = (
        <div className="Tarak">
            <h1 title="Грустный кот">Тараканов Н.И.</h1>
            <Tooltip arrow classes={{tooltip: "tooltip"}} title="Фото грустного кота">
                <div>
                    <img src={TarImg} className="App-logo"/>
                </div>
            </Tooltip>
            <Clicker>

            </Clicker>
        </div>
    );
    return web;
}
