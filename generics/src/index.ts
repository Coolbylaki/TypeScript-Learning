// Built in generic examples
const nums: Array<number> = [1, 2, 3];
const colors: Array<string> = ["red", "blue"];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
const buttonEl = document.querySelector<HTMLButtonElement>(".btn")!;

buttonEl.addEventListener("click", () => console.log("hey"));

// Classic example of why we would use generics
function numIdentity(item: number): number {
	return item;
}

function stringIdentity(item: string): string {
	return item;
}

function booleanIdentity(item: boolean): boolean {
	return item;
}

// Works, but defeats purpose of TS
function identity(item: any): any {
	return item;
}

// Generic
function genericIdentity<T>(item: T): T {
	return item;
}

genericIdentity<string>("Hello");
genericIdentity<number>(34);
genericIdentity<boolean>(true);

interface Cat {
	name: string;
	breed: string;
}

genericIdentity<Cat>({ name: "John", breed: "Russian blue" });

// Another example
function getRandomElement<T>(numArray: T[]): T {
	const maxIndex = numArray.length - 1;
	const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
	return numArray[randomIndex];
}
