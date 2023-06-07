document.getElementById('task-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskInput.value;
        li.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(li);
        });
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }
});
