// function Pipe(constructor: Function) {
//   console.log('Pipe decorator called');
//   constructor.prototype.pipe = true;
// }

// type ComponentOptions = {
//   selector?: string;
// };

// // Decorator Factory
// function Component(value: ComponentOptions): ClassDecorator {
//   return (constructor: Function) => {
//     console.log('Component decorator called');
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.options = value;
//     constructor.prototype.insertInDOM = () => {
//       console.log('Inserting the component in the DOM');
//     };
//   };
// }

// @Component({ selector: '#my-profile' })
// @Pipe
// class ProfileComponent {}

// METHOD DECORATOR
// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function;
//   descriptor.value = function (...args: any) {
//     console.log(`Before`);
//     original.call(this, ...args);
//     console.log(`After`);
//   };
// }

// class Person {
//   @Log
//   say(message: string) {
//     console.log('Person says ' + message);
//   }
// }

// let person = new Person();
// person.say('Hello');

// ACCESSOR DECORATOR
// function Capitalize(
//   target: any,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const original = descriptor.get;
//   descriptor.get = function () {
//     const result = original?.call(this);
//     if (typeof result === 'string') {
//       return result.toUpperCase();
//     }
//     return result;
//   };
// }

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   @Capitalize
//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// let person = new Person('justin', 'sixsmith');
// console.log(person.fullName);

// PROPERTY DECORATOR
// function MinLength(length: number) {
//   return (target: any, propertyName: string) => {
//     let value: string;

//     const descriptor: PropertyDescriptor = {
//       get() {
//         return value;
//       },
//       set(newValue: string) {
//         if (newValue.length < length) {
//           throw new Error(`Value must be at least ${length} characters long`);
//         }
//         value = newValue;
//       },
//     };
//     Object.defineProperty(target, propertyName, descriptor);
//   };
// }

// class User {
//   @MinLength(4)
//   password: string;

//   constructor(password: string) {
//     this.password = password;
//   }
// }

// let user = new User('password');
// console.log(user.password);

// Parameter Decorator
type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameter: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameter.push({ methodName, parameterIndex });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(watchedParameter);
