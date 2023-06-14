// With ! we guarantee that btn exist
const btn = document.getElementById("btn")!;
const input = document.querySelector("#todo-input") as HTMLInputElement;
const form = document.querySelector("#todo-form") as HTMLFormElement;
const todoList = document.querySelector("#todo-list") as HTMLUListElement;

// btn.addEventListener("click", () => console.log("hello"));

// Type assertion
// let mystery: unknown = "Hello World!!!";

// Doesn't change the type just threat it like a string
// const numChars = (mystery as string).length;

function handleSubmit(event: SubmitEvent) {
	event.preventDefault();
	const newTodoText = input.value;
	const newLi = document.createElement("li");
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	newLi.append(newTodoText);
	newLi.append(checkbox);
	todoList.append(newLi);

	input.value = "";
}

form.addEventListener("submit", handleSubmit);
