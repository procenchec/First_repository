
import labsArtemev from './artemyev';
import sheglovaLabs from './sheglova';
import kamlevaLabs from './kamleva';
import lobanovLabs from '../constants/Lobanov';
import korneevLabs from '../constants/Korneev';
import mironovlabs from './Mironov';
import kosyrevLabs from './kosyrev';
import OvsepyanLabs from './Ovsepyan';
import protsenko from "./protsenko"
import {isValidElement} from 'react';
import rozhkovaLabs from './rozhkova';
import tarLabs from './tarakanoff'
import { results, maxBall } from './results';
import nikulin from "./nikulin";
import turovlab from './turov'
import leonovalab from './leonova';

let i = 0;

export const gen = (name, email, labs) => {

    i++;
    const newLabs = {...labs};

    let score = 0;
    for (const lab in labs)
    {
        let currentLabScore = 0;
        if (results[name])
        {
            currentLabScore = (results[name][lab] * maxBall) / 100;
        }
        // console.log(currentLabScore);
        // console.log(results[lab])
        console.log(name, lab)
        score = score + currentLabScore;
    }
    
    if (results[name])
    {
        score = score + (results[name].bonus)
    }
    for (var prop in newLabs) {

        if (isValidElement(newLabs[prop]))
            newLabs[prop] = "+";
    }

    return {name, email, id: i, ...newLabs, score}
}


const list = [gen('Камлёва', 'KamljovaNS@studklg.ru', kamlevaLabs),
    gen('Миронов', 'MironovDY@studklg.ru', mironovlabs),
    gen('Косырев', 'KosyrevMA@studklg.ru', kosyrevLabs),
    gen('Артемьев', 'bogarto@mail.ru', labsArtemev),
    gen('Проценко', 'procenchec@gmail.com', protsenko),
    gen('Рожкова', 'RozhkovaVAn@studklg.ru', rozhkovaLabs),
    gen('Тараканов', 'TarakanovNI@studklg.ru', tarLabs),
    gen('Белявский', ''),
    gen('Корнеев', '', korneevLabs),
    gen('Лобанов', '', lobanovLabs),
    gen('Щеглова', '', sheglovaLabs),
    gen('Никулин', 'NikulinVV@studklg.ru', nikulin),
    gen('Садулаев', ''),
    gen('Овсепян', 'OvsepyanAM@studklg.ru', OvsepyanLabs),
    gen('Быков', ''),
    gen('Микалюк', ''),
    gen('Годонога', ''),
    gen('Туров', 'TurovSV@studklg.ru', turovlab),
    gen('Леонова', 'LeonovaVD@studklg.ru', leonovalab)];

export default list