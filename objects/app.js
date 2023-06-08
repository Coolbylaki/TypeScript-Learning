var dog = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5,
};
function printName(person) {
    return "Name is: ".concat(person.first, " ").concat(person.last);
}
printName({ first: "Thomas", last: "Edison" });
// Odd but valid
var coordinate = { x: 34, y: 2 };
function randomCoord(x, y) {
    return { x: Math.random(), y: Math.random() };
}
// Excess
printName({ first: "Mick", last: "Jagger" });
var singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
console.log(printName(singer)); // Here it doesn't return an error
