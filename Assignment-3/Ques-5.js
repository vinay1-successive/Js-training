// 5. Write a program to print all even number first and then all odd numbers using only one iteration

const generateEvenOdd = (n) => {
  let even = "";
  let odd = "";
  new Array(10).fill().forEach((element, index) => {
    if ((index + 1) % 2 == 0) {
      even += index + 1 + " ";
      index++;
    } else {
      odd += index + 1 + " ";
    }
  });
  return even + odd;
};
const ans = generateEvenOdd(10);
console.log(ans);
