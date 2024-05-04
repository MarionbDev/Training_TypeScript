import assert from "assert";

class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  tellMyName(): string {
    return `I am ${this.name}`;
  }

  tellMyAge(): string {
    return `I am ${this.age} years old`;
  }

  tellAllInfo(): string {
    return `${this.tellMyName()} and ${this.tellMyAge()}`;
  }
}

const person1 = new Person("John", 40);
const person2 = new Person("Mary", 35);

console.log(person1.tellAllInfo());
console.log(person2.tellAllInfo());

// Test

const client = new Person("John", 40);
assert.equal(typeof client.tellMyName, "function");
assert.equal(typeof client.tellMyAge, "function");
assert.equal(client.tellAllInfo(), "I am John and I am 40 years old");
