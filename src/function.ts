// function
// arrow function, normal function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;
addArrow(2, 4);


// object => function => method

const poorUser = {
    name: "alamin",
    balance: 0,
    addBalance(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}

console.log(poorUser.addBalance(6));


const arr: number[] = [1, 2, 3];
const squareArray = arr.map((ele: number): number => ele * 2)

console.log(squareArray);