"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    tellMyName() {
        return `I am ${this.name}`;
    }
    tellMyAge() {
        return `I am ${this.age} years old`;
    }
    tellAllInfo() {
        return `${this.tellMyName()} and ${this.tellMyAge()}`;
    }
}
const person1 = new Person("John", 40);
const person2 = new Person("Mary", 35);
console.log(person1.tellAllInfo());
console.log(person2.tellAllInfo());
