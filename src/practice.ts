const products = [
    { name: "Phone", price: 10000 },
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];

// const getProducts = products.filter((product) => {
//     return product.price > 2000;
// })

// console.log(getProducts);

const productNames = products.map((product) => product.name);

// console.log(productNames);

const totaled = products.reduce((sum, product) => {
    return sum + product.price;
}, 0)

console.log(totaled);