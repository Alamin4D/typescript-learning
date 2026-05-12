class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}


// Student inherits from Person
class Student extends Person {
  course: string;

  constructor(name: string, age: number, course: string) {
    super(name, age); // parent constructor call
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}

const student1 = new Student("Alamin", 22, "Web Development");

student1.introduce(); // from Person
student1.study();     // from Student