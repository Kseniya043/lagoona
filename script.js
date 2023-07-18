// console.log(555) вывод в консоль
// мои наброски
/*
document.addEventListener('DOMContentLoaded', function (){



    let userName = 'Ксюша';
    console.log(userName);
    const header = document.querySelector('header');
    console.log(header);
    header.classList.add('dark');
    console.log(header);
    header.classList.remove('dark');
    console.log(header);
    const btn = document.querySelector('.header__top_account');
    btn.addEventListener('click', function (){
        if (header.classList.contains('dark')){
            header.classList.remove('dark');
        } else {
            header.classList.add('dark');
        }
    })
})
 */
document.addEventListener('DOMContentLoaded', function (){
    let slideIndex = 0;
    showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n); // slideIndex = slideIndex + n
    }
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    prev.addEventListener('click', ()=>{
        plusSlides(-1);
    })
    next.addEventListener('click', ()=>{
        plusSlides(1);
    })
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length - 1) {
            slideIndex = 0
        }
        if (n < 0) {
            slideIndex = slides.length - 1
        }
        for (i = 0; i < slides.length; i++) {
            if (slideIndex !== i){
                slides[i].style.display = "none";
            }
            else {
                slides[i].style.display = "block";
            }
        }
    }
})

// =============== 1 переменные =====

// let userName = 'Марк';
  // console.log(userName)


// =============== 1.1 Типы переменные =====

// let - переменная может менять значение по ходу работы программы
// const - переменная не может менять значение


// =============== 1.2 Типы данных =====

// let userName = 'Марк'; - т.к есть кавычки - это строка (слово, предложение, любой длинной )
// let age = 30; - число, пишется без кавычек
// let isMarried = false; логическое значение true/false
    // Динамическая типизация - нет ее. Можно у переменной менять тип данных, к примеру: была строка, потом число, а потом логическое значение ( не злоупотреблять )

// Значение null
// "Ничего" "пусто" "или значение неизвестно"
// let age = 32; age = null;

// Значение undefined
// "Значение не было присвоено"
// let userName;
// в консоли будет undefined

// Оператор typeof - определяет тип переменной
// let userName = 'Bob'; console.log{typeof username);

// Объекты
// Массивы

// Bigint - встроенный объек позволяющий создавать большие числа
// console.log(92020202992929292020n);

// Symbol - уникальное примитивное значение. позволяет добавлять уникальное свойство к объекту, с уверенностью что он не перезапишет никакое другое свойство.


// =============== 2 Операторы сравнения и условия =====

// <,>,<=,>=, ==(нестрогое стравнение), ===(строгое сравнение), !=(нестрогое неравенство), !==(строгое неравенство)
// console.log(10 > 5); - true; console.log(20 > 80); - false
// let result = 10 > 5; - true
// console.log('5' == 5); - true console.log ( '5' === 5) - false - т.к. сравнивается не только число, но и тип данных

// if (условие) {
//          код который будет выполнен если условие верно
// } else {
//          код который будет выполнен если условие НЕ верно
// }
// const time = 20;
// if (time < 12) {
//     console.log('Доброе утро')
// }
// else if (time >= 12 && time < 18) {
//     console.log('Добрый день')
// }
// else {
//     console.log('Добрый вечер')
// }

// Логические операторы: && - логическое И; || - логическое ИЛИ; !true - логическое НЕ;


// =============== 3 Тернарный оператор =====

// Коротная форма написание кода
// (условие) ? (условие верно) : (условие не верно);
// if (10 < 12) {
//    console.log('Условие верно');
// } else {
//    console.log('Условие НЕ верно')
// }
// 10 < 12 ? console.log('Условие верно') : console.log('Условие НЕ верно');

// let greeting;
// let time = 10;
// if (time < 12) {
// greeting = 'Доброе утро';
// } else {
// greeting = 'Добрый день';
// }
// console.log(greeting);
// let time = 10;
// greeting = time < 12 ? 'Доброе утро' : 'Добрый день';
// console.log(greeting);


//=============== 4 Конкатенация строк и шаблонные строки =====

// console.log('Привет, Миша! Как твои дела?');
// let greeting = 'Привет, Миша!';
// let howAreYou = ' Как твои дела?';
// let sayHi = greeting + howAreYou;
// console.log(sayHi);

// конкатенация - сложение строк
// const userName = 'Misha';
// console.log('Привет,' + userName + '! Как твои дела?');

// Шаблонные строки
// const userName = 'Misha';
// console.log(`Привет, ${userName}! Как твои дела?`);


