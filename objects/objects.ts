function printFullName(person: { firstName: string; lastName: string }): void {
	console.log(`full name: ${person.firstName} ${person.lastName}`);
}

const person = { lastName: "Hanghiuc", firstName: "mircea", age: 23 };
printFullName(person);

type ImaginaryNumber = {
	realPart: number;
	imaginaryPart: number;
};

function sumImaginary(x: ImaginaryNumber, y: ImaginaryNumber): ImaginaryNumber {
	return {
		realPart: x.realPart + y.realPart,
		imaginaryPart: x.imaginaryPart + y.imaginaryPart,
	};
}

type Song = {
	title: string;
	artist: string;
	numStreams: number;
	credits: Credits;
};
type Credits = { producer: string; writer: string };
function calculatePayout(song: Song): number {
	return song.numStreams * 0.0033;
}
function printSong(song: Song): void {
	console.log(song);
}

const mySong = {
	title: "xxx",
	artist: "yyy",
	numStreams: 0,
	credits: {
		producer: "aaa",
		writer: "bbb",
	},
};

type Point = {
	x: number;
	y: number;
	z?: number;
};
const myPoint: Point = {
	x: 1,
	y: 2,
	z: 22,
};
type User = {
	readonly id: string;
	name: string;
	toke: string;
};
printSong(mySong);
const mircea: User = {
	id: "xx-xxxx-xxx",
	name: "mircea",
	toke: "bfhiejorf.bfhaejrf.faneiorfaoerf",
};
mircea.name = "yup";
// mircea.id = "rep";

type Circle = {
	radius: number;
	x: number;
	y: number;
};
type Colorful = {
	color: string;
};
type ColorfulCircle = Circle & Colorful;

const colorfulCircle: ColorfulCircle = {
	radius: 10,
	x: 0,
	y: 0,
	color: "RED",
};
