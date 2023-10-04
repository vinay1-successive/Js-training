// 1. Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)

function get_Random() {
  return Math.round(Math.random() * 10 + 1, 2);
}

const random_number = get_Random();
console.log(random_number);