//=============== 5 Функции =====
// Объявление и вызов фунций
// DRY(не повторяй себя)
// function sayHi() {
    // console.log('Привет, дорогой пользователь!');
// }
// sayHi(); - можно вызывать сколько хочется

// function declaration - можно вызывать функцию до того момента когда она объявлена
// function sayHi() {
//     alert('Привет');
// }

// function expression (в любую переменную) -
// let sayHi = function () {
//     alert('Привет')
// }


//=============== 5.1 Параметры и аргументы для функции =====
// const userName= 'Mark';
// console.log(`Привет, ${userName}! Как твои дела?`);

// function sayHi(name) {
// console.log(`Привет, $name}! Как твои дела?`);
// }
// sayHi('Юрий');
// sayHi('Павел');

// return - функция возвращает какое либо значение ( после return ничего не сработает)
// function summ(a, b) {
//     const result = a + b;
//      return result;
// }
// let res = summ(10,15);
// console.log(res);


//=============== 5.2 Функция как аргумент =====
// function summ(a, b) {
//     return a + b;
// }
// console.log(summ(a, b));
// const result = summ(summ(15,15), summ(20,20));
// console.log(result);


//=============== 5.3 Самовызывающаяся функция IIFE =====( старый стандарт)

// (function sayHi () {
//     console.log('Привет, дорогой пользователь');
// })(); - можно без sayHI
// (function (a, b) {
//     console.log(a + b);
// }) (10, 15);


//=============== 5.4 Стрелочные функции =====
// function sayHi(name) {
//     console.log(`Привет, ${name}! Как твои дела?`);
// }
// sayHi('Mark');
// const arrSayHi = (name) => {
//     console.log(`Привет, ${name}! Как твои дела?`);
// }
// arrSayHi('Mark');


//=============== 6 Массивы ===== - это коллекция чего либо []. Можно использовать цифры, логические значения, строки, другие массивы- но лучше не использовать другие массивы

// const autoBrand1= "Audi";
// const autoBrand2= "Mersedes"
// const autoBrands = ['Audi', 'Mersedes']; - начинается индекс с 0, ауди - 0, мерседес , 1. Если все выводим, пишем просто консоль
// console.log(autoBrands[1]) - выводится только 1 элемент под индексом 1
// console.log(autoBrands.lenght); - узнаем сколько всего элементов в массиве, у меня 2


//=============== 6.1 Методы массивов =====
// .push(), .pop(), shift(), unshift(), .splice(), .slice(), .forEach(), .indexOf(), .includes()  и т.д
/*
arr.push(items) - добавить элемент в конец массива
arr.pop() - удалить элемент из конца массива
arr.shift() - удалить элемент из начала массива
arr.unshift(...items) - добавить элемент в начало массива
arr.splice([start]], [deleteCount, newElements])
 */
// const autoBrands = ['Audi', 'Mersedes', 'bmw', 'mazda'];
// autoBrands.push ('Nissan');
// console.log(autoBrands);
// autoBrands.splice(2 1)- начиная со 2 элемента, удалить 1 элемент, т.е бмв


//=============== 7 Циклы ===== 1. если нам надо выполнить операцию несколько раз. 2. для обхода массивов
// i - счетчик
// for (let i = 0; i < 10; i ++){
// console.log(i)
//}


//=============== 8 обход массива циклом for =====
// const autoBrands = ['Audi', 'Mersedes'];
// console.log(autoBrands[0])
// console.log(autoBrands[1])
// вместо того что выше
// for (let i = 0; i < autoBrands.lenght; i ++){
// console.log(autoBrands[i])
// console.log(i)


//=============== 9 обход массива циклом for ( of ) =====  рекомендуют

// const autoBrands = ['Audi', 'Mersedes'];
// for(let item of autoBrands ) {
    // console.log(item)
//}


//=============== 10 обход массива циклом forEach() =====

// const autoBrands = ['Audi', 'Mersedes'];

// 1 метод
// autoBrands.forEach(function(item, index){
// console.log(`${item}) => ${index}`);
// })

// 2 метод
// autoBrands.forEach(printBrand);
// function printBrand (brand, i) {
//     console.log(`${brand} => ${i}`) ;
// }

//  метод
// autoBrands.forEach((brand, i) => console.log(`${brand} => ${i}`));
// }


//=============== 11 Объекты =====
// свойства объктов

/* let age = 30;
let isMarried = false;

const person = {
    userName: 'Марк',
    age: 30,
    isMarried: false
    profession: 'Designer'
}
console.log(person);
console.log(person.userName);
console.log(person['age']);

let propertyName = 'profession';
console.log(person[propertyName]);

person.profession = 'JS developer';
delete person.age;
*/


