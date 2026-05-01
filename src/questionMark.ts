const biyerJonnoEligible = (age: number) => {
    // if (age >= 21) {
    //     console.log("You are eligible");
    // }
    // else {
    //     console.log("You are not eligible");
    // }
    const result = age >= 21 ? "You are eligible" : "You are not eligible!"
    console.log(result);
}

biyerJonnoEligible(30);

const theme = null;

const selectedTheme = theme ?? "Dark theme";
console.log(selectedTheme);