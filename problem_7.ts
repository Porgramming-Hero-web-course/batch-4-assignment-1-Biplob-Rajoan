{
    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge(): number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }

    const car = new Car("Audi", "A7", 2020);
    console.log(`My Car Age: ${car.getCarAge()} years`); 
    
}