//=============== 12 Методы в объектах =====

/*const person = {
    userName: 'Марк',
    age: 30,
    isMarried: false,
    sayHi: function (name) {
        console.log(`hi, ${name}!`)
    }
}
person.sayHi()
 */


//=============== 13 Клбчевое слово this =====

/* const person = {
    userName: 'Марк',
    age: 30,
    isMarried: false,
    sayHi: function (name) {
        console.log(this);
        console.log(`hi, ${name}! Меня зовут ${this.userName}.`);
    }
}
person.sayHi('Алиса')
 */


//=============== 14 Объекты обход циклом for in =====
/*
const person = {
    userName: 'Марк',
    age: 30,
    isMarried: false,
    sayHi: function (name) {
        console.log(this);
        console.log(`hi, ${name}! Меня зовут ${this.userName}.`);
    }
}
for (let key in person) {
    console.log(key);
    console.log(key, ':', person[key]);
}
 */


//=============== 15 Нюанс const и изменениям объекта и массива =====

/* const person = {
    userName: 'Марк',
    age: 30,
    isMarried: false,
}
person.proff = 'Designer';

Ошибка! переопределние ссылки на новый объект
person = {
    userName: 'Mark'
};
 */


//=============== 16 Классы. Конструкторы объектов =====
// Представим ситуацию когда нам надо описать несколько одинаковых объектов

/* const person1 = {
    userName: 'Марк',
    age: 30,
    isMarried: false,
    sayHi: function (name) {
        console.log(this);
        console.log(`hi, ${name}! Меня зовут ${this.userName}.`);
    }
}
const person2 = {
    userName: 'Павел',
    age: 31,
    isMarried: true,
    sayHi: function (name) {
        console.log(this);
        console.log(`hi, ${name}! Меня зовут ${this.userName}.`);
    }
}
используем классы чтобы записать что выше
опишем классБ это как чертеж для всех будущих объектов person которые ббудут создаваться на его основе
 */
/* class Person {
    constructor (userName, age, isMarred) {
        this.userName = userName;
        this.age = age;
        this.isMarried = isMarried;
    }

    sayHi(name) {
        console.log(`hi, ${name}! Меня зовут ${this.userName}.`);
    }
}
const person1 = new Person ('Maрк', 30, false);
const person2 = new Person ('Павел', 31, true);
person1.sayHi('Павел');
 */


//=============== Выбор DOM элемента  =====

// как выбрать 1 элемент по селектору
// пример что в html есть заголовок и текст , а в css есть стили для класса

// document.querySelector('selector'); - для браузераб позволяет выбирать элемент
/*document.querySelector('h1');
document.querySelector('.header');
document.querySelector('.heade.header');
 */
// document.querySelector('h1').classList.add('red'); - вводим в консоли этот код, возвращает только 1й найденный
/* const heading1 = document.querySelector('h1');
heading1.classList.add('red'); - red это класс
 */

// выбор коллекции элемента - все найдутся
/* const headings = document.querySelectorAll('h2');

for (let item of headings) {
    console.log(item);
    item.classList.add('red-text');
}
 */
/*
1 вариант
const paragraphs = document.querySelectorAll('p');
for (let p of paragraphs) {
    p.classList.add('green-text');
}
2 вариант
paragraphs.forEach(function (p) {
    p.classList.add('green-text');
})
 */
/* cтарые методы, но они все еще используются:
document.getElementsByClassName('link') - выбор коллекции элементов по css классу
document.getElementsByTagName('h2') - выбор коллеции элементов по тегу
document.getElementById('') - выбор 1 элемента по id
 */


//=============== абота с css классами  =====

/*element.classList.add()
.add() - добавляет css класс
.remove() удаляет css класс
.toggle() переключает css класс (добавляет если не был, убирает если был)
.contains() - возвращает css класс true или false
 */
/* const heading = document.querySelector('h2');
heading.classList.add('red-text');
heading.classList.remove('red-text');
heading.classList.toggle('green-text');
heading.classList.contains('red-text');
if (heading.classList.contains('red-text')) {
} else {
}
 */


// ====== Работа с атрибутами =====

/* getAttribute(attrName) - возвращает значение указзанного атрибута
setAttribute(name, value) - добавляет указанные атрибут и его значение к элементу
hasAttribute(attrName) - возвращает true при наличие у элемента указанного атрибута
removeAttribute(attrName) - удаляет указанные атрибут

toggLeAttribute(name, folce) - добавляет новый атрибут при отсутствии или удаляет существующий атрибут
hasAttributes() - возвращает true если у элемента имеются какие-либо атрибуты
getAttributesNames() - возвращает название атрибутов элемента
 */

