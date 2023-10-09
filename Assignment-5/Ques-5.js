// 5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

const obj = {
  id: 1,
  fraction: {
    nemo: 10,
    deno: 20,
    geno: { a: 10, b: [3, 4, 5] },
  },
  array: [1, 2, 3, 4, [6, 7]],
  name: "someName",
  date: new Date(),
  func: () => {
    return "Hello World!";
  },
};

const flattenObject = (obj, previousKey = "") => {
  return Object.keys(obj).reduce((acc, currKey) => {
    const newKey = previousKey ? `${previousKey}.${currKey}` : currKey;
    if (
      typeof obj[currKey] === "object" &&
      obj[currKey] != null &&
      !Array.isArray(obj[currKey])
    ) {
      if (obj[currKey] instanceof Date) {
        acc[newKey] = obj[currKey];
      } else {
        Object.assign(acc, flattenObject(obj[currKey], newKey));
      }
    } else if (Array.isArray(obj[currKey])) {
      obj[currKey].forEach((element, index) => {
        const arrKey = `${newKey}.${index}`;
        if (Array.isArray(element)) {
          Object.assign(acc, flattenObject(element, arrKey));
        } else {
          acc[arrKey] = element;
        }
      });
    } else {
      acc[newKey] = obj[currKey];
    }
    return acc;
  }, {});
};

console.log(obj);
console.log(flattenObject(obj));
