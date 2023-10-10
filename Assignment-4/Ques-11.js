// 11. Write a program to sort an array (bubble sort)

const arr = [2, 3, 4, 5, 7, 3, 1, 3];

const bubbleSort = (arr) => {
  arr.forEach((element1, index1, arr) => {
    arr.forEach((element2, index2, arr) => {
      if (arr[index1] < arr[index2]) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
      }
    });
  });
  return arr;
};

const ans = bubbleSort(arr);
console.log(ans);