/* const img = document.querySelector('#logo');
img.getAttribute('src', './img/logo.png');
img.getAttribute('src');
img.setAttribute('width', '200');
img.src = './img/logo.png';
 */


// ====== Работа с прослушкой событий =====

// есть кнопка и картинка:
/* const button = document.querySelector('#button');
const img = document.querySelector('#logo');
button.value = 'удалить';
1 вариант

button.addEventListener('click', function(){ - место где клик - это событие
    console.log('click'); - можно добавить несколько обработчиков для обработки событий
}) ( когда пользователь нажимает на кнопку(click) то запускается действие (function ))*/
/* img.remove(); - в данном случае при нажатии на кнопку удаляется картинка */
/* 2 вариант - перезаписывает функции
button.onclick = function () {
    console.log('click!');
    img.remove();
}
 */


// ====== Работа с прослушкой событий 2. Форма =====
// есть inout с текстом и div  текстом

/* const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');

inputText.addEventListener('input', function () {
    console.log(inputText.value);
    textBlock.innerText = inputText.value;
})
 */


// ====== Работа с прослушкой событий 3. event =====
// Есть l
/* const list = document.querySelector('#click');

list.addEventListener('list', function (event){
    console.log('this'); - this всегда будет ссылаться на тот элемент который мы прослушиваем
    console.log(event);
    console.log(event.target);
})
 */

// ====== Работа с Элементами =====
// есть заголовок и div

/* // Создание элементов
document.createElement('tag-name')

// Изменить HTML содержимое внутри элемента
element.innerHTML = '';

// Изменить текстовое содержимое внутри элемента
node.innerText = '';

// Клонирование элементов
node.cloneNode() ;// true с внутренним содержимым (текст и теги), false - без внутренннего содержимого

// вставить элемент внутрь другого элемента
element.append(nodesOrDOMStrings);

// удалить элемент
elevent.remove();
 */
/*
// выбор контейнера
const container = document.querySelector('#elementsContainer');

// Создание заголовка
const newHeader = document.createElement('h1');
newHeader.innerText = 'Новый заголовок';
container.append(newHeader);

// Копирование шапки
const  mainHeader = document.querySelector('header');
const headerCopy = mainHeader.cloneNode(true); - можно без тру, но тогда скопируется без внутреннего содержимого
container.append(headerCopy);

// вставка разметки через строки
const htmlExample = '<h2>ghbdtn</h2>';
container.insertAdjacentHTML('beforeend', htmlExample); - 1 аргумент куда добавить, 2 аргумент тот кусок который хотим добавить

// вставка разметки через шаблонные строки
const title = 'Текст заголовка';
const htmlExample = `<h2>${title}</h2>`;
container.insertAdjacentHTML('beforeend', htmlExample)
 */


// ====== ToDo список задач =====
// по разметке: див,  оглавление и список liБ форма с инпут, кнопка
// в инпуте(окно для в вода инфы) вводим новая задача и этот текст должен попадать в список li
// находим список:
/* const todoList = document.querySelector('#todo-list');
// находим форму
const todoForm = document.querySelector('#todo-form');
// находим инпут
const todoInput = document.querySelector('#todo-input');
// вешаем прослушку событий на форму
todoForm.addEventListener('submit');
  // стандартное поведение для формы отправка формы, обновления страницы
function formHandler(event) {
    event.preventDefault(); // отменяет станартное поведение, не обноляет страницу
    // получаем значение из поля ввода
   const taskText = todoInput.value;
   // создания тега li через разметку
    const li = `<li>${taskText}</li>`;
    // добавляем разметку на страницу
    todoList.insertAdjacentHTML('beforeend', li);
    // очищаем поля ввода
    todoInput.value = '';
    // перенос фокуса на поле ввода
    todoInput.focus();


    // второй вариант : создаем тег li с помощью создания элемента плюсы: можно сразу повесить событие для элементов
   const newTask = document.createElement('li');
   newTask.innerText = taskText;
   // добавляем элемент на страницу
   todoList.append(newTask);
   // создаем кнопку удалить
    const deleteBnt = document.createElement('button');
    deleteBnt.setAttribute('role', 'button');
    deleteBnt.innerText = 'Удалить';
    deleteBnt.style['margin-left'] = '15px';
    newTask.append(deleteBnt);
    // вешаем событие на кнопку
    deleteBnt.addEventListener('click', function() {
        console.log(this);
        this.closest('li').remove();// удаляем при нажатии на кнопку удалить
    });
}
 */


