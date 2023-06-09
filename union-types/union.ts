const printAge = (age: number | string): string => {
	return `Your age is ${age}`;
};

printAge(5);
printAge("6");

// Union of different Types
type Loc = {
	lat: number;
	long: number;
};

type Point = {
	x: number;
	y: number;
};

let coordinates: Point | Loc = {
	x: 1,
	y: 34,
};

coordinates = {
	lat: 34.32,
	long: 23.23,
};

// Type narrowing
function calculateTax(price: number | string, tax: number): number {
	if (typeof price === "number") {
		return price * tax;
	}
	return parseFloat(price.replace("$", "")) * tax;
}

// Union in Arrays
const nums: number[] = [1, 2, 3, 4, 5]; // Classic
const stuff: any[] = [1, "324", true, {}]; // Avoid

const nameAndAge: (number | string)[] = [23, 18, 22, "John", "Anne", "Marie"];

const numOrStringArray: number[] | string[] = []; // This is different

const coords: (Point | Loc)[] = [];
coords.push(coordinates);

// Literal types
const zero: 0 = 0;
const someString: "Lazar" = "Lazar";

function giveAnswer(answer: "yes" | "no"): string {
	return `Your answer is: ${answer}`;
}

type DayOfWeek =
	| "Monday"
	| "Tuesday"
	| "Wednesday"
	| "Thursday"
	| "Friday"
	| "Saturday"
	| "Sunday";

let currentDay: DayOfWeek = "Thursday";
