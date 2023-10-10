// 6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

function checkEvenOdd(num) {
  return num % 2 == 0 ? true : false;
}

const ans = checkEvenOdd(15);
console.log(ans);
