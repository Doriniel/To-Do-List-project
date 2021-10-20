// План действий:
// 1) Внизу списка находится кнопка «Добавить». При нажатии на неё в конец списка добавляется новая пустая запись.
// 2) Над списком присутствует кнопка сортировки. При нажатии на неё записи сортируются по алфавиту. 
// 3) Повторное нажатие приводит к сортировке по алфавиту в обратном порядке. 
// 4) После каждого нажатия кнопка меняет свое состояние, показывая пользователю, 
// в каком порядке будет происходить сортировка (прямом или обратном).
// 5) В начальном состоянии список содержит одну пустую запись.

// 1)

let array = [1,3,5,"sunshine"];

const tasker = document.querySelector('.tasker');
const task = document.querySelectorAll('.task-input');

const addTask = document.querySelector('.button-add');
console.dir(addTask);

addTask.addEventListener('click', addHandler);

function addHandler() {
    tasker.innerHTML = '';
    array.forEach((item) => {
        tasker.append(createTaskElement(item));
    })
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

// task.forEach((item) => {
//     console.dir(item);
// })


