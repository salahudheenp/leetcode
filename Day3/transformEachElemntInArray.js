// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.


// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

 

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.



// <=====================================  answer  ========================>

function map(arr, fn) {
    return arr.map((element, index) => fn(element, index));
  }

//   example 1
const arr1 = [1, 2, 3];
const plusone = function plusone(n) { return n + 1; }

const newArray1 = map(arr1, plusone);
console.log(newArray1); // Output: [2, 3, 4]

// example 2
const arr2 = [1, 2, 3];
const plusI = function plusI(n, i) { return n + i; }

const newArray2 = map(arr2, plusI);
console.log(newArray2); // Output: [1, 3, 5]


// example 3
const arr3 = [10, 20, 30];
const constant = function constant() { return 42; }

const newArray3 = map(arr3, constant);
console.log(newArray3); // Output: [42, 42, 42]

