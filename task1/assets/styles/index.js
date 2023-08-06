// Задание № 1
let eveningCeaner = 40000;
let vocalTeacher = 22000;
console.log(eveningCeaner + vocalTeacher);

// Задание № 2
let group = 'Владивосток ';
const groupNumber = 2000;
console.log(group+groupNumber);

// Задание № 3
let textedInMessenger = 128; //мин переписывалась в мессенджере
let likePhoto = 254; //мин лайкала фотокарточки
let readVk = 137; //мин читала группы во Вконтакте
let watchedYouTube = 201; //мин смотрела стендапы на YouTube

let minutesOfProcrostination = textedInMessenger + likePhoto + readVk + watchedYouTube; //всего минут прокростинации
let minutesInAnHour = 60; //количество минут в часе
console.log (minutesOfProcrostination/minutesInAnHour);

// Задание №4
console.log(2 ** 5);

// Задание №5
console.log("Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!");

// Задание № 6
const greetings = "Привет, ";
const name = "Кот";
console.log (greetings+name);

// Задание № 7
let time;
time = 34;
let text = "Старт поездки. Осталось минут: ";
console.log(`${text} ${time}`);

time -=15;
text = "Немного сториз в соцсетях. Осталось минут: ";
console.log(`${text} ${time}`);

time -=10;
text = "Немного не новостей, но событий. Осталось минут: ";
console.log(`${text} ${time}`);

time =0;
text = "Осталось минут: ";
console.log(`${text} ${time}`);

text = "Вы приехали. Добро пожаловать в Москву";
console.log(`${text}`);

// Задание № 8
let fahrenheit = 451;
let celsius = (fahrenheit - 32) / 1.8;
console.log(`${fahrenheit} градуса по Фаренгейту - это ${celsius} градуса по Цельсию.`);