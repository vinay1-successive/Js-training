// 9. Write a program to find the last duplicate index in an array

const arr = [1, 2, 1, 2, 3, 4, 5, 3];

const calculateSum = (arr) => {
  let ans = [];
  let val = [];
  ans = arr.map((value, index) => {
    if (
      arr.lastIndexOf(value) - arr.indexOf(value) > 0 &&
      !val.includes(value)
    ) {
      val.push(value);
      return arr.lastIndexOf(value);
    }
    return undefined;
  });
  ans = ans.filter((element) => element != undefined);
  return ans;
};

const ans = calculateSum(arr);
console.log(ans);
