// 1. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotate (a, b) {
    for(var i = 0; i < b; i++) {
        a.push(a.shift())
        } return a
    }
    console.log(rotate([1,2,3,4,5,6], 2))

// 2. Write a function that takes a number and returns array of its digits.

function numberSplit(a){
    let result = a.toString().split('');
    return result
}
console.log(numberSplit(292343))

// 3. Write a program that prints a multiplication table for numbers up to 12.

function multiplication (a) {
    var result = ''
    for(i = 1; i <= 12; i++) {
        result = (a + " * " + i + " = " + a * i);
        console.log(result)
    } return 'kraj zadatka'
}
console.log(multiplication(78))

// 4. Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.

function maxElement (a) {
var b = 0;
for(var i = 0; i <= a.length; i++){
    if (a[i] > b) {
        var b = a[i];
    }
} return b
} 
console.log(maxElement([2, 789, 'fog', NaN, 'stagod', 74, 89, 102]))

// 5. Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.
// 
function maxElement (a) {
var max = 0;
var min = 0;
const c = [];
for(var i = 0; i <= a.length; i++){
    if (a[i] > max) {
         max = a[i];
    }
for(var j = 0; j <= a.length; j++){
    if (a[j] < min) {
         min = a[j];
            } 
        } 
    } c.push(min, max); return c
}
console.log(maxElement([2, 789, 18493, 7848, 3, 74, 89, 102, -79, -132, -6978]))

// 6. Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza kada su brojevi
//     poređani od najmanjeg do najvećeg ako niz ima neparan broj elemenata. Ako ima paran
//     broj onda se medijana definiše kao aritmetička sredina dve srednje vrednosti).

function mediana (a) {
        a = [...a].sort((a, b) => a - b);
        return a.length % 2 !== 0 ? a[middle] : (a[middle - 1] + a[middle]) / 2;
      }
console.log(mediana([3, 5, 6, 8, 7, 8, 9]))

// 7. Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.

    function firstLastMid (a) {
        var first = a[0];
        var last = a[a.length - 1];
        var medium = 0;
        if (a.length % 2 == 0 && a.length > 0) {
            var medium = 0
            return [first, last]
        } else if (a.length % 2 !== 0) {
            var medium = a[Math.round((a.length - 1) / 2)]
            return [first, last, medium]
        } else if (a.length === 0) {
            return a
            } 
        }  
    console.log(firstLastMid([]))

// 8. Write a function to find the average of N elements. Make the function flexible to receive 
// dynamic number or parameters.

function sumOfN () {
    var divided = 0;
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
        divided = sum/arguments.length
    } return divided
}
console.log(sumOfN(3, 5, 7, 90, 3, 7, 15))

// 9. Write a function to find all the numbers greater than the average.

function sumOfN () {
    var divided = 0;
    var sum = 0;
    var number = 0;
    const c = []
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
        divided = sum/arguments.length
        number = arguments[i] > divided
    } return [arguments[i] > divided]
}
console.log(sumOfN[3, 5, 7, 90, 3, 7, 15])