"use strict";
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let wrappedNumbers = ArrayUtils.wrapInArray(numbers);
let strings = ['a', 'b', 'c', 'd', 'e', 'f'];
let wrappedStrings = ArrayUtils.wrapInArray(strings);
console.log(wrappedNumbers, wrappedStrings);
//# sourceMappingURL=index.js.map