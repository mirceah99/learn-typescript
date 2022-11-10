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
	protected _score = 0;
	constructor(
		public first: string,
		public readonly last: string // private score: 0 = 0
	) {}
	get fullNam(): string {
		return `${this.first} ${this.last}`;
	}
}
const player = new Player("mircea", "h");

class SuperPlayer extends Player {
	isAdmin = true;
	// constructor();
	maxScore() {
		this._score = 9999999999;
	}
}

abstract class Employee {
	abstract saySomething(): void;
	constructor(public name: string) {}
	public x(): void {
		console.log("-x-x-x-x-x-x-x-x-x-");
	}
}

class PartTimeEmployee extends Employee {
	public saySomething(): void {
		console.log("something");
	}
}
const x = new PartTimeEmployee("mrs x");
x.x();
