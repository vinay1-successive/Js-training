// 6. Write a program to display prime numbers from 1 to 50

const generatePrime = (num) => {
  let arr = [];
  for (let number = 1; number <= 6; number++) {
    let countDivisors = 0;

    for (let divisor = 2; divisor <= number / 2; divisor++) {
      if (number % divisor == 0) {
        countDivisors++;
      }
    }
    if (countDivisors < 1) {
      arr.push(number);
    }
  }
  return arr;
};

const ans = generatePrime(6);
console.log(ans);
