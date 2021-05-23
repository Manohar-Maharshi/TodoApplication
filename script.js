const form = document.getElementById('form');
const todoUl = document.getElementById('todoUl');
let totalTodosCount = document.getElementById('totalTodosCount');
let completedTodosCount = document.getElementById('completedTodosCount');
let todoCount = 0;
let todoCompletedCount = 0;
const formSubmit = (e) => {
	e.preventDefault();
	const todoInputField = document.getElementById('todoInputField');
	let todoInputValue = todoInputField.value;
	if (todoInputValue !== '') {
		todoCount++;
		addTodo(todoInputValue);
		console.log(todoCount);
	} else {
		alert('Enter Any Single Todo');
	}
	totalTodosCount.innerHTML = todoCount;
	completedTodosCount.innerHTML = todoCompletedCount;
	todoInputField.value = '';
};
const addTodo = (todoText) => {
	const li = document.createElement('li');
	li.setAttribute('class', 'todo');
	li.innerHTML = `
			<p id="todoText" class="todo-text">${todoText}</p>
	`;
	todoUl.appendChild(li);
	todoEvents(li);
};
const todoEvents = (li) => {
	li.addEventListener('click', () => {
		li.firstElementChild.classList.toggle('done');
		if (li.firstElementChild.classList.contains('done')) {
			todoCompletedCount++;
		} else {
			todoCompletedCount--;
		}
		completedTodosCount.innerHTML = todoCompletedCount;
	});
	li.addEventListener('dblclick', () => {
		li.remove();
		todoCount--;
		totalTodosCount.innerHTML = todoCount;
	});
};

form.addEventListener('submit', formSubmit);
