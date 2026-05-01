type User = {
    name: string;
    age: number;
    isActive: boolean;
};

const user1: User = {
    name: "Alamin",
    age: 22,
    isActive: true,
};

console.log(user1);

const user2: User = {
    name: "Mizan",
    age: 22,
    isActive: false,
}

console.log(user2);

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
    return a + b;
};

console.log(add(5, 3)); // 8

type Subtract = (x: number, y: number) => number;

const subtract : Subtract = (x, y) => {
    return x - y;
}

console.log(subtract(13, 5));