// class Dog {
//   bark() {}
// }

// class Cat {
//   meow() {}
// }

// function makeSound(animal: Dog | Cat) {
//   if (animal instanceof Dog) {
//     animal.bark(); // Dog
//   } else {
//     animal.meow(); // Cat
//   }
// }

// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }

//     doSleep(numberOfhours: number) {
//         console.log(`${this.name} regular ${numberOfhours} ghonta ghumai`)
//     }
// }

// class Student extends Person {
//     constructor(name: string) {
//         super(name);
//     }

//     doStudy(numberOfhours: number) {
//         console.log(`${this.name} regular ${numberOfhours} ghonta study kore`)
//     }
// }

// class Teacher extends Person {
//     constructor(name: string) {
//         super(name);
//     }

//     takeClass(numberOfhours: number) {
//         console.log(`${this.name} regular ${numberOfhours} ghonta class nei`)
//     }
// }

// // function guard
// const isStudent = (user: Person)=>{
//     return user instanceof Student; // user is Student
// }

// const isTeacher = (user: Person)=>{
//     return user instanceof Teacher; // teacher is Teacher
// }

// const getUserInfo = (user: Person) => {
//     if (isStudent(user)) {
//         student1.doStudy(10);
//     } else if(isTeacher(user)){
//         teacher1.takeClass(5);
//     }
//     else{
//         user.doSleep(6);
//     }
// }

// const student1 = new Student("Mr. Student");
// const teacher1 = new Teacher("Mr. Teacher");

// getUserInfo(student1);

class Admin {
    manageSystem() {
        console.log("Admin managing system");
    }
}

class User {
    browse() {
        console.log("User browsing");
    }
}

const handleUser = (user: User | Admin) => {
    if (user instanceof Admin) {
        user.manageSystem();   /// Admin case
    } else {
        user.browse();         // User case
    }
}

// objects
const admin1 = new Admin();
const user1 = new User();

// function call
handleUser(admin1);
handleUser(user1);