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
    score;
    // private score = 0;
    isAdmin = false;
    constructor(first, last, score) {
        this.first = first;
        this.last = last;
        this.score = score;
    }
}
const playerOne = new Player("John", "Doggy");
