
import labsArtemev from './artemyev';
import sheglovaLabs from './sheglova';
import kamlevaLabs from './kamleva';
import lobanovLabs from '../constants/Lobanov';
import korneevLabs from '../constants/Korneev';
import mironovlabs from './Mironov';
import kosyrevLabs from './kosyrev';
import protsenko from "./protsenko"
import { isValidElement } from 'react';
import rozhkovaLabs from './rozhkova';

let i = 0;

export const gen = (name, email, labs) => {

    i++;
    const newLabs = { ...labs };
    for (var prop in newLabs) {
        if (isValidElement(newLabs[prop]))
            newLabs[prop] = "+";
    }


    return { name, email, id: i, ...newLabs }
}

const list = [gen('Камлёва', 'KamljovaNS@studklg.ru', kamlevaLabs),
gen('Миронов', 'MironovDY@studklg.ru', mironovlabs),
gen('Косырев', 'KosyrevMA@studklg.ru', kosyrevLabs),
gen('Артемьев', 'bogarto@mail.ru', labsArtemev),
<<<<<<< HEAD
gen('Проценко', 'procenchec@gmail.com', protsenko),
gen('Рожкова', ''),
=======
gen('Проценко', ''), 
gen('Рожкова', 'RozhkovaVAn@studklg.ru', rozhkovaLabs),
>>>>>>> 8bb5b2b5b23ea68aba0ced6816168bb9f964d2bf
gen('Тараканов', ''),
gen('Белявский', ''), gen('Корнеев', '', korneevLabs),
gen('Лобанов', '', lobanovLabs),
gen('Щеглова', '', sheglovaLabs),
gen('Никулин', ''),
gen('Садулаев', ''),
gen('Овсепян', ''),
gen('Быков', ''),
gen('Микалюк', ''),
gen('Годонога', ''),
gen('Туров', ''),
gen('Леонова', '')];

export default list