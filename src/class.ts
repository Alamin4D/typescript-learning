//oop -> class -> object

class Car {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log("Car is starting");
  }
}

const car1 = new Car("Toyota", "Corolla");
car1.start();

class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string){
        this.name= name;
        this.species = species;
        this.sound = sound;
    }

    catSound(){
        console.log(`${this.name} is making sound: ${this.sound}`);
    }

}


const cat = new Animal("cat mama", "cat", "meaw meaw");
cat.catSound();



class Phone {
    name: string;
    model: string;
    price: number;

    constructor (name: string, model: string, price: number){
        this.name = name;
        this.model = model;
        this.price = price;
    }

    showInfo(){
        console.log(this.name + " costs " + this.price);
    }

}

const phone1 = new Phone("Samsung", "Samsung s20 Ultra", 100000);
phone1.showInfo();