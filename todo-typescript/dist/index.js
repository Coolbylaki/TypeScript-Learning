"use strict";
// With ! we guarantee that btn exist
const btn = document.getElementById("btn");
const input = document.querySelector("#todo-input");
const form = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoArray = readTodos();
todoArray.forEach(createTodo);
// btn.addEventListener("click", () => console.log("hello"));
// Type assertion
// let mystery: unknown = "Hello World!!!";
// Doesn't change the type just threat it like a string
// const numChars = (mystery as string).length;
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON == null) {
        return [];
    }
    return JSON.parse(todosJSON);
}
function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todoArray.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todoArray));
    input.value = "";
}
function createTodo(todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(todo.text);
    newLi.append(checkbox);
    todoList.append(newLi);
}
form.addEventListener("submit", handleSubmit);
