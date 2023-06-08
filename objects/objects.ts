const dog = {
	name: "Elton",
	breed: "Australian Shepherd",
	age: 0.5,
};

function printName(person: { first: string; last: string }): string {
	return `Name is: ${person.first} ${person.last}`;
}

printName({ first: "Thomas", last: "Edison" });

// Odd but valid
let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoord(x: number, y: number): { x: number; y: number } {
	return { x: Math.random(), y: Math.random() };
}

// Excess
printName({ first: "Mick", last: "Jagger", age: 473 });

const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer); // Here it doesn't return an error
