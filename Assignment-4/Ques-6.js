// 6. Write a program to find sum of an array

const arr = [2, 34, 3, 45, 7, 5];

const calculateSum = (arr) => {
  return arr.reduce((prev, curr) => prev + curr, 0);
};

const ans = calculateSum(arr);
console.log(ans);
 