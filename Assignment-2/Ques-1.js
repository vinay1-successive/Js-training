// 1. Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)

let x;
const getRandom = () => {
  let number = Math.floor(Math.random() * 10 + 1);
  while (x && number === x) {
    number = Math.floor(Math.random() * 10 + 1);
  }
  x = number;
  return number;
};

const randomNumber1 = getRandom();
const randomNumber2 = getRandom();
console.log(randomNumber1, randomNumber2);
