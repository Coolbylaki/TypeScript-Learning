class Player {
	#score = 0; // Private field
	numLives = 10;

	constructor(first, last) {
		this.first = first;
		this.last = last;
	}

	get fullName() {
		return `${this.first} ${this.last}`;
	}

	set fullName(newName) {
		const [first, last] = newName.split(" ");
		this.first = first;
		this.last = last;
	}

	get score() {
		return this.#score;
	}

	set score(newScore) {
		if (newScore < 0) {
			throw new Error("Score must be positive!");
		}
		this.#score = newScore;
	}

	taunt() {
		console.log(`${this.first} is taunting!!!`);
	}

	loseLives() {
		this.numLives--;
		return this.numLives;
	}

	// Private method
	#secret() {
		return "Secret";
	}
}

const playerOne = new Player("Lazar", "Stojanovic");
const playerTwo = new Player("John", "Doe");
