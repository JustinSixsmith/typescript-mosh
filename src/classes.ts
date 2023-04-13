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

// interface Calander {
//   name: string;
//   addEvent(): void;
//   removeEvent(): void;
// }

// interface CloudCalendar extends Calander {
//   sync(): void;
// }

// class GoogleCalendar implements Calander {
//   name: string;
//   constructor(public name: string) {}

//   addEvent(): void {
//     throw new Error('Method not implemented.');
//   }
//   removeEvent(): void {
//     throw new Error('Method not implemented.');
//   }
// }

// class Logger {
//     constructor(public logFile: string) {}

//     log(message: string): void {
//       console.log(message);
//     }
//   }

//   class Person {
//     constructor(publicfirstName: string, publiclastName: string) {}

//     get fullName(): string {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   }

// class Employee extends Person {
//   constructor(firstName: string, lastName: string, public salary: number, ) {
//     super(firstName, lastName);
//   }

// interface Address {
//   street: string;
//   city: string;
//   zipCode: number;
// }

// interface Employee {
//   name: string;
//   salary: number;
//   addresses: Address;
// }
