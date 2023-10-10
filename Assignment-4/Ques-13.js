// 13. Write a program to return inverse of an array

const arr = [1, 2, 0, 4, 3];

const createInverse = (arr) => {
  let inverse = [];

  arr.forEach((element, i) => {
    inverse[element] = i;
  });
  return inverse;
};

const ans = createInverse(arr);
console.log(ans);
 