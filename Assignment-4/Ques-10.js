// 10. Write a program to concatenate an input of array of arrays

const arr = [2, [3, [4, 5]]];

const calculateSum = (arr) => {
  return arr.reduce((ans, element) => {
    return ans.concat(Array.isArray(element) ? calculateSum(element) : element);
  }, []);
};

const ans = calculateSum(arr);
console.log(ans);
