// 1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")
const removeDuplicate = (str) => {
  let finalString = "";
  Array.from(str).forEach((element) => {
    if (!finalString.includes(element)) {
      finalString += element;
    }
  });
  return finalString;
};
const str = removeDuplicate("Hello Yellow");

console.log(str);
