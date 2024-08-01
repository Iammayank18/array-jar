# array-jar

`array-jar` is a JavaScript utility library for arrays that provides a collection of functions to simplify common array operations. It includes methods for safely accessing array elements, removing duplicates, finding intersections, and more. This library supports compatibility with older browsers by using polyfills and ES5 syntax.

## Features

- Safe array access with bounds checking
- Safe method calls for various array methods
- Compatible with older browsers

## Installation

You can install `array-jar` via npm.

### From npm

If the package is published on npm, you can install it directly:

```bash
npm install array-jar
```

## Usage

### Importing the Package

```javascript
const arrayUtils = require("array-jar");
```

### Available Methods

#### `safeGet(arr, index)`

Safely access array elements with bounds checking.

- **Parameters**:

  - `arr` (Array): The array to access.
  - `index` (number): The index to access.

- **Returns**: The element at the specified index or `undefined` if out of bounds.

**Example**:

```javascript
console.log(arrayUtils.safeGet([1, 2, 3], 1)); // Output: 2
console.log(arrayUtils.safeGet([1, 2, 3], 10)); // Output: undefined
```

#### `unique(arr)`

Remove duplicates from an array.

- **Parameters**:

  - `arr` (Array): The array to process.

- **Returns**: A new array with duplicates removed.

**Example**:

```javascript
console.log(arrayUtils.unique([1, 2, 2, 3, 4, 5, 5])); // Output: [1, 2, 3, 4, 5]
```

#### `intersect(arr1, arr2)`

Get the intersection of two arrays.

- **Parameters**:

  - `arr1` (Array): The first array.
  - `arr2` (Array): The second array.

- **Returns**: An array containing elements present in both arrays.

**Example**:

```javascript
console.log(arrayUtils.intersect([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
```

#### Array Method Wrappers

The package also provides wrappers for common array methods:

- `forEach(arr, callback, thisArg)`
- `map(arr, callback, thisArg)`
- `filter(arr, callback, thisArg)`
- `reduce(arr, callback, initialValue)`
- `reduceRight(arr, callback, initialValue)`
- `every(arr, callback, thisArg)`
- `some(arr, callback, thisArg)`
- `find(arr, callback, thisArg)`
- `findIndex(arr, callback, thisArg)`
- `sort(arr, compareFn)`
- `reverse(arr)`
- `concat(arr, ...items)`
- `join(arr, separator)`
- `slice(arr, start, end)`
- `splice(arr, start, deleteCount, ...items)`
- `push(arr, ...items)`
- `pop(arr)`
- `shift(arr)`
- `unshift(arr, ...items)`
- `includes(arr, valueToFind, fromIndex)`
- `indexOf(arr, searchElement, fromIndex)`
- `lastIndexOf(arr, searchElement, fromIndex)`
- `copyWithin(arr, target, start, end)`
- `fill(arr, value, start, end)`
- `toString(arr)`
- `toLocaleString(arr)`

**Example**:

```javascript
const arr = [1, 2, 3, 4, 5];

// Using forEach
arrayUtils.forEach(arr, function (item) {
  console.log(item);
});

// Using map
const doubled = arrayUtils.map(arr, function (item) {
  return item * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

## Error Handling

Ensure you handle errors appropriately when using the methods:

```javascript
try {
  console.log(arrayUtils.safeGet([1, 2, 3], "not-a-number")); // This will throw an error
} catch (error) {
  console.error("Error:", error.message);
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/your-repo/array-jar).

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README as needed for your project!
