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
// Abstract Class kinda like an interface
class Employee {
    first;
    last;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class FullTimeEmployee extends Employee {
    salary;
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    hourlyRate;
    hoursWorked;
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        const salary = this.hoursWorked * this.hourlyRate;
        return salary;
    }
}
const fullTime = new FullTimeEmployee("John", "Doe", 95000);
const partTime = new PartTimeEmployee("Betty", "Dickens", 24, 1100);
