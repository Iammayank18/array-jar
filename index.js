// Polyfills for older browsers
require("core-js/stable");
require("regenerator-runtime");

/**
 * Utility function to safely access array elements with bounds checking.
 * @param {Array} arr - The array to access.
 * @param {number} index - The index to access.
 * @returns {*} The element at the specified index or undefined if out of bounds.
 */
function safeGet(arr, index) {
  if (!Array.isArray(arr))
    throw new TypeError("First argument must be an array");
  if (typeof index !== "number")
    throw new TypeError("Second argument must be a number");
  return index >= 0 && index < arr.length ? arr[index] : undefined;
}

/**
 * Utility function to remove duplicates from an array.
 * @param {Array} arr - The array to process.
 * @returns {Array} A new array with duplicates removed.
 */
function unique(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Argument must be an array");
  return [...new Set(arr)];
}

/**
 * Utility function to get the intersection of two arrays.
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} An array containing elements present in both arrays.
 */
function intersect(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    throw new TypeError("Both arguments must be arrays");
  return arr1.filter((value) => arr2.includes(value));
}

/**
 * Utility function to safely call an array method and log errors.
 * @param {Array} arr - The array to call the method on.
 * @param {string} method - The method name.
 * @param {...*} args - Arguments to pass to the method.
 * @returns {*} The result of the method call.
 */
function safeMethodCall(arr, method, ...args) {
  if (!Array.isArray(arr))
    throw new TypeError("First argument must be an array");
  if (typeof arr[method] !== "function")
    throw new TypeError(`Method ${method} does not exist on array`);
  try {
    return arr[method](...args);
  } catch (error) {
    console.error(`Error calling ${method}:`, error);
    return undefined;
  }
}

// Wrapper functions for all array methods
const arrayMethods = {
  // Array.prototype methods
  forEach: (arr, callback, thisArg) =>
    safeMethodCall(arr, "forEach", callback, thisArg),
  map: (arr, callback, thisArg) =>
    safeMethodCall(arr, "map", callback, thisArg),
  filter: (arr, callback, thisArg) =>
    safeMethodCall(arr, "filter", callback, thisArg),
  reduce: (arr, callback, initialValue) =>
    safeMethodCall(arr, "reduce", callback, initialValue),
  reduceRight: (arr, callback, initialValue) =>
    safeMethodCall(arr, "reduceRight", callback, initialValue),
  every: (arr, callback, thisArg) =>
    safeMethodCall(arr, "every", callback, thisArg),
  some: (arr, callback, thisArg) =>
    safeMethodCall(arr, "some", callback, thisArg),
  find: (arr, callback, thisArg) =>
    safeMethodCall(arr, "find", callback, thisArg),
  findIndex: (arr, callback, thisArg) =>
    safeMethodCall(arr, "findIndex", callback, thisArg),
  sort: (arr, compareFn) => safeMethodCall(arr, "sort", compareFn),
  reverse: (arr) => safeMethodCall(arr, "reverse"),
  concat: (arr, ...items) => safeMethodCall(arr, "concat", ...items),
  join: (arr, separator) => safeMethodCall(arr, "join", separator),
  slice: (arr, start, end) => safeMethodCall(arr, "slice", start, end),
  splice: (arr, start, deleteCount, ...items) =>
    safeMethodCall(arr, "splice", start, deleteCount, ...items),
  push: (arr, ...items) => safeMethodCall(arr, "push", ...items),
  pop: (arr) => safeMethodCall(arr, "pop"),
  shift: (arr) => safeMethodCall(arr, "shift"),
  unshift: (arr, ...items) => safeMethodCall(arr, "unshift", ...items),
  includes: (arr, valueToFind, fromIndex) =>
    safeMethodCall(arr, "includes", valueToFind, fromIndex),
  indexOf: (arr, searchElement, fromIndex) =>
    safeMethodCall(arr, "indexOf", searchElement, fromIndex),
  lastIndexOf: (arr, searchElement, fromIndex) =>
    safeMethodCall(arr, "lastIndexOf", searchElement, fromIndex),
  copyWithin: (arr, target, start, end) =>
    safeMethodCall(arr, "copyWithin", target, start, end),
  fill: (arr, value, start, end) =>
    safeMethodCall(arr, "fill", value, start, end),
  toString: (arr) => safeMethodCall(arr, "toString"),
  toLocaleString: (arr) => safeMethodCall(arr, "toLocaleString"),
  safeGet,
  unique,
  intersect,
};

module.exports = arrayMethods;
