import TarImg from "./../Pictures/TarakanovImg.jpg";
import Tooltip from "@material-ui/core/Tooltip";
import React, {useState} from 'react';
import styled from "styled-components";
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

            <Tarak>

                <Tarak_h1 title="Грустный кот">Тараканов Н.И.</Tarak_h1>
                <Tooltip arrow classes={{tooltip: "tooltip"}} title="Фото грустного кота">
                    <Tarak>
                        <img src={TarImg} className="App-logo"/>
                    </Tarak>
                </Tooltip>
                <Clicker>

                </Clicker>

            </Tarak>
        )
    ;

    return web;
}

const Tarak = styled.div`
font-family: "SFNS Display", "San Francisco", "Times New Roman", Georgia, Times, serif;
background: linear-gradient(45deg, rgb(113, 35, 129), teal);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;`
;


const Tarak_h1 = styled.div` 
color: pink;
font-style: italic;
text-decoration: underline coral;
margin-top: 0;
text-align: center;`
;
