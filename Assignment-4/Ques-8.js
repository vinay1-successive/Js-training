// 8. Write a program to remove dupliacte elements from an array
const arr = [1, 2, 1, 2, 3, 4, 5, 3];
const removeDuplicate = (arr) => {
  let result = [];
  arr.forEach((value) => {
    if (!result.includes(value)) {
      result.push(value);
    }
  });
  return result;
};
const ans = removeDuplicate(arr);
console.log(ans);
