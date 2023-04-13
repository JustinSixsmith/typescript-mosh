// class KeyValuePair<K, V> {
//   constructor(public key: K, public value: V) {}
// }

// let pair = new KeyValuePair(1, 'apple');

// class ArrayUtils {
//   static wrapInArray<T>(value: T): T[] {
//     return [value];
//   }
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let wrappedNumbers = ArrayUtils.wrapInArray(numbers);

// let strings = ['a', 'b', 'c', 'd', 'e', 'f'];

// let wrappedStrings = ArrayUtils.wrapInArray(strings);

// console.log(wrappedNumbers, wrappedStrings);

// https://mywebsite.com/users
// https://mywebsite.com/products

// interface Result<T> {
//   data: T | null;
//   error: Error | null;
// }

// function fetch<T>(url: string): Result<T> {
//   return { data: null, error: null };
// }

// interface User {
//   username: string;
// }

// interface Product {
//   name: string;
// }

// let result = fetch<User>('url');

// class Person {
//   constructor(public name: string) {}
// }

// class Customer extends Person {}

// function echo<T extends Person>(value: T): T {
//   return value;
// }

// echo(new Customer('John Doe'));

// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   protected _objects: T[] = [];

//   add(obj: T): void {
//     this._objects.push(obj);
//   }
// }

// // Passing on generic type parameter
// class CompressibleStore<T> extends Store<T> {
//   compress() {}
// }

// // Restricting the genereic type parameter
// class SearchableStore<T extends { name: string }> extends Store<T> {
//   find(name: string): T | undefined {
//     return this._objects.find((obj) => obj.name === name);
//   }
// }

// // Fix the generic type parameter
// class ProductStore extends Store<Product> {
//   filterByCategory(category: string): Product[] {
//     return [];
//   }
// }

// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   protected _objects: T[] = [];

//   add(obj: T): void {
//     this._objects.push(obj);
//   }

//   find(property: keyof T, value: unknown): T | undefined {
//     return this._objects.find((obj) => obj[property] === value);
//   }
// }

// let store = new Store<Product>();
// store.add({ name: 'Apple', price: 100 });
// store find('name', 'Apple');
// store find('price', 100);

// interface Product {
//   name: string;
//   price: number;
// }

// type ReadOnly<T> = {
//   readonly [K in keyof T]: T[K];
// };

// type Optional<T> = {
//   [K in keyof T]?: T[K];
// };

// type Nullable<T> = {
//   [K in keyof T]: T[K] | null;
// };

// let product: ReadOnly<Product> = {
//   name: 'Apple',
//   price: 100,
// };

// •Convert the function below to a generic function:
// functionecho(arg) { returnarg; }
function echo<T>(arg: T): T {
  return arg;
}

//•When compiling the following piece of code, we get an error saying ‘Property name does not exist on type T’. How can we solve this problem?

function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

//•An Entity should have a unique identifier. The type of identifier, however, is dependent on the use case. In some cases, the ID might be a number, in other cases, it might be a string, GUID, etc. Represent the entity using a generic class.

class Entity<T> {
  constructor(public id: T) {}
}

//•Given the following interface, what does keyof User return?

interface User {
  userId: number;
  username: string;
}
