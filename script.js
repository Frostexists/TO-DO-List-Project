const addButton = document.getElementById('button');
const taskList = document.getElementById('task-list');
const inputField = document.getElementById('input-field');

function addTask() {
    const taskText = inputField.value;
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = ('Delete');
    deleteBtn.classList.add('delete-btn');

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskText.textContent = '';

    deleteBtn.addEventListener('click', function () {
        taskItem.remove();
    });
}

addButton.addEventListener('click', addTask);