// План действий:
// 1) Внизу списка находится кнопка «Добавить». При нажатии на неё в конец списка добавляется новая пустая запись.
// 2) Над списком присутствует кнопка сортировки. При нажатии на неё записи сортируются по алфавиту. 
// 3) Повторное нажатие приводит к сортировке по алфавиту в обратном порядке. 
// 4) После каждого нажатия кнопка меняет свое состояние, показывая пользователю, 
// в каком порядке будет происходить сортировка (прямом или обратном).
// 5) В начальном состоянии список содержит одну пустую запись.
// 6) drag and drop.

let array = [];

const tasker = document.querySelector('.tasker');
const firstTask = document.querySelector('.first-task');
const otherTasks = document.querySelector('.other-tasks');
let task = document.querySelector('.task-input');
const addTaskButton = document.querySelector('.button-add');
// console.dir(addTaskButton);
// Добавили обработчик события "клик" на кнопку "Добавить" (addTaskButton).
// addTaskButton.addEventListener('click', clickHandler);

addTaskButton.addEventListener('click', addHandler);
// Что делает эта функция? эта функция и есть сам обработчик события, т.е. что происходит при клике на кнопку 
// (что браузер делает при возникновении события).

function addHandler() {
    otherTasks.innerHTML = ''; // здесь мы обнуляем содержимое объекта 'otherTasks' - 
    // который есть div с классом .other-tasks - его выбрали квериселектором выше.
    array.push(task.value);
    task.value = '';
    array.forEach((item) => {
    otherTasks.append(createTaskElement(item));
    });
}

function createTaskElement(task) {
    let block = document.createElement('div');
    block.classList.add('task-block');

    let input = document.createElement('input');
    input.classList.add('task-input');
    input.value = task;

    let xButton = document.createElement('button');
    xButton.classList.add('x-button');

    xButton.addEventListener('click', xButtonHandler);

    function xButtonHandler() {
        block.remove();
    };

    block.append(input, xButton);
    return block;
}






// здесь мы запускаем forEach для каждого элемента массива array - и для каждого мы делаем:
// tasker.append - подвязываем вниз элемента tasker (окошко с задачами) новый элемент.
// (createTaskElement(item)) // это то, ЧТО мы подвязываем.
// event.target.innerText = 'Нажала кнопку и меняю на ней текст';
// event.target.style.backgroundColor = "aquamarine";
// event.target.style.color = "black";


// Пробовала как работает:
// task.addEventListener('change', (event) => {
//     console.log(event.target);
//     console.log(event.target.value);
// });


// function clickHandler() {
//     array.push(task.value);
//     console.log(array);
// }

// Эта функция делает "отрисовку" таскера на странице при каждом запуске события - клика по кнопке "Добавить".









