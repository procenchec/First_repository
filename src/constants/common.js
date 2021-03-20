let i = 0;

export const gen = (name, email) => {
    i++;
    return { name, email, id: i }
}
const list = [gen('Миронов', ''), gen('Косырев', ''), gen('Артемьев', ''), gen('Проценко', ''), gen('Рожкова', ''), gen('Тараканов', ''), gen('Белявский', '')];
export default list