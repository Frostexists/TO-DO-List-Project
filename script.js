const addButton = document.getElementById('button');
const taskInput = document.getElementById('input-field');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText

    const deleteBtn = createElement('button')
    deleteBtn.textContent = 'delete';
    deleteBtn.classList.add('delete-btn');

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);


    taskInput.value = '';

    deleteBtn.addEventListener('click', function () {
        taskItem.remove();
    })
}

addButton.addEventListener('click', addTask);