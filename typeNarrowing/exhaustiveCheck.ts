interface Cat {
	name: string;
	age: number;
	hasOwner: boolean;
	_type: "cat";
}
interface Dog {
	name: string;
	age: number;
	hasOwner: boolean;
	_type: "dog";
}
interface Cow {
	name: string;
	age: number;
	hasOwner: boolean;
	_type: "cow";
}

type Animal = Cat | Dog | Cow;

function animalDoNoise(animal: Animal) {
	switch (animal._type) {
		case "cat":
			animal; //(parameter) animal: Cat
			console.log("Meow!");
			break;
		case "dog":
			animal; //(parameter) animal: Dog
			console.log("Ham!");
			break;
		case "cow":
			animal; //(parameter) animal: Cow
			console.log("Moo!");
			break;
		default:
			const _exhaustiveCheck: never = animal;
			throw "default switch case	";
	}
}
