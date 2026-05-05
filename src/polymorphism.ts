class Animal {
    makeSound() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach(animal => animal.makeSound());


class Notification {
    send(message: string): void {
        console.log("Sending notification");
    }
}

class EmailNotification extends Notification {
    send(message: string): void {
        console.log(`Sending Email: ${message}`);
    }
}

class SMSNotification extends Notification {
    send(message: string): void {
        console.log(`Sending SMS: ${message}`);
    }
}

class PushNotification extends Notification {
    send(message: string): void {
        console.log(`Sending Push Notification: ${message}`);
    }
}

class PopNotification extends Notification{
    send(message: string): void {
        console.log(`Sending Pop Notification: ${message}`);
    }
}

const notifications: Notification[] = [
    new EmailNotification(),
    new SMSNotification(),
    new PushNotification(),
    new PopNotification(),
];

notifications.forEach((notification) => notification.send("Hello"));