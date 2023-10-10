// 7. All of the above questions from 3-6 needs to be done with arrow functions also

// 3. Write a function expression that takes in another function as an argument

const getSum = (value1, value2) => value1 + value2;

const calculateSum = (getSum) => getSum(1, 22);
const sum = calculateSum(getSum);
console.log(sum);
// 4. Write a function expression that takes in a number and returns its square.

const getSquare = (num) => num * num;
const square = getSquare(20);
console.log(square);

// 5. Write a function expression that takes in two numbers and returns their sum.

const getSum1 = (value1, value2) => value1 + value2;
const sum1 = getSum1(2, 3);
console.log(sum1);

// 6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const checkEvenOdd = (n) => (n % 2 == 0 ? true : false);
const ans = checkEvenOdd(15);
console.log(ans);
