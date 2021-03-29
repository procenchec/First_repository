import labsArtemev from './artemyev';

let i = 0;

export const gen = (name, email, labsArtemev) => {
    i++;
    return { name, email, ...labsArtemev, id: i }
}

const list = [gen('Камлёва', ''), gen('Миронов', ''), gen('Косырев', ''), gen('Артемьев', 'bogarto@mail.ru', labsArtemev), gen('Проценко', ''), gen('Рожкова', ''), gen('Тараканов', ''), gen('Белявский', ''), gen('Корнеев', ''), gen('Лобанов', ''), gen('Щеглова', '')];


export default list