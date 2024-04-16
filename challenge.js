"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prettyPrintWilder = function (users) {
    users.forEach(function (user) {
        if (user.age !== undefined) {
            console.log("".concat(user.name, " is ").concat(user.age, " years old"));
        }
        else if (user.birthday !== undefined) {
            console.log("".concat(user.name, " was born on ").concat(user.birthday));
        }
        else {
            console.log("".concat(user.name, " has no age or birthday specified"));
        }
    });
};
var wilders = [];
var user1 = { name: "Pierre", age: 23 };
var user2 = { name: "Paul", birthday: "10/02/1990" };
var user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
