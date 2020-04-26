// todo
/* // let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let tasks = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(tasks));
// const data = JSON.parse(localStorage.getItem('items'));

const form = document.forms['addTodoItem'];
const inputText = form.elements['todoText'];
const ul = document.querySelector('.list-group');
let notificationAlert = document.querySelector('.notification-alert');
const clearListBtn = document.querySelector('.clearList');

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
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex align-items-center';
  li.setAttribute('data-id', task.id);
  const span = document.createElement('span');
  span.textContent = task.text;

  const iEdit = document.createElement('i');
  iEdit.className = 'far fa-edit edit-item ml-auto';
  iEdit.style = 'cursor: pointer;';
  iEdit.style.color = 'orange';
  iEdit.onmouseover = function () {
    this.style.color = "red"
  }
  iEdit.onmouseout = function () {
    this.style.color = "orange"
  }

  const iDelete = document.createElement('i');
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
  localStorage.setItem('items', JSON.stringify(tasks));
  ul.insertAdjacentElement('afterbegin', listTemplate(newTask));
}

// data.forEach(item => {
//   listTemplate(item);
// })

function editListItem(id, newValue) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i].text = newValue;
      break;
    }
  }
  localStorage.setItem('items', JSON.stringify(tasks));

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

function deleteListItem(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks.splice(i, 1);
      break;
    }
  }
  localStorage.setItem('items', JSON.stringify(tasks));

  massage({
    text: 'Task deleted success',
    cssClass: 'alert-warning',
    timeout: 4000,
  });
}

clearListBtn.addEventListener('click', clearList);

function clearList() {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
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
}) */
// todo end
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// this (call, apply)
function getPrice(current) {
  return `This goods cost ${this.price}`
}

let intel = {
  name: 'intel i7 3.5Ghz',
  price: 100,
  discount: 10,
  count: 50,
  getPrice: getPrice,
};
let amd = {
  name: 'AMD A8 3.5Ghz',
  price: 75,
  discount: 10,
  count: 50,
  getPrice: getPrice,
};
console.log("getPrice -> intel.getPrice()", intel.getPrice());
console.log("getPrice -> intel.getPrice()", amd.getPrice());
// (call, apply)
getPrice.call(amd, '$');
getPrice.apply(amd, ['$', 'something else']);
// bind
setTimeout(intel.getPrice, 2000); // lost this
intel.getPrice = getPrice.bind(intel);
