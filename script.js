var quote = document.getElementById("quote");
var todoList = document.getElementById("todo-list-group");
var todoInput = document.getElementById("todo-input-field");
var todoInputBtn = document.getElementById("todo-input-field-btn");
var checkBtn = document.getElementById("todo-list-item-icons-done-btn");
var deleteBtn = document.getElementById("todo-list-item-icons-delete-btn");

function quoteData() {
	fetch("quotes.json")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			let random = Math.floor(Math.random() * data.length);
			let randomQuote = data[random].text;
			quote.innerHTML = `" ${randomQuote} "`;
		});
}
setInterval(quoteData, 10000);

todoInputBtn.addEventListener("click", function (e) {
	var todoInputValue = todoInput.value;
	if (todoInputValue === "") {
		alert("Write anything...");
	} else {
		let createLi = document.createElement("li");
		createLi.classList.add("todo-list-item");

		let createSpan = document.createElement("span");
		createSpan.classList.add("todo-list-item-content");
		createSpan.innerHTML = todoInputValue;

		let createIconDivs = document.createElement("div");
		createIconDivs.classList.add("todo-list-item-icons");

		let createDoneIcon = document.createElement("img");
		createDoneIcon.src = "./img/select.png";
		createDoneIcon.width = 17;
		createDoneIcon.height = 17;
		createDoneIcon.title = "Make it Cheked...!";
		createDoneIcon.id = "todo-list-item-icons-done-btn";
		createDoneIcon.classList.add("todo-list-item-icons-done");
		let createDeleteIcon = document.createElement("img");
		createDeleteIcon.src = "./img/trash.png";
		createDeleteIcon.width = 17;
		createDeleteIcon.height = 17;
		createDeleteIcon.title = "Delete it....!";
		createDeleteIcon.classList.add("todo-list-item-icons-delete");

		createIconDivs.appendChild(createDoneIcon);
		createIconDivs.appendChild(createDeleteIcon);
		createLi.appendChild(createSpan);
		createLi.appendChild(createIconDivs);
		todoList.appendChild(createLi);
		todoInput.value = "";
	}
});

todoList.addEventListener("click", function (e) {
	let item = e.target;
	if (item.classList[0] === "todo-list-item-icons-delete") {
		const todo = item.parentElement.parentElement;
		todo.remove();
	}
	if (item.classList[0] === "todo-list-item-icons-done") {
		const todo = item.parentElement.parentElement;
		todo.classList.toggle("checked");
	}
});
