// array, object

const array: number[] = [1, 2, 3, 4, 5];
array.push(123)

let bazarList: string[] = ["eggs", "milk", "potato", "sugar"];
bazarList.push("banana");

let mixedArr: (string | number)[] = ["apple", 1, "banana", 12, "eggs", "sugar", 2];
mixedArr.push("orange");

let destination: [string, string, number] = ["Dhaka", "Chuadanga", 6] // That's means tuple


// reference type : object

const user: {
    organization: "Programming Hero"; //value=> type: literal type
    firstName: string;
    middleName?: string;  // optional type
    lastName: string;
    isMarried: boolean;
} = {
    organization: "Programming Hero",
    firstName: "Alamin",
    lastName: "Ahmed",
    isMarried: false,
}

// user.organization = "Programming Hero Student";
console.log(user);