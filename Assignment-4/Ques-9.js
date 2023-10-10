// 9. Write a program to find the last duplicate index in an array

const arr = [1, 2, 1, 2, 3, 4, 5, 3];
const map = {};
const lastDuplicateIndex = (arr) => {
  arr.forEach((element, index) => {
    map[element] = map.hasOwnProperty(element) ? index : -1;
  });
  return Object.values(map).filter((element) => element > 0);
};
const ans = lastDuplicateIndex(arr);
console.log(ans);
