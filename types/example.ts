let myName: string = "mircea";
let myAge: number = 18;
let myBool: boolean = true;
// let foundMovie: string = null;

const iLoveYou = (name: string) => console.log(`i love you ${name} !`);
const iLoveYouDefault = (name: string = "stranger") =>
	console.log(`i love you ${name} !`);

iLoveYou("mircea");
iLoveYouDefault();

// const colors = ["red", "blue", "green"];
const upperColor = colors.map((color) => {
	return color.toUpperCase();
});
console.log(upperColor);

// never type

function infiniteLoop(): never {
	while (1) {
		console.log("loading...");
	}
	throw "nope";
}
const x = infiniteLoop();

function test(): undefined {
	return undefined;
}
