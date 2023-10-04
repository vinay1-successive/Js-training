// 6. Write a program to display prime numbers from 1 to 50

function generate_Prime() {
  for (let number = 1; number <= 50; number++) {
    let count_of_divisors = 0;

    for (let divisor = 2; divisor <= number / 2; divisor++) {
      if (number % divisor == 0) {
        count_of_divisors++;
      }
    }
    if (count_of_divisors < 1) {
      console.log(number);
    }
  }
}

generate_Prime();
