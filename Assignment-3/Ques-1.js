// 1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)

const calculator = (value1, value2, operator) => {
  switch (operator) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value1 / value2;
      break;
    default:
      return "Wrong input";
  }
};

const ans = calculator(3, 4, "+");
console.log(ans);
