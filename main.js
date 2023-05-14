// Select the HTML elements
const taskList = document.querySelector('#task-list');

// Fetch the task data from the JSON server
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/tasks')
        .then((response) => response.json())
        .then(renderTasks);
});
// Add an event listener to the form to create new tasks
const newTaskForm = document.querySelector('.task-form form');
newTaskForm.addEventListener('submit', createNewTask);

function renderTasks(tasks) {
    tasks.forEach(renderTask);
}

function renderTask(task) {
    const taskListDiv = el('.task-list');
    const taskList = document.createElement('div');
    taskList.id = `task-${task.id}`;
    taskList.classList = `task-item ${task.priority} ${task.completed ? 'completed' : ''}`;
    taskList.innerHTML = `<h3>${task.task}</h3><p>Due date: ${task.due}</p><p>Priority: ${task.priority}</p>`;
    taskListDiv.append(taskList);

    const completeButton = document.createElement('button');
    completeButton.innerHTML = 'Mark Complete';
    completeButton.classList = 'button-complete'
    completeButton.addEventListener('click', () => completeTask(task.id));
    taskList.append(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList = 'button-delete'
    deleteButton.addEventListener('click', () => deleteTask(task.id));
    taskList.append(deleteButton);

    
}
function createNewTask(event) {
    event.preventDefault();
    const taskInput = document.querySelector('#new-task');
    const dueDateInput = document.querySelector('#new-due-date');
    const assigneeInput = document.querySelector('#new-assignee');
    const priorityInput = document.querySelector('#new-priority');

    const task = {
        task: taskInput.value,
        due: dueDateInput.value,
        assigned: assigneeInput.value,
        priority: priorityInput.value,
        completed: false
    };
    ``

    fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
        .then(response => response.json())
        .then((task) => {
            renderTask(task)
        });
    // Clear the form
    event.target.reset();
}

function completeTask(id) {
    fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            completed: true
        })
    })
        .then(response => response.json())
        .then(data => {
            // Find the task item and update its class
            const taskItem = document.querySelector(`#task-${id}`);
            taskItem.classList.add('completed');
        });
}

function deleteTask(id) {
    fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE'
    })
        .then(() => {
            // Find the task item and remove it from the DOM
            const taskItem = document.querySelector(`#task-${id}`);
            taskItem.remove();
        });
}

function el(elementName) {
    return document.querySelector(elementName)
}
