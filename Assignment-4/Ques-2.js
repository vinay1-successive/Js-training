// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")
const reverseString = (str) => {
  let finalString = "";
  let arr = str.split(" ");

  arr.forEach((element) => {
    let reversed = "";
    for (let i = 0; i < element.length; i++) {
      reversed = element.charAt(i) + reversed;
    }
    finalString += reversed + " ";
  });
  return finalString.trim();
};
const str = reverseString("Hello John");

console.log(str);
