// let age: number = 20;
// if (age < 50) age += 10;
// console.log(age);

// let sales = 123_456_789;
// let course = 'TypeScript';
// let isPublished = true;
// let level;

// function render(document) {
//   console.log(document);
// }

// let numbers: number[] = [];
// numbers.forEach(n => n)

// let user: [number, string] = [1, 'John'];

// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022) return income * 1.2;
//   return income * 1.3;
// }

// calculateTax(10_000);

// // Type alias
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// // Employee object
// let employee: Employee = {
//   id: 1,
//   name: 'John',
//   retire: (date: Date) => console.log(date),
// };

// UNION TYPE
// function kgToLbs(weight: number | string): number {
//   // Narrowing
//   if (typeof weight === 'number') return weight * 2.2;
//   else return parseInt(weight) * 2.2;
// }

// kgToLbs(10);
// kgToLbs('10');

// // INTERSECTION TYPE
// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// LITERAL TYPE
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch';

// NULLABLE TYPE
// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase());
//   else console.log('Hola!');
// }

// greet(undefined);

// type Customer = {
//   birthday?: Date;
// };

// function getCustomer(id: number): Customer | null {
//   return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(1);
// // Optional property access operator
// console.log(customer?.birthday?.getFullYear());

// // Optional element access operator
// // customer?.[0]

// // Optional call
// let log: any = null;
// log?.('a');

// Nullish coalescing operator
// let speed: number | null = null;
// let ride = {
//   speed: speed ?? 30,
// };

// TYPE ASSERTIONS
// let phone = <HTMLInputElement>document.getElementById('phone');
// phone.value;

// UNKNOWN TYPE ASSERTION
// function render(document: unknown) {
//   // Narrowing
//   if (typeof document === 'string') {
//     document.toUpperCase();
//   }
//   document.move();
//   document.fly();
//   document.whateverWeWant();
// }

// NEVER TYPE ASSERTION
// function reject(message: string): never {
//   throw new Error(message);
// }

// function processEvents(): never {
//   while (true) {
//     // Read a message from the queueu
//   }
// }

// reject('...');
// console.log('Hello World!');

// type Bird = {
//   fly: () => void;
// };

// type Fish = {
//   swim: () => void;
// };

// type Pet = Bird | Fish;

// type Days =
//   | 'Monday'
//   | 'Tuesday'
//   | 'Wednesday'
//   | 'Thursday'
//   | 'Friday'
//   | 'Saturday'
//   | 'Sunday';

// letuser = getUser();
// console.log(user?.address?.street);

// letx = foo ?? bar();
