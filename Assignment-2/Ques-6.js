// 6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

function check_even_odd(num)
{
    return num%2==0?true:false;
}

const ans=check_even_odd(15);
console.log(ans);