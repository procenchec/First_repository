import TarImg from "./../Pictures/TarakanovImg.jpg";
import Tooltip from "@material-ui/core/Tooltip";
import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button';


function Clicker() {

    const [count, setCount] = useState(0);
    let veb;
    let heart;
    if (count > 0)
        veb = "broke"
    else
        veb = "saved"
    if (count === 1 | count === -1 | count === 0)
        heart = "heart"
    else
        heart = "hearts"
    return (
        <div>

            <p>You {veb} {count} {heart}</p>
            <button onClick={() => setCount(count - 1)}>
                Save
            </button>

            <button onClick={() => setCount(count + 1)}>
                Crush
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
        )
    ;

    return web;
}
