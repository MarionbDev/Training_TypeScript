"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prettyPrintWilder = (users) => {
    users.forEach((user) => {
        if (user.age !== undefined) {
            console.log(`${user.name} is ${user.age} years old`);
        }
        else if (user.birthday !== undefined) {
            console.log(`${user.name} was born on ${user.birthday}`);
        }
        else {
            console.log(`${user.name} has no age or birthday specified`);
        }
    });
};
const wilders = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", birthday: "10/02/1990" };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
