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

// class Account {
//   nickname?: string;

//   constructor(
//     public readonly id: number,
//     public owner: string,
//     private _balance: number
//   ) {}

//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error('Invalid amount');
//     // Record a transaction
//     this._balance += amount;
//   }

//   //   private calculateTax() {
//   //     return this._balance * 8.25;
//   //   }

//   get balance() {
//     return this._balance;
//   }
// }

// let account = new Account(1, 'John', 0);
// account.deposit(100);

// class SeatAssignment {
//   // Index signature property
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();
// seats.A1 = 'Mosh';
// seats.A2 = 'John';

// // Static Members
// class Ride {
//   private static _activeRides: number = 0;

//   start() {
//     Ride._activeRides++;
//   }

//   stop() {
//     Ride._activeRides--;
//   }

//   static get activeRides() {
//     return Ride._activeRides;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(Ride.activeRides);

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   walk() {
//     console.log('Walking...');
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log('Testing...');
//   }
// }

// class Teacher extends Person {
//   override get fullName(): string {
//     return `Professor ${super.fullName}`;
//   }
// }

// class Principal extends Person {
//   override get fullName(): string {
//     return `Professor ${super.fullName}`;
//   }
// }

// printNames([
//   new Person('Pete', 'Smith'),
//   new Student(1, 'Bill', 'Dill'),
//   new Teacher('Mary', 'Deer'),
//   new Principal('John', 'Doe'),
// ]);

// function printNames(people: Person[]) {
//   for (let person of people) {
//     console.log(person.fullName);
//   }
// }

// abstract class Shape {
//   constructor(public color: string) {}

//   abstract render(): void;
// }

// class Circle extends Shape {
//   constructor(public radius: number, color: string) {
//     super(color);
//   }
//   override render(): void {
//     console.log('rendering circle');
//   }
// }

// let shape = new Circle(1, 'red');
// shape.render();

// abstract class Calander {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calander {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calander {
  sync(): void;
}

class GoogleCalendar implements Calander {
  name: string;
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error('Method not implemented.');
  }
  removeEvent(): void {
    throw new Error('Method not implemented.');
  }
}
