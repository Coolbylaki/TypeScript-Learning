function square(num: number): number {
	return num * num;
}

function greet(person: string): string {
	return `Hi there, ${person}`;
}

const doSomething = (person: string, number: number, isFunny: boolean): string => {
	if (!isFunny) {
		throw new Error("Not Funny");
	}
	return `${person} is funny times ${number}`;
};

// Default prop
function greetStranger(person: string = "Stranger") {
	return `Hi there, ${person}`;
}

// TypeScript is smart to figure out what it will return
function rand(num: number) {
	if (Math.random() < 0.5) {
		return num.toString();
	}
	return num;
}

// Anonymous function. TypeScript is smart to infer the type
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
	return color.toUpperCase();
});

// Void return nothing
function printTwice(msg: string): void {
	console.log(msg);
	console.log(msg);
}

// Never type is function that never stop executing
function makeError(msg: string): never {
	// Infer type is void, but we can say it's never
	throw new Error(msg);
}

function gameLoop(): never {
	while (true) {
		console.log("GAME LOOP RUNNING!");
	}
}
