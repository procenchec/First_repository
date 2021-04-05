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
import tarLabs from './tarakanoff';

let i = 0;

export const gen = (name, email, labs) => {

    i++;
    const newLabs = {...labs};
    const totalLabs = Object.keys(newLabs).length * 8;
    for (var prop in newLabs) {

        if (isValidElement(newLabs[prop]))
            newLabs[prop] = "+";
    }


    return {name, email, id: i, ...newLabs, score: totalLabs}
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
    gen('Никулин', ''),
    gen('Садулаев', ''),
    gen('Овсепян', 'OvsepyanAM@studklg.ru', OvsepyanLabs),
    gen('Быков', ''),
    gen('Микалюк', ''),
    gen('Годонога', ''),
    gen('Туров', ''),
    gen('Леонова', '')];

export default list