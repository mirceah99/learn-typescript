interface Person {
	readonly cnp: string;
	name: string;
	age: number;
	nickname?: string;
	printData(times: number): string;
	printData2: () => void;
}

interface Student extends Person {
	faculty: string;
	year: 1 | 2 | 3 | 4;
}

const mircea: Student = {
	name: "mircea",
	age: 23,
	nickname: "mirci",
	cnp: "19910024",
	printData2() {
		console.log(this);
	},
	printData(times) {
		let x = "";
		while (times > 0) {
			x += this.toString();
			times--;
		}
		return x;
	},
	faculty: "UPB master",
	year: 1,
};
