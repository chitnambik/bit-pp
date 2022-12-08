// 1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.
// Input: ['1', '21', undefined, '42', '1e+3', Infinity]
// Output: [1, 21, 42, 1000]

function onlyNumbers(a){
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (isFinite(a[i])) {
          result.push(+a[i]);
        }
      }
      return result;
} 
console.log(onlyNumbers(['1', '21', undefined, '42', '1e+3', Infinity]))

// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.
// Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
// Output: “015false-2247”

function joinIntoString(a) {
    var result = a.filter(function (b) {
      return b !== undefined && b !== null && b !== Infinity && !isNaN(b);
    });
    return result.join('')
  }
  console.log(joinIntoString([NaN, 0, 15, false, -22, "", undefined, 47, null]));

// 3. Write a program to filter out falsy values from the array.
// Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
// Output: [15, -22, 47]

function filterFalsy(a) {
    var result = a.filter(Boolean);
    return result
}
console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]))

// 4. Write a program that calculates a number of integer values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3

function howManyIntegers(a) {
    var counter = 0;
    for (var i = 0; i < a.length; i++) {
      if (Number.isInteger(a[i])) {
        counter++;
      }
    }
    return counter;
  }
  console.log(howManyIntegers([NaN, 23.1, 15, false, -22.5, "", 4, 7, 8, null]))

// 5. Write a program that calculates a number of float values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2

function howManyFloat(a) {
    var counter = 0;
    for (var i = 0; i < a.length; i++) {
      if (typeof a[i] === "number" && !Number.isNaN(a[i]) && !Number.isInteger(a[i])) {
        counter++;
      }
    }
    return counter
  }
  console.log(howManyFloat([NaN, 23.1, 15, false, -22.5, 9.8, "", 4, 7, null]))