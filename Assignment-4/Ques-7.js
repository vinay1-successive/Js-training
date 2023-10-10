// 7. Write a program to find index of duplicate elements in an array
const arr = [1, 2, 1, 2, 3, 4, 5, 3];
const findDuplicateIndex = (arr) => {
  let result = [];
  arr.forEach((element, index) => {
    if (arr.lastIndexOf(element) - arr.indexOf(element)) result.push(index);
  });
  return result;
};
console.log(findDuplicateIndex(arr));
