import sheglovaLabs from './sheglova';
import kamlevaLabs from './kamleva';
import lobanovLabs from '../constants/Lobanov';
import korneevLabs from '../constants/Korneev';

let i = 0;

export const gen = (name, email, labs) => {
    i++;
    return { name, email, id: i, ...labs }
}

const list = [gen('Камлёва', 'KamljovaNS@studklg.ru', kamlevaLabs), gen('Миронов', ''), gen('Косырев', ''), gen('Артемьев', ''), gen('Проценко', ''), gen('Рожкова', ''), gen('Тараканов', ''), gen('Белявский', ''), gen('Корнеев', '', korneevLabs), gen('Лобанов', '', lobanovLabs), gen('Щеглова', '', sheglovaLabs)];

export default list