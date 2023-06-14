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
    totalScore = 0;
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
        return this.totalScore;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be positive!");
        }
        this.totalScore = newScore;
    }
}
class SuperPlayer extends Player {
    isAdmin = true;
    maxScore() {
        if (this.isAdmin) {
            this.totalScore = 999999;
        }
    }
}
class Bike {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    brand;
    color;
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand.toLowerCase()} jacket printed!`);
    }
}
const playerOne = new Player("John", "Doggy");
const bikeOne = new Bike("Red");
const jacketOne = new Jacket("Nike", "Blue");
