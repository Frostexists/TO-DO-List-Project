const addButton = document.getElementById('button');
const taskInput = document.getElementById('input-field');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') return;

    const taskItem = document.createElement('li');

    taskItem.textContent = taskText

    taskList.appendChild(taskItem);

    taskInput.value = '';
}

addButton.addEventListener('click', addTask);