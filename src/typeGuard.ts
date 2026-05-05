// function printValue(value: string | number) {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase()); // এখানে string
//   } else {
//     console.log(value.toFixed(2)); // এখানে number
//   }
// }


// const add = (num1: number | string, num2: number | string) : string | number => {
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         return num1 + num2;
//     }
//     else{
//         return num1.toString() + num2.toString();
//     }
// }

// console.log(add(2, "3"));

// in operator

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: string;
}

const getUserInfo = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
        console.log(`${user.name} and his role is: ${user.role}`);
    }
    else{
        console.log(`${user.name}`);
    }
}

getUserInfo({name: "Normal", role: "Admin"});