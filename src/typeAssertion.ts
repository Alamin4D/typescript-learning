let anything: any;
anything = "222";
(anything as string)

// const kgToGrmConverter = (input: string | number): string | number | undefined => {
//     if (typeof input === "number") {
//         return input * 1000;
//     } else if (typeof input === "string") {
//         const [value] = input.split(" ");
//         return `Converted output is ${Number(value) * 1000}`;
//     }
// }

// const result1 = kgToGrmConverter(2) as number;
// console.log({ result1 });
// const result2 = kgToGrmConverter("2 kg");
// console.log({ result2 });


const meterToCmConverter = (input: string | number): string | number | undefined => {
    if (typeof input === "number") {
        return input * 100;
    } else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Converted output is ${Number(value)* 100}`;
    }
}

const result1 = meterToCmConverter(3);
console.log({result1});
const result2 = meterToCmConverter("3 cm");
console.log({result2});