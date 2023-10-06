// 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

const isAlphanumeric = (str) => {
  return /^[a-zA-Z0-9]+$/.test(str);
};

const camelCase = (word) => {
  let finalString = "";
  word = word.trim();
  let arr = word.split(" ");
  arr = arr.filter((value) => value.length > 0);
  arr.forEach((element, index) => {
    element = element.toLowerCase();
    if (index >= 1) {
      if (!isAlphanumeric(element)) {
        for (let i = 0; i < element.length; i++) {
          if (i == 0) {
            finalString += String.fromCharCode(element.charCodeAt(i) - 97 + 65);
          } else {
            finalString += element[i];
          }
        }
      } else {
        if (element.charAt(0) >= "0" && element.charAt(0) <= "9") {
          finalString += element;
        } else {
          finalString += String.fromCharCode(element.charCodeAt(0) - 97 + 65);
          finalString += element.substring(1);
        }
      }
    } else {
      finalString += element;
    }
  });

  return finalString;
};

const ans = camelCase("Hello   joHn   Doe asa");
console.log(ans);
