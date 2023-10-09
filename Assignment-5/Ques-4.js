// 4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const deepClone = (obj) => {
  if (typeof obj !== "object" && obj != null) {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }

  let copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      copy[key] = deepClone(obj[key]);
    }
  }
  return copy;
};

const obj = {
  name: "Vinay",
  address: {
    town: "Xyz",
    city: "abc",
  },
  phone: {
    mobile: "9876543210",
    landLine: "239812",
  },
  arr: [
    {
      name: "1",
    },
    {
      name: "2",
    },
  ],
  date: new Date(),
};

console.log(deepClone(obj));