// ======  метод setInterval =====
// позволяет запускать код через определенный промежуток времени
/* const timerIntervalID = setInterval(function (){}, 1000);// 1 - функция, 2 - время(тут секунда)
// остановим счетчик
clearInterval(timerIntervalID);

// ======  метод setTimeOut =====
// выполянет что-то через определенное время
const timerID = setTimeout(function (){}, 5000);
clearInterval(timerID);
 */
// ======  метод setInterval + метод setTimeOut =====
/* const timerID = setInterval(function (){
    console.log('setInterval Fired!');
}, 1000);
setTimeout(function (){
    clearInterval(timerID);
}, 10000);
 */
// на странице есть блок с таймером (0) и 3 кнопки: старт стоп и сброс
// секундомер
/* const counterElement = document.querySelector('#counter');
let counter = 0;
let timerID;
setInterval(function (){
    counter = counter + 1; // величиваем на 1
    counterElement.innerText = counter; // вывод в блок
}, 1000);
// Старт
const btnStart = document.querySelector('#start');
btnStart.onclick = function() {
    let timerID = setInterval(function (){
        counter = counter + 1; // величиваем на 1
        counterElement.innerText = counter; // вывод в блок
    }, 1000);
}
// Стоп
const btnStop = document.querySelector('#stop');
btnStop.onclick = function() {
    clearInterval(timerID);
}
// сброс
const btnReset = document.querySelector('#reset');
btnReset.onclick = function(){
    counter = 0;
    counterElement.innerText = counter;
    clearInterval(timerID);
};
 */


// ====== Ассинхронность (четкая последовательность) JS // callback(callback - обратный возов), callback hell=====
/* console.log('start');
setTimeout(function (){
    console.log('print after 2s');
}, 2000)
console.log('finish');
// порядок вывода: старт  - финиш -print after 2s
// вывод ассихронно:
// первый варик
console.log('start');
setTimeout(function (){
    console.log('print after 2s');
    console.log('finish');
}, 2000)
 */
/*setTimeout(function (){
    console.log('start');
    setTimeout(function (){
        console.log('print after 2s');
        setTimeout(function (){
            console.log('finish');
        }, 1000);
    }, 1500);
}, 2000);
 */
// 1 проверяем номера в отеле, если да, то проверяем билеты
/* function checkRooms(success, failed) {
    setTimeout(function (){
        console.log('проверяем номера в отеле..');
        const availableRooms = true;//false

        if (availableRooms) {
            let message = 'Номера есть';
            success(message);

        } else {
            let message = 'Номеров нет';
            failed(message);

        }
    }, 1000);

}
 */
/* function checkTickets(message, success, failed){
    setTimeout(function (message){
        console.log('---function checkTickets---');
        console.log('Ответ в предыдущем шаге:', message);
        console.log('провверяем авиабилеты...');
        // код который отправляет запрос в авиакомпанию
        const availableTickets = true;
        if (availableTickets) {
            let message = 'Билеты есть';
            success(message);
        } else {
            let message = 'Билетов нет';
            failed(message);
        }

    },500)
}
 */

/* checkRooms(
    function (messageFromCheckRooms){
        checkTickets(
            messageFromCheckRooms,
            function (messageFromCheckTickets){
                submitVacation(messageFromCheckTickets)
            },
            function (messageFromCheckTickets) {
                cancelVacation(messageFromCheckTickets)
            })
},
function (messageFromCheckRooms){
cancelVacation(messageFromCheckRooms)
});
 */
/*
function cancelVacation(message) {
    console.log('---cancelVacation---');
    console.log('Ответ на предыдущем шаге', message);
    console.log('Отпуск отменяется');
}
function submitVacation(message) {
    console.log('---submitVacation---');
    console.log('Ответ на предыдущем шаге', message);
    console.log('Едем в отпуск');
}
 */


// =============Создание промиса ================

// можно описать функции которые идут четкот друг за другом промис - обещание

/* const myPromise = new Promise(function (resolve, reject) {
    console.log('Promise created');
    setTimeout(function (){
        // запрос на сервер
        const response = true;

        if (response){
            let message = "SUCCESS"
            resolve(message);
        } else {
            let message = "Failed"
            reject(message);
        }
    },1000)
});

myPromise.then(function (data){
    console.log('Then 1');
    console.log(data);
    return 'data from then 1';

}).then(function (data){
    console.log('Then 2');
    console.log(data);
}).catch(function (data){
    console.log('catch');
    console.log(data);
})
 */

