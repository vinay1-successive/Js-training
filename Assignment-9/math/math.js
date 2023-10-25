import { validateValue } from "./validate.js";
export const sum = (value1, value2) => {
  if (validateValue(value1) && validateValue(value2)) {
    return value1 + value2;
  }
  return "Wrong input";
};
export const subtract = (value1, value2) => {
  if (validateValue(value1) && validateValue(value2)) {
    return value1 - value2;
  }
  return "Wrong input";
};
