"use strict";
// const x222 = [1, "13"];
// let myNumbers: number[];
// let myNumbers2: Array<number>;
// function identity<Type>(item: Type): Type {
function identity(item) {
    return item;
}
identity([true]);
function getRandomElement(items) {
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
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const combo = merge({ name: "xxx" }, { age: 22 });
function tscBug(arg1, arg2) {
    //agr1 = 3 number
    //arg2 = '3' string
    // arg1 == arg2 true
    if (arg1 == arg2) {
        arg1; //(parameter) arg1: string
        arg2; //(parameter) arg2: string
    }
}
function getAge(creature) {
    if ("isHuman" in creature) {
        return creature.ageHumanAge;
    }
    if ("isPet" in creature) {
        return creature.agePet;
    }
    // return creature.ageHumanAge || creature.agePet;
}
function isCat(input) {
    return !!input.isCat;
}
function doNoise(animal) {
    if (isCat(animal)) {
        animal; //(parameter) animal: Cat
    }
}
