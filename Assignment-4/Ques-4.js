// 4. Write a program to convert given string to upperCase OR lowerCase
const toUpperCase = (string) => {
  let finalString = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) >= "a" && string.charAt(i) <= "z") {
      finalString += String.fromCharCode(string.charCodeAt(i) - 97 + 65);
    } else {
      finalString += string.charAt(i);
    }
  }
  return finalString;
};

const upperCaseAns = toUpperCase("Vinay");
console.log(upperCaseAns);

const toLowerCase = (string) => {
  let finalString = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) >= "A" && string.charAt(i) <= "Z") {
      finalString += String.fromCharCode(string.charCodeAt(i) - 65 + 97);
    } else {
      finalString += string.charAt(i);
    }
  }
  return finalString;
};

const lowerCaseAns = toLowerCase("Vinay");
console.log(lowerCaseAns);
