// const btn = document.querySelector("#btn-1") as HTMLButtonElement;
// btn?.addEventListener("click", () => {
// 	console.log(input.value);
// });
interface Todo {
	text: string;
	completed: boolean;
}
const input = document.getElementById("todo-input") as HTMLInputElement;
const form = document.querySelector("#todo-form") as HTMLFormElement;
const list = document.querySelector("ul")!;
const todos: Todo[] = readTodos();

todos.forEach(createTodo);

function readTodos(): Todo[] {
	const todoJSON = localStorage.getItem("todos");
	if (todoJSON === null) return [];
	return JSON.parse(todoJSON);
}

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const newTodo: Todo = {
		text: input.value,
		completed: false,
	};
	createTodo(newTodo);
	todos.push(newTodo);
	localStorage.setItem("todos", JSON.stringify(todos));
	input.value = "";
});

function createTodo(todo: Todo) {
	const newLi = document.createElement("li");
	const checkBox = document.createElement("input");
	checkBox.addEventListener("change", (event) => {
		todo.completed = checkBox.checked;
		localStorage.setItem("todos", JSON.stringify(todos));
	});
	checkBox.type = "checkbox";
	checkBox.checked = todo.completed;
	newLi.append(checkBox);
	newLi.append(todo.text);
	list.append(newLi);
}
