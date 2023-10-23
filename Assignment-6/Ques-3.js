// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
class Person {
  #name;
  #age;
  #gender;
  #interests;
  constructor(name, age, gender, interests) {
    this.#name = this.cheackStringValue(name)
      ? name
      : console.log("Invalid Name");
    this.#age = this.cheackValue(age) ? age : console.log("Invalid Age");
    this.#gender = this.cheackStringValue(gender)
      ? gender
      : console.log("Invalid gender");
    this.#interests = this.cheackStringValue(interests)
      ? interests
      : console.log("Invalid interests");
  }
  cheackValue(value) {
    if (value == null || value <= 0 || typeof value === "string") {
      return false;
    }
    return true;
  }
  cheackStringValue(value) {
    if (value === "" || value == null) {
      return false;
    }
    return true;
  }
  setName(name) {
    if (name === "") {
      throw "Name Cannot Be Null";
    }
    this.#name = name;
  }
  setAge(age) {
    if (age <= 0 && age > 100) {
      throw "Invalid Age!!";
    }
    this.#age = age;
  }
  setGender(gender) {
    if (gender !== "male" && gender !== "female" && gender !== "trans") {
      throw "There are only Three genders";
    }
    this.#gender = gender;
  }
  setInterests(interests) {
    if (interests === "") {
      throw "interests Cannot Be Null";
    }
    this.#interests = interests;
  }
  getName() {
    return this.#name;
  }
  getAge() {
    return this.#age;
  }
  getGender() {
    return this.#gender;
  }
  getInterests() {
    return this.#interests;
  }

  greeting() {
    return `Hello my name is ${this.#name} and i am ${
      this.#age
    } years old and my gender is ${this.#gender} and i like ${this.#interests}`;
  }
  farewell() {
    return `Goodbye ${this.#name}`;
  }
}

// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.

class Student extends Person {
  #studies;
  constructor(name, age, gender, interests, studies) {
    super(name, age, gender, interests);
    this.#studies = this.cheackStringValue(studies)
      ? studies
      : console.log("Invalid subject");
  }

  greeting() {
    return `Hello my name is ${this.getName()} and i am ${this.getAge()} year old and my gender is ${this.getGender()} and i like ${this.getInterests()} and i am studing ${
      this.#studies
    }`;
  }
}

const Obj2 = new Student("Vinay", 22, "male", "Cricket", "Maths");
console.log(Obj2.greeting());

// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Teacher extends Person {
  #subjectsTaught;
  constructor(name, age, gender, interests, subjectsTaught) {
    super(name, age, gender, interests);
    if (subjectsTaught == null || subjectsTaught.length == 0) {
      console.log("Invalid Input");
    } else {
      this.#subjectsTaught = subjectsTaught;
    }
  }

  farewell() {
    return `Teacher teaches ${this.#subjectsTaught}`;
  }
}

const Obj3 = new Teacher("Vinay", 22, "male", "Cricket", ["Maths", "Physics"]);
console.log(Obj3.farewell());
