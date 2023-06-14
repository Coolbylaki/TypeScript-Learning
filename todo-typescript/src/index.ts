// With ! we guarantee that btn exist
const btn = document.getElementById("btn")!;
const input = document.querySelector("#todo-input") as HTMLInputElement;
const form = document.querySelector("#todo-form") as HTMLFormElement;
const todoList = document.querySelector("#todo-list") as HTMLUListElement;

interface Todo {
	text: string;
	completed: boolean;
}

const todoArray: Todo[] = readTodos();
todoArray.forEach(createTodo);

// btn.addEventListener("click", () => console.log("hello"));

// Type assertion
// let mystery: unknown = "Hello World!!!";

// Doesn't change the type just threat it like a string
// const numChars = (mystery as string).length;

function readTodos(): Todo[] {
	const todosJSON = localStorage.getItem("todos");
	if (todosJSON == null) {
		return [];
	}
	return JSON.parse(todosJSON);
}

function saveTodos() {
	localStorage.setItem("todos", JSON.stringify(todoArray));
}

function handleSubmit(event: SubmitEvent) {
	event.preventDefault();

	const newTodo: Todo = {
		text: input.value,
		completed: false,
	};
	createTodo(newTodo);
	todoArray.push(newTodo);

	saveTodos();
	input.value = "";
}

function createTodo(todo: Todo) {
	const newLi = document.createElement("li");
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.checked = todo.completed;
	checkbox.addEventListener("change", function () {
		todo.completed = checkbox.checked;
		saveTodos();
	});

	newLi.append(todo.text);
	newLi.append(checkbox);
	todoList.append(newLi);
}

form.addEventListener("submit", handleSubmit);
