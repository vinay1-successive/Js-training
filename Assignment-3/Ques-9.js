// 9. Write a program to print fibonaaci series
const generateFibonacii = (number) => {
  let value1 = 0;
  let value2 = 1;
  let sum = 0;
  let start = 0;
  let arr = [];
  while (start < number) {
    arr.push(value1);
    sum = value1 + value2;
    value1 = value2;
    value2 = sum;
    start++;
  }
  return arr;
};

const ans = generateFibonacii(10);
console.log(ans);
