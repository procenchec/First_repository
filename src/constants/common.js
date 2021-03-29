import kamlevaLabs from './kamleva';

let i = 0;

export const gen = (name, email, labs) => {
    i++;
    return { name, email, id: i, ...labs }
}
const list = [gen('Камлёва', 'KamljovaNS@studklg.ru', kamlevaLabs), gen('Миронов', ''), gen('Косырев', ''), gen('Артемьев', ''), gen('Проценко', ''), gen('Рожкова', ''), gen('Тараканов', ''), gen('Белявский', ''), gen('Корнеев', ''), gen('Лобанов', ''), gen('Щеглова', '')];
export default list