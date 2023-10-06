// 1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")
const removeDuplicate = (str) => {
  let finalString = "";
  for (let i = 0; i < str.length; i++) {
    if (finalString.indexOf(str.charAt(i)) == -1) {
      finalString = finalString + str.charAt(i);
    }
  }
  return finalString;
};
const str = removeDuplicate("Hello Yellow");

console.log(str);
