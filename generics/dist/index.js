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
// Generics with multiple types with type constraint
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObject = merge({ user: "Lazar", isAdmin: true }, { perms: ["change", "delete"] });
// Using interface
function mixCats(catOne, catTwo) {
    return {
        name: catOne.name,
        breed: catTwo.breed,
    };
}
const cats = mixCats({ name: "John", breed: "Russian Blue" }, { name: "Marry", breed: "Russian red" });
// Default type
function makeEmptyArray() {
    return [];
}
const strings = makeEmptyArray();
const numbers = makeEmptyArray(); // You can still change it
class VideoPlaylist {
    constructor() {
        this.videos = [];
    }
}
class SongPlaylist {
    constructor() {
        this.songs = [];
    }
}
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(element) {
        this.queue.push(element);
    }
}
const songs = new Playlist();
const videos = new Playlist();
