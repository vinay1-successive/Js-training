// 12. Write a program to display intersection of two array

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const bubbleSort = (arr1, arr2) => {
  let interSection = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if ((arr1[i] ^ arr2[j]) === 0) {
        interSection.push(arr1[i]);
      }
    }
  }
  return interSection;
};

const ans = bubbleSort(arr1, arr2);
console.log(ans);
