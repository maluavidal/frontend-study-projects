const inputTask = document.querySelector('.input-task');
const btnAddTask = document.querySelector('.btn-add-task');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
}

inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
        inputTask.value = '';
        inputTask.focus();
    }
});

function createXButton(li) {
    li.innerText += ' ';
    const xButton = document.createElement('button');
    xButton.innerText = 'X';
    xButton.setAttribute('class', 'X');
    li.appendChild(xButton);
}

function createTask(textInput) { 
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    createXButton(li);
    saveTasks();
} 

btnAddTask.addEventListener('click', function(){
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('X')) {
    el.parentElement.remove();
    saveTasks();
    }
});

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const tasksList = [];

    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('X', '').trim();
        tasksList.push(taskText);
    }
    const tasksJSON = JSON.stringify(tasksList); // converte o elemento js para string no formato json
    localStorage.setItem('tasks', tasksJSON);    
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    const tasksList = JSON.parse(tasks); // converte de volta para um elemento js

    for (let task of tasksList) {
        createTask(task);
    }    
}

addSavedTasks();