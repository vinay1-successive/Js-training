// 3. Write a function expression that takes in another function as an argument

function get_sum(value1, value2) {
  return value1 + value2;
}
function Calculate_sum(get_sum) {
  return get_sum(1, 2);
}
const sum = Calculate_sum(get_sum);
console.log(sum);
