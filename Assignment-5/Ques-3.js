// 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const person = [
  {
    name: "Vinay",
    age: 22,
    id: 1,
  },
  {
    name: "Vinay",
    age: 22,
    id: 4,
  },
  {
    name: "Vinay",
    age: 22,
    id: 2,
  },
  {
    name: "Vinay",
    age: 22,
    id: 5,
  },
];

person.forEach((element) => {
  delete element.id;
});
console.log(person);
