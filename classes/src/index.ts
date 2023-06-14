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
	// private score = 0;
	private isAdmin = false;

	constructor(public first: string, public last: string, private score: number) {}
}

const playerOne = new Player("John", "Doggy");
