// 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName, age) {
    if (firstName === "" || firstName == null) {
      throw new Error("Invalid Input");
    } else {
      this.#firstName = firstName;
    }
    if (lastName === "" || lastName == null) {
      throw new Error("Invalid Input");
    } else {
      this.#lastName = lastName;
    }
    this.age = this.cheackValue(age) ? age : console.log("Invalid Age");
  }
  cheackValue(value) {
    if (value == null || value <= 0 || typeof value === "string") {
      return false;
    }
    return true;
  }
  fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }
  averageAge(arr) {
    let avgAge = 0;

    arr.forEach((element) => {
      if (typeof element.age === "string") {
        throw new Error("Invalid");
      }
      avgAge += element.age;
    });
    return avgAge / arr.length;
  }
}

try {
  const obj = new Person("Vinay", "Tomar", 22);
  console.log(obj.fullName());
  const person = [
    {
      firstName: "Vinay",
      lastName: "Tomar",
      age: 33,
    },
    {
      firstName: "Vinay",
      lastName: "Tomar",
      age: 23,
    },
    {
      firstName: "Vinay",
      lastName: "Tomar",
      age: 64,
    },
    {
      firstName: "Vinay",
      lastName: "Tomar",
      age: 32,
    },
  ];
  console.log(obj.averageAge(person));
} catch (error) {
  console.log("Invalid input");
}
