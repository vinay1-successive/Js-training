// 7. Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)

const twice_of_number = (num) => 2 * num;

const twice_Generator = (i) => {
  while (twice_of_number(i) <= 4096) {
    console.log(i);
    i = twice_of_number(i);
  }
  console.log(i);
};

twice_Generator(3);
