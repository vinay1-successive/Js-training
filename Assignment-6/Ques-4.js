// 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  averageAge(arr) {
    let avgAge = 0;
    arr.forEach((element) => {
      avgAge += element.age;
    });
    return avgAge / arr.length;
  }
}
const obj = new Person();
const obj1 = new Person("Vinay", "Tomar", 22);
const obj2 = new Person("Vinay1", "Tomar1", 62);
const obj3 = new Person("Vinay2", "Tomar2", 32);
const obj4 = new Person("Vinay3", "Tomar3", 12);
const obj5 = new Person("Vinay4", "Tomar4", 72);

console.log(obj.averageAge([obj1, obj2, obj3, obj4, obj5]));
