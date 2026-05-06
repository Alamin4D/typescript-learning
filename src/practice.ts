//? Task 1: The "Optional" Shopping Cart

type CartItem = {
    name: string;
    price: number;
    quantity?: number;
};

function calculateTotal(item: CartItem): number {
    // destructuring + default value
    const { price, quantity = 1 } = item;
    return price * quantity;
}

const item1 = { name: "Book", price: 100 };
console.log(calculateTotal(item1));
// Output: 100 (quantity = 1 ধরা হয়েছে)

const item2 = { name: "Pen", price: 20, quantity: 3 };
console.log(calculateTotal(item2));
// Output: 60


//? Task 2: Merging User Profiles

type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

// intersection type
type Employee = Person & JobDetails;

function getProfile(employee: Employee): string {
    const { name, role } = employee; // destructuring
    return `Name: ${employee.name}, Role: ${employee.role}`;
}

const emp1: Employee = {
    name: "Alamin",
    age: 22,
    role: "Developer",
    salary: 50000
};

console.log(getProfile(emp1));
// Output: Name: Alamin, Role: Developer


//? Task 3: The "Safe" Data Fetcher

type UserResponse = {
    info?: {
        address?: {
            zipCode?: string;
        }
    }
};

function getZipCode(user: UserResponse): string {
    return user.info?.address?.zipCode ?? "00000";
}

console.log(getZipCode({}));
// Output: "00000"

console.log(getZipCode({ info: {} }));
// Output: "00000"

console.log(getZipCode({ info: { address: {} } }));
// Output: "00000"

console.log(getZipCode({ info: { address: { zipCode: "12345" } } }));
// Output: "12345"


//? Task 4: Type Assertion

let secretValue: unknown = "typescript is awesome";

// type assertion
let upperValue = (secretValue as string).toUpperCase();

console.log(upperValue);
// Output: TYPESCRIPT IS AWESOME


//? Task 5: Generic Constraints

function logLength<T extends { length: number }>(input: T): number {
    return input.length;
}

console.log(logLength("Hello"));
// Output: 5

console.log(logLength([1, 2, 3, 4]));
// Output: 4

console.log(logLength({ length: 10 }));
// Output: 10


//? Task 6: The Property Guard

const product = { id: 101, name: "Keyboard", price: 50, quantity: 3 };

function getProductProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}


// valid ব্যবহার ✅
console.log(getProductProp(product, "name"));
// Output: "Keyboard"

console.log(getProductProp(product, "price"));
// Output: 50

console.log(getProductProp(product, "quantity"));
// Output: 3


//? Task 7: Constant Literal Types

const Colors = {
    Primary: "RED",
    Secondary: "BLUE"
} as const;

// values থেকে type বানানো
type ValidColor = typeof Colors[keyof typeof Colors];

function setColor(c: ValidColor): void {
    console.log(`Color set to ${c}`);
}

setColor("RED");   // ✅ OK
setColor("BLUE");  // ✅ OK


//? Task 8: The "Draft" Mode

interface MyDocument {
  title: string;
  content: string;
  author: string;
}

// mapped type
type Draft<T> = {
  readonly [P in keyof T]?: T[P];
};

// usage
const myDraft: Draft<MyDocument> = {
  title: "Draft Title"
};

const draft2: Draft<MyDocument> = {};
// ✅ সব optional, তাই empty object ও valid


//? Task 9: The Wrapper

// conditional type
type DataType<T> = T extends any[] ? "Large" : "Small";

type A = DataType<string[]>;  // "Large"
type B = DataType<number[]>;  // "Large"

type C = DataType<string>;    // "Small"
type D = DataType<number>;    // "Small"


//? Task 10: Utility Type (Omit)

interface UserAccount {
id: number;
username: string;
password: string;
}

type PublicUser = Omit<UserAccount, "password">;