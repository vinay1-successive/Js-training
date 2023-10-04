// 9. Write a program to print fibonaaci series

function gen_fibonacii(number) {
  let value1 = 0;
  let value2 = 1;
  let sum = 0;
  let start = 0;
  while (start < number) {
    console.log(value1);
    sum = value1 + value2;
    value1 = value2;
    value2 = sum;
    start++;
  }
}

gen_fibonacii(10);
