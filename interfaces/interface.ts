type Point = {
	x: number;
	y: number;
};

const pt: Point = { x: 5, y: 10 };

// Interface almost same as type, but no equal
// Same way to make optional props & readonly
interface Person {
	readonly id: number;
	name: string;
	age: number;
	nickname?: string;
	sayHi: (name: string) => string;
}

interface Product {
	name: string;
	price: number;
	applyDiscount(discount: number): number;
}

const person: Person = {
	id: 109,
	name: "Johnny",
	age: 24,
	nickname: "John",
	sayHi: function (name) {
		return `Hello, I am ${name}`;
	},
};

const shoes: Product = {
	name: "Nike",
	price: 100,
	applyDiscount(amount) {
		const newPrice = this.price * (1 - amount);
		this.price = newPrice;
		return newPrice;
	},
};

// _______________________________________________________________
interface Dog {
	name: string;
	age: number;
}

// We can extend interface
interface Dog {
	breed: string;
	bark(): string;
}

const dog: Dog = {
	name: "Nero",
	age: 15,
	breed: "German Shepherd",
	bark() {
		return `Woof`;
	},
};

// We can inherit interface like classes also
interface ServiceDog extends Dog {
	job: "Drug Dog" | "Bomb Dog" | "Guide Dog";
}

const chewy: ServiceDog = {
	name: "Chewy",
	age: 30,
	breed: "Terrier",
	bark() {
		return "Woof Woof";
	},
	job: "Guide Dog",
};

// We can inherit multiple as well
interface Human {
	name: string;
}

interface Employee {
	readonly id: number;
	email: string;
}

interface Engineer extends Human, Employee {
	job: string;
	languages: string[];
}

const lazar: Engineer = {
	id: 404,
	name: "Lazar Stojanovic",
	email: "test@gmail.com",
	job: "Full-stack Developer",
	languages: ["Python", "JavaScript"],
};
