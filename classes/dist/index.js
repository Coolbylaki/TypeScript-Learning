"use strict";
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
    first;
    last;
    totalScore;
    // private score = 0;
    isAdmin = false;
    constructor(first, last, totalScore) {
        this.first = first;
        this.last = last;
        this.totalScore = totalScore;
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
        return this.totalScore;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be positive!");
        }
        this.totalScore = newScore;
    }
}
const playerOne = new Player("John", "Doggy", 100);
