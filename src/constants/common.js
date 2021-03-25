let i = 0;

export const gen = (name, email) => {
    i++;
    return { name, email, id: i }
}
const list = [gen('Камлёва', ''), gen('Миронов', ''), gen('Косырев', ''), gen('Артемьев', ''), gen('Проценко', ''), gen('Рожкова', ''), gen('Тараканов', ''), gen('Белявский', ''), gen('Щеглова', '')];
export default list