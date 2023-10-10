// 14. Write a program to reverse an array
const arr = [1, 2, 3, 45];
const reverseArray = (arr) => {
  let reverse = [];
  arr.forEach((elememt, index) => {
    reverse[arr.length - index - 1] = elememt;
  });
  return reverse;
};
console.log(reverseArray(arr));
