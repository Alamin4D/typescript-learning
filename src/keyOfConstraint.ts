const user = {
    name: "Alamin",
    age: 21,
};

const getValue = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
}

const result = getValue(user, "name");
console.log(result);