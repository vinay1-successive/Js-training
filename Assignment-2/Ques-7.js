// 7. All of the above questions from 3-6 needs to be done with arrow functions also

// 3. Write a function expression that takes in another function as an argument

const get_sum=(value1,value2)=>  value1+value2; 

const Calculate_sum=(get_sum)=> console.log(get_sum(1,22));

Calculate_sum(get_sum);

// 4. Write a function expression that takes in a number and returns its square.

const get_square =(num)=> num*num;
console.log(get_square(20));

// 5. Write a function expression that takes in two numbers and returns their sum.

const get_sum1=(value1,value2) => value1+value2;
console.log(get_sum1(2,3));

// 6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const check_even_odd=(n) => n%2==0?true:false;
console.log(check_even_odd(10));
