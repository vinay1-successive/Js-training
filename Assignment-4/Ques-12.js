// 12. Write a program to display intersection of two array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const intersection = (arr1, arr2) => {
  return arr2.filter((element) => arr1.includes(element));
};

console.log(intersection(arr1, arr2));