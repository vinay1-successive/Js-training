// 7. Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)

const twiceOfNumber = (num) => 2 * num;

const generateTwice = (i) => {
  while (twiceOfNumber(i) <= 4096) {
    console.log(i);
    i = twiceOfNumber(i);
  }
  console.log(i);
};

generateTwice(2);
