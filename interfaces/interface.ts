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
