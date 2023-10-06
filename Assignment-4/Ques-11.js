// 11. Write a program to sort an array (bubble sort)

const arr = [2, 3, 4, 5, 7, 3, 1, 3];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] >= arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const ans = bubbleSort(arr);
console.log(ans);
