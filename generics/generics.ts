// const x222 = [1, "13"];
// let myNumbers: number[];
// let myNumbers2: Array<number>;
// function identity<Type>(item: Type): Type {
function identity<T>(item: T): T {
	return item;
}
identity<boolean[]>([true]);

function getRandomElement<T>(items: T[]): T {
	const index = Math.floor(Math.random() * items.length);
	console.log(items[index]);
	return items[index];
}
const fruits = ["apple", "banana", "coconut", "grape", "orange"];
// getRandomElement<string>(fruits);
// getRandomElement<string>(fruits);
// getRandomElement<string>(fruits);
// getRandomElement<string>(fruits);
// getRandomElement<string>(fruits);
// getRandomElement<string>(fruits);
// getRandomElement(fruits);

function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
	return { ...obj1, ...obj2 };
}
const combo = merge({ name: "xxx" }, { age: 22 });

function tscBug(arg1: string | number, arg2: string | boolean) {
	//agr1 = 3 number
	//arg2 = '3' string
	// arg1 == arg2 true
	if (arg1 == arg2) {
		arg1; //(parameter) arg1: string
		arg2; //(parameter) arg2: string
	}
}

interface Human {
	name: string;
	ageHumanAge: number;
	isHuman: true;
}
interface Pet {
	name: string;
	agePet: number;
	isPet: true;
}

function getAge(creature: Pet | Human) {
	if ("isHuman" in creature) {
		return creature.ageHumanAge;
	}
	if ("isPet" in creature) {
		return creature.agePet;
	}
	// return creature.ageHumanAge || creature.agePet;
}

interface Cat {
	weight: number;
	breed: string;
	age: number;
	isCat: true;
	noise: "meow!";
}

interface Dog {
	isDog: true;
	name: string;
}
function isCat(input: any): input is Cat {
	return !!(input as Cat).isCat;
}

function doNoise(animal: Cat | Dog) {
	if (isCat(animal)) {
		animal; //(parameter) animal: Cat
	}
}
