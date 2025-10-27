const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;

  li.onclick = () => li.classList.toggle('done');

  const removeBtn = document.createElement('span');
  removeBtn.textContent = '❌';
  removeBtn.className = 'remove-btn';

  removeBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(removeBtn);
  list.appendChild(li);
  input.value = '';
}

addBtn.onclick = addTodo;

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTodo();
});
