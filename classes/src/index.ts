/*
class Player {
	private isAdmin = false;
	public readonly first: string;
	public readonly last: string;
	public score = 0;

	constructor(first: string, last: string) {
		this.first = first;
		this.last = last;
	}

	private resetScore() {
		this.score = 0;
	}
}
*/

// Shortcut version
class Player {
	protected totalScore = 0;

	constructor(public first: string, public last: string) {}

	get fullName() {
		return `${this.first} ${this.last}`;
	}

	set fullName(newName: string) {
		const [first, last] = newName.split(" ");
		this.first = first;
		this.last = last;
	}

	get score() {
		return this.totalScore;
	}

	set score(newScore: number) {
		if (newScore < 0) {
			throw new Error("Score must be positive!");
		}
		this.totalScore = newScore;
	}
}

class SuperPlayer extends Player {
	private isAdmin = true;

	maxScore() {
		if (this.isAdmin) {
			this.totalScore = 999999;
		}
	}
}

interface Colorful {
	color: string;
}

interface Printable {
	print(): void;
}

class Bike implements Colorful {
	constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
	constructor(public brand: string, public color: string) {}

	print(): void {
		console.log(`${this.color} ${this.brand.toLowerCase()} jacket printed!`);
	}
}

// Abstract Class kinda like an interface
abstract class Employee {
	constructor(public first: string, public last: string) {}

	abstract getPay(): number;
}

class FullTimeEmployee extends Employee {
	constructor(first: string, last: string, private salary: number) {
		super(first, last);
	}

	getPay(): number {
		return this.salary;
	}
}

class PartTimeEmployee extends Employee {
	constructor(
		first: string,
		last: string,
		private hourlyRate: number,
		private hoursWorked: number
	) {
		super(first, last);
	}

	getPay(): number {
		const salary = this.hoursWorked * this.hourlyRate;
		return salary;
	}
}

const fullTime = new FullTimeEmployee("John", "Doe", 95000);
const partTime = new PartTimeEmployee("Betty", "Dickens", 24, 1100);
