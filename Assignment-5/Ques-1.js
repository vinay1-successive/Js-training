// 1. Write a program to iterate over object.

const person = {
  name: "Vinay",
  age: 22,
  fun: function () {
    return "Hello";
  },
};
Object.keys(person).forEach((key) =>
  console.log(typeof person[key] == "function" ? person[key]() : person[key])
);
