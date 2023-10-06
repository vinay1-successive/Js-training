// 8. Write a program to remove dupliacte elements from an array

const arr = [1, 2, 1, 2, 3, 4, 5, 3];

const calculateSum = (arr) => {
  let ans = [];
  arr.filter((value) => {
    if (!ans.includes(value)) {
      ans.push(value);
    }
  });
  return ans;
};

const ans = calculateSum(arr);
console.log(ans);
