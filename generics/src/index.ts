// Built in generic examples
const nums: Array<number> = [1, 2, 3];
const colors: Array<string> = ["red", "blue"];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
const buttonEl = document.querySelector<HTMLButtonElement>(".btn")!;

buttonEl.addEventListener("click", () => console.log("hey"));
