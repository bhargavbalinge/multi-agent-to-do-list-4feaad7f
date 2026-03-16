const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');
const newTaskInput = document.querySelector('#new-task');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = newTaskInput.value.trim();

  if (taskText) {
    const taskListItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('task-buttons');

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.classList.add('complete-button');
    completeButton.addEventListener('click', () => {
      taskListItem.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(taskListItem);
    });

    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);

    taskListItem.appendChild(taskSpan);
    taskListItem.appendChild(buttonContainer);

    taskList.appendChild(taskListItem);
    newTaskInput.value = '';
  }
});
