import validateValue from "./validate.js";
const sum = (value1, value2) => {
  if (validateValue(value1) && validateValue(value2)) {
    return value1 + value2;
  }
  return "Wrong input";
};
const subtract = (value1, value2) => {
  if (validateValue(value1) && validateValue(value2)) {
    return value1 - value2;
  }
  return "Wrong input"; 
};

export { sum, subtract };
