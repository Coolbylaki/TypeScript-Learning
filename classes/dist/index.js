class Player {
	score = 0;
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
}

const playerOne = new Player("Lazar", "Stojanovic");
console.log(playerOne.taunt());
console.log(playerOne.numLives);
console.log(playerOne.loseLives());

const playerTwo = new Player("John", "Doe");
console.log(playerTwo);
