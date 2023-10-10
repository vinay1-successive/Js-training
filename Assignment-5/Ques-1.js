// 1. Write a program to iterate over object.

const person = {
  name: "Vinay",
  age: 22,
  fun: function () {
    return "Hello";
  },
};
for (const key in person) {
  console.log(typeof person[key] == "function" ? person[key]() : person[key]);
}
