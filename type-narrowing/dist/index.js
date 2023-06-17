"use strict";
// Typeof guard
function triple(value) {
    if (typeof value === "number") {
        return value * 3;
    }
    return value.repeat(3);
}
// Truthiness guard
const element = document.getElementById("idk");
if (element) {
    element.addEventListener("click", () => console.log("Hey"));
}
else {
    console.log("Element is null");
}
const printLetters = (word) => {
    if (word) {
        for (const char of word) {
            console.log(char);
        }
    }
    else {
        console.log("You did not pass in a word!");
    }
};
