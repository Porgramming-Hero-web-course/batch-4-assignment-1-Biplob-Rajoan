# The Importance of Union and Intersection Types in TypeScript

Union Types: 
Union types give us the ability to use a single variable to hold multiple possible types, instead of creating separate variables for each type. A variable that could either be a number or a string, we don’t have to create two separate variables. Instead, we can use a union type to allow both, keeping our code clean and adaptable while still ensuring type safety.

let param1: number = 20;  let param2: string = '20';

with union type, we can simplify things by allowing either type in a single variable:
let param1: number | string = 20; 
param1 = '20';


Intersection Types: 
Intersection types help when we need a type that combines properties from several types. We use it When we need an object that fulfills the requirements of multiple types at once.

interface Person { name: string; age: number; }

interface Employee { employeeId: number; department: string; }

type EmployeeDetails = Person & Employee;



