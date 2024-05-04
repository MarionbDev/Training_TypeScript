"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
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
// Test
const client = new Person("John", 40);
assert_1.default.equal(typeof client.tellMyName, "function");
assert_1.default.equal(typeof client.tellMyAge, "function");
assert_1.default.equal(client.tellAllInfo(), "I am John and I am 40 years old");
