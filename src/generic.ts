// type Developer<T> = {
//     name: string;
//     age: number;
//     pagol: T;
// };

// const poorDeveloper: Developer<{ name: "hp", price: 50000 }> = {
//     age: 20,
//     name: "Alamin",
//     pagol: { name: "hp", price: 50000 }
// }

// const richDeveloper: Developer<{ name: "mac", price: 300000, color: "Black", address: "Chuadanga" }> = {
//     age: 23,
//     name: "Ruhan",
//     pagol: {name: "mac", price:300000, color: "Black", address: "Chuadanga"}
// }

// console.log(richDeveloper);

// type Students<T> = {
//     name: string;
//     age: number;
//     extra: T;
// };

// const students1: Students<{ laptop: string; codingLevel: number }> = {
//     name: "Alamin",
//     age: 21,
//     extra: {
//         laptop: "Dell",
//         codingLevel: 8,
//     },
// };

// console.log(students1);

type Employee<T> = {
    name: string;
    role: string;
    details: T;
};

const employee1: Employee<{ framework: string; experience: number }> = {
    name: "Alamin",
    role: "Frontend Developer",
    details: {
        framework: "React",
        experience: 2,
    },
};

const employee2: Employee<{ database: string; apiCount: number }> = {
    name: "Alamin",
    role: "Backend Developer",
    details: {
        database: "MySQL",
        apiCount: 2,
    },
};

const employee3: Employee<{ frontend: string; backend: string; projects: number }> = {
    name: "Alamin",
    role: "Full Stack Developer",
    details: {
        frontend: "React",
        backend: "Node.js",
        projects: 3,
    },
};

console.log(employee1, employee2, employee3);


const numbers: Array<number> = [1, 2, 3, 4];

// const users: Array<string> = ["Alamin", "Rahim", "Karim"];

const flags: Array<boolean> = [true, false, true];

// object array
type User ={
    name: string;
    age: number;
};

const users: Array<User> = [
    { name: "Alamin", age: 21 },
    { name: "Rahim", age: 25 },
];

console.log(users)