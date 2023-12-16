let tasks = [];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.name}</span>
      <button class="edit-button" onclick="editTask(${index})">Edit</button>
      <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
      <button class="complete-button" onclick="completeTask(${index})">Completed</button>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const newTask = taskInput.value.trim();
  if (newTask !== '') {
    tasks.push({ name: newTask, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

function editTask(index) {
  const editedTask = prompt('Edit task:', tasks[index].name);
  
  if (editedTask !== null) {
    tasks[index].name = editedTask.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function completeTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

window.onload = renderTasks;
