"use strict";
// Built in generic examples
const nums = [1, 2, 3];
const colors = ["red", "blue"];
const inputEl = document.querySelector("#username");
const buttonEl = document.querySelector(".btn");
buttonEl.addEventListener("click", () => console.log("hey"));
// Classic example of why we would use generics
function numIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// Works, but defeats purpose of TS
function identity(item) {
    return item;
}
// Generic
function genericIdentity(item) {
    return item;
}
genericIdentity("Hello");
genericIdentity(34);
genericIdentity(true);
genericIdentity({ name: "John", breed: "Russian blue" });
// Another example
function getRandomElement(numArray) {
    const maxIndex = numArray.length - 1;
    const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
    return numArray[randomIndex];
}
getRandomElement([
    { name: "John", breed: "Russian blue" },
    { name: "Marry", breed: "Russian yellow" },
    { name: "Willard", breed: "Russian red" },
]);
// Inferred type
getRandomElement([1, 2, 3, 4, 5]);
