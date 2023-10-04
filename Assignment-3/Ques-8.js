// 8. Write a program to dispaly number from 1-20 using all types of loops

// for loop
let ans = "";
const arr = [];
for (let i = 1; i <= 20; i++) {
  ans += i + " ";
  arr.push(i);
}

console.log(ans);

//while loop
let ans1 = "";
let i = 1;
while (i <= 20) {
  ans1 += i + " ";
  i++;
}
console.log(ans1);

// for of
let ans2 = "";
for (const iterator of arr) {
  ans2 += iterator + " ";
}

console.log(ans2);

//for each

let ans3 = "";
arr.forEach((element) => {
  ans3 += element + " ";
});
console.log(ans3);

//do while
let j = 1;
let ans4 = "";
do {
  ans4 += j + " ";
  j++;
} while (j <= 20);
console.log(ans4);
