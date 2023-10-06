// 7. Write a program to find index of duplicate elements in an array

const arr = [1, 2, 1, 2, 3, 4, 5, 3];

const calculateSum = (arr) => {
  let ans = arr.map((value, index) => {
    return arr.lastIndexOf(value) - arr.indexOf(value) > 0 ? index : undefined;
  });
  ans = ans.filter((element) => element != undefined);
  return ans;
};

const ans = calculateSum(arr);
console.log(ans);
