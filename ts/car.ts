// 1. Define a Vehicle interface
interface Vehicle {
    make: string;   // Vehicle make (e.g., Toyota)
    model: string;  // Vehicle model (e.g., Corolla)
    year: number;   // Vehicle manufacturing year
    start(): void;  // Method that returns nothing (void) and starts the engine
}

// 2. Create a Car class that implements the Vehicle interface
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    // Constructor to initialize make, model, and year
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Implementation of the start method
    start(): void {
        console.log("Car engine started");  // Logs "Car engine started" to the console
    }
}

// 3. Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2020);

// 4. Call the start method to verify the output
myCar.start();  // Outputs: "Car engine started"
