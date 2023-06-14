class Player {
	#score = 0; // Private field
	numLives = 10;

	constructor(first, last) {
		this.first = first;
		this.last = last;
	}

	taunt() {
		console.log(`${this.first} is taunting!!!`);
	}

	loseLives() {
		this.numLives--;
		return this.numLives;
	}

	getScore() {
		return this.#score;
	}

	updateScore(newScore) {
		this.#score = newScore;
	}

	// Private method
	#secret() {
		return "Secret";
	}
}

const playerOne = new Player("Lazar", "Stojanovic");
const playerTwo = new Player("John", "Doe");
