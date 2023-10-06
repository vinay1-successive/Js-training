// 14. Write a program to reverse an array

const arr = [1, 2, 3, 45];

const reverseArray = (arr) => {
  let reverse = [];
  arr.forEach((elememt) => {
    reverse.unshift(elememt);
  });
  return reverse;
};

const ans = reverseArray(arr);
console.log(ans);
