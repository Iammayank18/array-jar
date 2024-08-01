// Import the array-utils package
const arrayUtils = require("../");

// Sample arrays
const arr1 = [1, 2, 2, 3, 4, 5, 5];
const arr2 = [3, 4, 5, 6, 7];

// Using safeGet
console.log(arrayUtils.safeGet(arr1, 2)); // Output: 2
console.log(arrayUtils.safeGet(arr1, 10)); // Output: undefined

// Using unique
console.log(arrayUtils.unique(arr1)); // Output: [1, 2, 3, 4, 5]

// Using intersect
console.log(arrayUtils.intersect(arr1, arr2)); // Output: [3, 4, 5]

// Using array method wrappers
const arr = [1, 2, 3, 4, 5];

// forEach
arrayUtils.forEach(arr, (item) => console.log(item)); // Output: 1 2 3 4 5

// map
const doubled = arrayUtils.map(arr, (item) => item * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// filter
const evens = arrayUtils.filter(arr, (item) => item % 2 === 0);
console.log(evens); // Output: [2, 4]

// reduce
const sum = arrayUtils.reduce(arr, (acc, item) => acc + item, 0);
console.log(sum); // Output: 15

// Other methods can be used similarly
