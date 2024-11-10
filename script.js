const addButton = document.querySelector('.btn.btn--primary');
const taskList = document.querySelector('.list');
const inputField = document.querySelector('.input-field');

function addTask() {
    const taskText = inputField.value;
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.classList.add('list__item');

    const taskIndex = document.createElement('span');
    taskIndex.classList.add('task-index');
    taskIndex.textContent = taskList.childElementCount + 1;

    const taskDesc = document.createElement('span');
    taskDesc.classList.add('task-desc');
    taskDesc.textContent = taskText;

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerHTML =  '✏️';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '🗑️';

    taskItem.appendChild(taskIndex);
    taskItem.appendChild(taskDesc);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    inputField.value = '';

    editBtn.addEventListener('click', function () {
        const newText = prompt("Edit your task:", taskDesc.textContent);
        if (newText) {
            taskDesc.textContent = newText;
        }
    })

    deleteBtn.addEventListener('click', function () {
        taskItem.remove();
        updateTaskIndices();
    });
}

function updateTaskIndices() {
    const tasks = document.querySelectorAll('.task-index');
    tasks.forEach((task, index) => {
        tasks.textContent = index + 1;
    });
}

addButton.addEventListener('click', addTask);