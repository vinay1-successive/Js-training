// 5. Write a program to print all even number first and then all odd numbers using only one iteration

function generate_Even_Odd(value) {
  let ans = "";
  for (let number = 1; number < 2 * value; number++) {
    if (number > value) {
      if (number % 2 != 0) {
        ans += number - value + " ";
      }
    } else {
      if (number % 2 == 0) {
        ans += number + " ";
      }
    }
  }
  console.log(ans);
}

generate_Even_Odd(20);
