"use strict";
// class Player {
// 	// x: number;
// 	first: string;
// 	readonly last: string;
// 	score = 0;
// 	private secret: string;
// 	constructor(first: string, last: string, secret: string) {
// 		this.first = first;
// 		this.last = last;
// 		this.secret = secret;
// 	}
// }
class Player {
    constructor(first, last // private score: 0 = 0
    ) {
        this.first = first;
        this.last = last;
        this._score = 0;
    }
    get fullNam() {
        return `${this.first} ${this.last}`;
    }
}
const player = new Player("mircea", "h");
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    // constructor();
    maxScore() {
        this._score = 9999999999;
    }
}
class Employee {
    constructor(name) {
        this.name = name;
    }
    x() {
        console.log("-x-x-x-x-x-x-x-x-x-");
    }
}
class PartTimeEmployee extends Employee {
    saySomething() {
        console.log("something");
    }
}
const x = new PartTimeEmployee("mrs x");
x.x();
