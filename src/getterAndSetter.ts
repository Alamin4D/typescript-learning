class BankAccount {
    readonly userId: number;
    userName: string;
    protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    // setter
    set balance(amount: number) {
        this.userBalance += amount;
    }

    // getter
    get balance() {
        return this.userBalance;
    }
}

const account = new BankAccount(223, "Alamin", 70);

account.balance = 100;     // setter
console.log(account.balance); // getter 👉 170