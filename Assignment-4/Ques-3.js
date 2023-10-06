// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

const removeDuplicate = (str) => {
  let finalString = "";
  for (let i = 0; i < str.length; i++) {
    if (finalString.indexOf(str.charAt(i)) == -1) {
      finalString = finalString + str.charAt(i);
    }
  }
  return finalString;
};

const countOccurence = (string) => {
  let finalString = "";
  const newString = removeDuplicate(string);
  for (let i = 0; i < newString.length; i++) {
    let count = 0;
    for (let j = 0; j < string.length; j++) {
      if (string.charAt(j) == newString.charAt(i)) {
        count++;
      }
    }
    finalString += newString.charAt(i) + count;
  }
  return finalString;
};

const ans = countOccurence("abcabcdabbcc");
console.log(ans);
