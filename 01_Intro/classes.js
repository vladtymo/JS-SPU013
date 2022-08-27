// -=-=-=-=-=-=-=-=- Classes -=-=-=-=-=-=-=-=-
class Car {
    constructor(model, year, color, power) {
        this.model = model;
        this.year = year;
        this._color = color;
        this.power = power;
    }

    get hourses() {
        return this.power * 1.2;
    }
    set color(newColor) {
        if (newColor != '')
            this._color = newColor;
    }

    print() {
        console.log(`Model: ${this.model} ${this.year}, ${this._color} ${this.power}kWh`);
    }
    boost() {
        this.power += 15;
    }
}

const myCar = new Car("Nissan", 2012, "Dark Blue", 90);
const yourCar = new Car("Toyota", 2021, "Black", 240);

myCar.color = ''; // ignore
myCar.print();
console.log(`Horses: ${myCar.hourses}`);

// -=-=-=-=-=-=-=-=- Inheritance -=-=-=-=-=-=-=-=-
class SportCar extends Car {
    constructor(model, year, color, power, turbo) {
        // invole base constructor
        super(model, year, color, power);
        this.turbo = turbo;
    }

    enableTurbo() {
        this.boost();
        this.boost();
        this.boost();
    }
}

const sportCar = new SportCar("Nissan GT-R", 2018, "Blue", 560);
sportCar.print();
sportCar.enableTurbo();
sportCar.print();