// 3. Write a function expression that takes in another function as an argument

function getSum(value1, value2) {
  return value1 + value2;
}
function calculateSum(getSum) {
  return getSum(1, 2);
}
const sum = calculateSum(getSum);
console.log(sum);
