interface MediaPlayer {
    play(): void;
    pause(): void;
    exit(): void;
};

class MusicPlayer implements MediaPlayer {
    play() {
        console.log("Playing music...")
    }
    pause() {
        console.log("Music paused...")
    }
    exit() {
        console.log("Exiting music...")
    }
}

const alaminPlayer = new MusicPlayer();
alaminPlayer.play();


// abstract

abstract class Vehicle {
    // abstract method
    abstract startEngine(): void;

    // normal method
    stopEngine(): void {
        console.log("Engine stopped");
    }
}

// Car class
class Car extends Vehicle {
    startEngine(): void {
        console.log("Car engine started");
    }
}

// Bike class
class Bike extends Vehicle {
    startEngine(): void {
        console.log("Bike engine started");
    }
}

// object create
const car = new Car();
const bike = new Bike();

// method call
car.startEngine();   // Car engine started
bike.startEngine();  // Bike engine started
car.stopEngine();    // Engine stopped


abstract class Employee {
    // abstract method
    abstract calculateSalary(): number;

    // normal method
    showDetails() {
        console.log("Employee details shown");
    }
}

class FullTimeEmployee extends Employee {
    monthlySalary: number;
    constructor(monthlySalary: number) {
        super();
        this.monthlySalary = monthlySalary
    }

    calculateSalary(): number {
        return this.monthlySalary;
    }
}

class PartTimeEmployee extends Employee {
    hourlyRate: number;
    hoursWorked: number;
    constructor(hourlyRate: number, hoursWorked: number) {
        super();
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const fullTime = new FullTimeEmployee(50000);
const partTime = new PartTimeEmployee(100, 80);

console.log("Full Time Salary:", fullTime.calculateSalary());
console.log("Part Time Salary:", partTime.calculateSalary());
fullTime.showDetails();