
import labsArtemev from './artemyev';
import sheglovaLabs from './sheglova';
import kamlevaLabs from './kamleva';
import lobanovLabs from '../constants/Lobanov';
import korneevLabs from '../constants/Korneev';
import mironovlabs from './Mironov';
import kosyrevLabs from './kosyrev';
import OvsepyanLabs from './Ovsepyan';
import SonovLabs from './sonov';
import protsenko from "./protsenko"
import {isValidElement} from 'react';
import rozhkovaLabs from './rozhkova';
import tarLabs from './tarakanoff'
import { results, maxBall } from './results';
import nikulin from "./nikulin";
import finaev from './finaev';
import turovlab from './turov';
import leonovalab from './leonova';
import sadullaevlab from './sadullaev';
import deryazhinlab from './deryazhin';



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
            if(results[name][lab] != undefined)
                currentLabScore = (results[name][lab] * maxBall) / 100;
            else
            currentLabScore = 0;
        }
        score = score + currentLabScore;
    }
    
    let bonus = 0;
    if (results[name])
    {
        if(results[name].bonus != undefined)
        {
            score = score + (results[name].bonus)
            bonus = results[name].bonus;
        }
    }

    
    for (var prop in newLabs) {

        if (isValidElement(newLabs[prop]))
            newLabs[prop] = "+";
    }

    
    return {name, email, id: i, ...newLabs, bonus, score}
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
    gen('Финаев', 'finayevAS@studklg.ru', finaev),
    gen('Садуллаев', 'SadullaevAU@studklg.ru', sadullaevlab),
    gen('Овсепян', 'OvsepyanAM@studklg.ru', OvsepyanLabs),
    gen('Быков', ''),
    gen('Деряжин', '' , deryazhinlab),
    gen('Микалюк', ''),
    gen('Годонога', ''),
    gen('Сонов', '', SonovLabs), 
    gen('Туров', 'TurovSV@studklg.ru', turovlab),
    gen('Леонова', 'LeonovaVD@studklg.ru', leonovalab),
];



export default list