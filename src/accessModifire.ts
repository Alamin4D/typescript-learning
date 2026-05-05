class BankAccount {
    readonly userId: number;
    userName: string;
    protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addBalance(balance: number) {
        this.userBalance = this.userBalance + balance;
    }
}

class StudentBankAccount extends BankAccount {
    addBalance(balance: number) {
        if (balance < 10) {
            console.log("Minimum deposit for student is 10");
        } else {
            super.addBalance(balance);
        }
    }
}

const student = new StudentBankAccount(1, "Alamin", 50);
student.addBalance(5);   // warning
student.addBalance(20);  // added

console.log(student);