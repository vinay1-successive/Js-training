// 1. Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)


var x=-1;
const get_Random =()=> {
  let number=Math.floor(Math.random()*10+1);
  while(number===x)
  {
    number=Math.floor(Math.random()*10+1);
  }
  x=number;
  return number;
}

const random_number1 = get_Random();
const random_number2 = get_Random();
console.log(random_number1,random_number2);
