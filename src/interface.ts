type User = {
    name: string;
    age: number;
};

interface IUser {
    name: string;
    age: number;
};

type Role = {
    role: "admin" | "user";
}

type UserWithRole = User & Role;

const user1: UserWithRole = {
    name: "Mr. x",
    age: 20,
    role: "admin",
};

const user2: IUser = {
    name: "Mr. y",
    age: 40,
};