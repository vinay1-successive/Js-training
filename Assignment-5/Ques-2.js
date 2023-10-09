// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})
const person = [
  {
    name: "Vinay",
    age: 22,
  },
  {
    name: "Karan",
    age: 34,
  },
  {
    name: "Umesh",
    age: 12,
  },
  {
    name: "Dheeraj",
    age: 53,
  },
];

person.sort((a, b) => {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
});
console.log(person);
