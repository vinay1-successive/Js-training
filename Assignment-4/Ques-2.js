// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")
const reverseString = (str) => {
  let finalString = "";
  let arr = str.split(" ");

  arr.forEach((element) => {
    let reversed = "";
    Array.from(element).forEach((char) => {
      reversed = char + reversed;
    });
    finalString += reversed + " ";
  });
  return finalString.trim();
};
const str = reverseString("Hello John");

console.log(str);
