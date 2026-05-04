const arrayOfNumber: number[] = [1, 2, 3, 4];
const arrayOfString: string[] = ["alamin", "mizan", "ratul"];

const arrayOfStringUsingMap: string[] = arrayOfNumber.map((number) => number.toString());
// console.log(arrayOfStringUsingMap);

type User = {
    name: string;
    age: number;
};

type Keys = keyof User;
// "name" | "age"

type NewUser = {
    [K in keyof User]: User[K];
}

