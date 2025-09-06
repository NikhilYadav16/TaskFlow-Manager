const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');
const dialog = document.getElementById('instructionDialog');
const closeDialogBtn = document.getElementById('closeDialog');
const dateTimeDiv = document.getElementById('dateTime');

// Show dialog once
window.addEventListener('load', () => {
  dialog.style.display = 'block';
  updateDateTime();
});

// Hide instruction dialog
closeDialogBtn.addEventListener('click', () => {
  dialog.style.display = 'none';
});

// Add task
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoText = input.value.trim();
  if (todoText) {
    addTodo(todoText);
    input.value = '';
  }
});

function addTodo(text) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = text;

  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  li.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(span);

  todosUL.appendChild(li);
}

// Clock & Date
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  dateTimeDiv.textContent = `${now.toLocaleDateString(undefined, options)} - ${time}`;
  setTimeout(updateDateTime, 60000);
}