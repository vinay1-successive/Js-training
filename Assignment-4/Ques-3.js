// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

const map = {};
const countOccurence = (str) => {
  Array.from(str).forEach((element) => {
    map[element] = map.hasOwnProperty(element) ? map[element] + 1 : 1;
  });
  let finalString = "";
  Object.keys(map).forEach((element) => {
    finalString += element + map[element];
  });
  return finalString;
};
console.log(countOccurence("abcabcdabbcc332323"));
