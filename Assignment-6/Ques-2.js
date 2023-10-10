// 2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape {
  #width;
  #height;
  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }
  setWidth(width) {
    if (width <= 0) {
      throw "Invalid Value for width";
    }
    this.#width = width;
  }
  setHeight(height) {
    if (height <= 0) {
      throw "Invalid Value for height";
    }
    this.#height = height;
  }
  getWidth() {
    return this.#width;
  }
  getHeight() {
    return this.#height;
  }
  getArea() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return this.getHeight() * this.getWidth();
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return (this.getHeight() * this.getWidth()) / 2;
  }
}

const rect = new Rectangle(3, 4);
console.log(rect.getArea());
const tri = new Triangle(5, 6);
console.log(tri.getArea());
