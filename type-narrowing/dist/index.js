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
// Equality narrowing
function someDemo(x, y) {
    if (x === y) {
        return x.concat(y); // Both are strings
    }
}
function getRuntime(title) {
    if ("duration" in title) {
        return title.duration;
    }
    return title.episodeDuration * title.episodeNumber;
}
// Instanceof narrowing
function printFullDate(date) {
    if (date instanceof Date) {
        return date.toUTCString();
    }
    return new Date(date).toUTCString();
}
// This is TypeScript specific
function isCat(animal) {
    return animal.lives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        return "Meow";
    }
    return "Woof";
}
