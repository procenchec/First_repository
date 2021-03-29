import sheglovaLabs from './sheglova';

let i = 0;

export const gen = (name, email, labs) => {
    i++;
    return { name, email, id: i, ...labs }
}
const list = [gen('Камлёва', ''), gen('Миронов', ''), gen('Косырев', ''), gen('Артемьев', ''), gen('Проценко', ''), gen('Рожкова', ''), gen('Тараканов', ''), gen('Белявский', ''), gen('Корнеев', ''), gen('Лобанов', ''), gen('Щеглова', '', sheglovaLabs)];
export default list