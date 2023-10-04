// 7. All of the above questions from 3-6 needs to be done with arrow functions also

// 3. Write a function expression that takes in another function as an argument

const get_sum=(value1,value2)=>  value1+value2; 

const Calculate_sum=(get_sum)=> get_sum(1,22);
const sum=Calculate_sum(get_sum);
console.log(sum);
// 4. Write a function expression that takes in a number and returns its square.

const get_square =(num)=> num*num;
const square = get_square(20);
console.log(square);

// 5. Write a function expression that takes in two numbers and returns their sum.

const get_sum1=(value1,value2) => value1+value2;
const sum1=get_sum1(2,3);
console.log(sum1);

// 6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const check_even_odd=(n) => n%2==0?true:false;
const ans=check_even_odd(15);
console.log(ans);
