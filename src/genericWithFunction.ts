// function identity<T>(value: T): T {
//     return value;
// }

// console.log(identity<number>(10));
// console.log(identity<string>("Hello"));
// console.log(identity<boolean>(true));


// const createArrayWithGeneric = <T>(value: T): T[] => {
//     return [value];
// }

// const result1 = createArrayWithGeneric<number>(10);
// console.log(result1);

// const result2 = createArrayWithGeneric<string>("hello");

// const createArrayWithGeneric = <T, U, V>(value1: T, value2: U, value3: V): [T, U, V] => {
//     return [value1, value2, value3];
// };

// const result1 = createArrayWithGeneric<number, number, number>(10, 20, 30);
// console.log(result1);

// const createArrayWithGeneric = <T, U>(value1: T, value2: U): [T, U] => {
//     return [value1, value2];
// }

// const result1 = createArrayWithGeneric<number, number>(10, 20);
// console.log(result1);


// tuple
// const createArrayWithGenericTuple = <T, U, V>(param1: T, param2: U, param3: V): [T, U, V] => {
//     return [param1, param2, param3];
// }

// const result1 = createArrayWithGenericTuple("Alamin", 25, true);
// console.log(result1);

// const createArrayWithGenericTuple = <T, U, V>(
//   param1: T,
//   param2: U,
//   param3: V
// ): [T, U, V] => {
//   return [param1, param2, param3];
// };

// const result1 = createArrayWithGenericTuple("Alamin", 25, true);

// console.log(result1); // ["Alamin", 25, true]


// const addStudentToCourse = <T>(studentInfo: T) => {
//     return {
//         course: "Next level",
//         ...studentInfo,
//     };
// };

// const student1 = {
//     id: 1,
//     name: "Alamin",
//     hasPen: true,
// };

// const student2 = {
//     id: 2,
//     name: "Jhankar Mahbub",
//     hasCar: true,
//     isMarried: true,
// };

// const result = addStudentToCourse(student1);
// console.log(result);


// const createUser = <T, U>(name: T, age: U): { name: T; age: U } => {
//     return {
//         name,
//         age,
//     };
// };

// const result = createUser("Alamin", 21);
// console.log(result);


// const createUserWithRole = <T, U, V>(name: T, age: U, role: V): {name: T, age: U, role: V} => {
//     return {
//         name,
//         age,
//         role,
//     };
// };

// const result = createUserWithRole("Alamin", 22, "Developer");
// console.log(result);

// const addMetaData = <T, U>(object1: T, object2: U):T & U => {
//     return {
//         ...object1,
//         ...object2,
//     };
// };

// const result = addMetaData(
//   { name: "Alamin", age: 22 },
//   { isAdmin: true }
// );

// console.log(result);

const addMetaData = <T, U, V>(
  object1: T,
  object2: U,
  object3: V
): T & U & V => {
  return {
    ...object1,
    ...object2,
    ...object3,
  };
};

const result = addMetaData(
  { name: "Alamin", age: 22 },
  { isAdmin: true },
  { role: "Developer" }
);

console.log(result);