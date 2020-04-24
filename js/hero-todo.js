let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];
let notificationAlert = document.querySelector('.notification-alert');

function generateId() {
  let id = '';
  let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
  for (let i = 0; i < 15; i++) {
    let position = Math.floor(Math.random() * words.length);
    id += words[position];
  }
  return id;
}

function listTemplate(task) {
  let li = document.createElement('li');
  li.className = 'list-group-item d-flex align-items-center';
  li.setAttribute('data-id', task.id);
  let span = document.createElement('span');
  span.textContent = task.text;

  let iEdit = document.createElement('i');
  iEdit.className = 'far fa-edit edit-item ml-auto';
  iEdit.style = 'cursor: pointer;';
  iEdit.style.color = 'orange';
  iEdit.onmouseover = function () {
    this.style.color = "red"
  }
  iEdit.onmouseout = function () {
    this.style.color = "orange"
  }

  let iDelete = document.createElement('i');
  iDelete.className = 'far fa-trash-alt delete-item ml-3';
  iDelete.style = 'cursor: pointer;';
  iDelete.style.color = 'blue';
  iDelete.onmouseover = function () {
    this.style.color = "red"
  }
  iDelete.onmouseout = function () {
    this.style.color = "blue"
  }

  li.appendChild(span);
  li.appendChild(iEdit);
  li.appendChild(iDelete);

  return li;
}

// function clearList() {
//   ul.innerHTML = '';
// }

function generateList(tasksArray) {
  for (let i = 0; i < tasksArray.length; i++) {
    ul.appendChild(listTemplate(tasksArray[i]));
  }
}
generateList(tasks);

function addList(list) {
  let newTask = {
    id: generateId(),
    text: list,
  }
  tasks.unshift(newTask);
  ul.insertAdjacentElement('afterbegin', listTemplate(newTask));
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteListItem(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks.splice(i, 1);
      break;
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));

  massage({
    text: 'Task deleted success',
    cssClass: 'alert-warning',
    timeout: 4000,
  });
}

function editListItem(id, newValue) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i].text = newValue;
      break;
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));

  massage({
    text: 'Task updated success',
    cssClass: 'alert-success',
    timeout: 4000,
  });
}

function massage(settings) {
  notificationAlert.classList.add(settings.cssClass);
  notificationAlert.textContent = settings.text;
  notificationAlert.classList.add('show');

  setTimeout(function () {
    notificationAlert.classList.remove('show');
  }, settings.timeout);
}

ul.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-item')) {
    let parent = e.target.closest('li');
    let id = parent.dataset.id;
    deleteListItem(id);
    parent.remove();
  } else if (e.target.classList.contains('edit-item')) {
    e.target.classList.toggle('fa-save');
    let id = e.target.closest('li').dataset.id;
    let span = e.target.closest('li').querySelector('span');

    if (e.target.classList.contains('fa-save')) {
      span.setAttribute('contenteditable', true);
      span.focus();
    } else {
      span.setAttribute('contenteditable', false);
      span.blur();
      editListItem(id, span.textContent);
    }
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!inputText.value) {
    inputText.classList.add('is-invalid');
  } else {
    inputText.classList.remove('is-invalid');
    addList(inputText.value);
    form.reset();
  }
});

inputText.addEventListener('keyup', function (e) {
  if (inputText.value) {
    inputText.classList.remove('is-invalid');
  }
})

let someCode = '';
