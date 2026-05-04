// function getUserInfo <T, R extends "Developer">(name: T, role: R){
//  return {
//     name,
//     role,
//  };
// };

// const result = getUserInfo("Alamin", "Developer");
// console.log(result);


// function createProduct<T, C extends "electronics" | "grocery" | "fashion">(name: T, price: number, category: C) {
//     return {
//         name,
//         price,
//         category,
//     };
// };

// const result = createProduct("alamin", 20, "electronics");
// console.log(result);

// const createProduct = <T, C extends "electronics" | "grocery" | "fashion">(name: T, price: number, quantity: number, isAvailable: boolean, category: C): { name: T, price: number, quantity: number, isAvailable: boolean, category: C } => {
//     return {
//         name,
//         price,
//         quantity,
//         isAvailable,
//         category,
//     };
// };

// const result = createProduct("Alamin", 20, 2, true, 'electronics');


// Clean code with alias

// type Category = "electronics" | "grocery" | "fashion";

// type Product<T> = {
//   name: T;
//   price: number;
//   quantity: number;
//   isAvailable: boolean;
//   category: Category;
// };

// const createProduct = <T>(
//   name: T,
//   price: number,
//   quantity: number,
//   isAvailable: boolean,
//   category: Category
// ): Product<T> => {
//   return {
//     name,
//     price,
//     quantity,
//     isAvailable,
//     category,
//   };
// };

// const result = createProduct(
//   "Alamin",
//   20,
//   2,
//   true,
//   "electronics"
// );

// console.log(result);

type Category = "electronics" | "grocery" | "fashion";

type Product<T> = {
    name: T;
    price: number;
    quantity: number;
    isAvailable: boolean;
    category: Category;
}

const createProduct = <T>(name: T, price: number, quantity: number, isAvailable: boolean, category: Category): Product<T> => {
    return {
        name,
        price,
        quantity,
        isAvailable,
        category,
    };
};

const result = createProduct(
  "Alamin",
  20,
  2,
  true,
  "electronics"
);

console.log(result);