// Task 1: Optional Shopping Cart (EASY)
// type CartItem = {
//     name: string;
//     price: number;
//     quantity?: number;
// };

// const calculateTotal = (item: CartItem): number => {
//     const { price, quantity = 1 } = item;
//     return price * quantity
// };

// console.log(calculateTotal({ name: "Pen", price: 10 }));
// console.log(calculateTotal({ name: "Book", price: 50, quantity: 3 }));

// type Item = {
//     name: string;
//     price: number;
//     quantity?: number;
// };

// const calculatePrice = (item: Item) => {
//     const { price, quantity = 1 } = item;
//     return price * quantity
// }

// Task 2: Merging User Profiles EASY

// type Person = { name: string; age: number };
// type JobDetails = { role: string; salary: number };

// type Employee = Person & JobDetails;

// const getProfile = (employee: Employee): string => {
//     return `Name: ${employee.name}, Roles: ${employee.role}`;
// };

// const employee1: Employee = {
//     name: "Alamin",
//     age: 21,
//     role: "Developer",
//     salary: 50000,
// };

// console.log(getProfile(employee1));

// type Student = { name: string; id: number };
// type Course = { courseName: string; credit: number };

// type StudentProfile = Student & Course;

// const getStudentInfo = (student: StudentProfile): string => {
//     return `Name: ${student.name}, Course: ${student.courseName}`;
// };

// const student1: StudentProfile = {
//     name: "Alamin",
//     id: 101,
//     courseName: "TypeScript",
//     credit: 3
// };

// console.log(getStudentInfo(student1));

type UserResponse = {
    info?: {
        address?: {
            zipcode?: string;
        };
    };
};

const user3 = {
    info: {
        address: {}
    }
};

const getZipCode = (user: UserResponse) => {
    return user?.info?.address?.zipcode ?? "00000";
}

// console.log(getZipCode(user3));


// let secretValue: unknown = "typescript is awesome";

// let upperValue = (secretValue as string).toLowerCase();

// console.log(upperValue);

// let value: unknown = 123.456;

// let fixedValue = (value as number).toFixed(2);
// console.log(fixedValue);

// let data: unknown = "Hello TypeScript";
// let dataLength = (data as string).length;
// console.log(dataLength);

// let numbers: unknown = [10, 20, 30, 40];

// let sumNumber = (numbers as number[]);
// const totalNumber = sumNumber.reduce((sum, total) => {
//     return sum + total;
// }, 0)

// console.log(totalNumber);

// let input: unknown = "500";

// let assertString = (input as string)
// let result = Number(assertString) + 100;
// console.log(result);


// const logLength = <T extends { length: number }>(input: T): number => {
//     return input.length;
// };

// const result1 = logLength("Hello");       // 5
// const result2 = logLength([1, 2, 3, 4]);  // 4

// console.log(result1);
// console.log(result2);

// const getFirstElement = <T>(input: T[]): T | undefined => {
//     return input[input.length -1];
// };

// const result1 = getFirstElement([10, 20, 30, 40, 50]); 
// console.log(result1); // 10

// const result2 = getFirstElement(["a", "b", "c", "d", "e"]);
// console.log(result2); // "a"

