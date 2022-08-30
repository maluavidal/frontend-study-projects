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
    }
});

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createXButton(li) {
    li.innerText += ' ';
    const xButton = document.createElement('button');
    xButton.innerText = 'apagar';
    xButton.setAttribute('class', 'apagar');
    xButton.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(xButton);
}

function createTask(textInput) { 
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    clearInput();
    createXButton(li);
} 

btnAddTask.addEventListener('click', function() {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    }
});

