// 1. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotate (a, b) {
    for(var i = 0; i < b; i++) {
        a.push(a.shift())
        } return a
    }
    console.log(rotate([1,2,3,4,5,6], 2));

// 2. Write a function that takes a number and returns array of its digits.

function numberSplit(a){
    let result = a.toString().split('');
    return result
}
console.log(numberSplit(292343));

// 3. Write a program that prints a multiplication table for numbers up to 12.

function multiplication (a) {
    var result = ''
    for(i = 1; i <= 12; i++) {
        result = (a + " * " + i + " = " + a * i);
        console.log(result)
    } return 'kraj zadatka'
}
console.log(multiplication(78));

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
console.log(maxElement([2, 789, 'fog', NaN, 'stagod', 74, 89, 102]));

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
    console.log(firstLastMid([1, 3, 4, 5, 6, 8, 9, 0, 5, 4, 3, 3]))

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

// 10. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
// square of the height (in meters). Write a function that takes two parameters, weight and
// height, computes the BMI, and prints the corresponding BMI category:
//  Starvation: less than 15
//  Anorexic: less than 17.5
//  Underweight: less than 18.5
//  Ideal: greater than or equal to 18.5 but less than 25
//  Overweight: greater than or equal to 25 but less than 30
//  Obese: greater than or equal to 30 but less than 40
//  Morbidly obese: greater than or equal to 40

function BMI (weight, height){
    var result = (weight/(height**2));
    if (result < 15) {
        result = 'Your BMI ' + result + ' falls within the starvation range';    
    } else if((result > 15) && (result < 17.5)){
        result = 'Your BMI ' + result + ' falls within the anorexic weight range';
    } else if((result > 17.5) && (result < 18.5 )){
        result = 'Your BMI ' + result + ' falls within the underweight range';
    } else if((result > 18.5) && (result < 25 )){
        result = 'Your BMI ' + result + ' falls within the ideal range';
    } else if((result > 25) && (result < 30 )){
        result = 'Your BMI ' + result + ' falls within the overweight range';
    } else if((result > 30) && (result < 40 )){
        result = 'Your BMI ' + result + ' falls within the obese range';
    } else {
        result = 'Your BMI ' + result + ' falls within the morbidly obese range';
    }
   return result;
}
console.log(BMI(64, 1.81));


// 11. Write a function that takes a list of strings and prints them, one per line, in a rectangular
// frame.:
// For example the list [&quot;Hello&quot;, &quot;World&quot;, &quot;in&quot;, &quot;a&quot;, &quot;frame&quot;] gets
// printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function square(input){
    var longest = 0;
    var longestWord = '';
    var output = 0;
    var print = '';
        for (let i = 0; i<input.length; i++){
            if(input[i].length > longest){
                longest = input[i].length;
                longestWord = input[i];
            }
        }
        let borders ='*'.repeat(longest+4);
        console.log(borders);
            let stars = '';
            for (let j = 0; j < input.length; j++){
                if (input[j] !== longestWord){
                    output = longest - input[j].length
                    stars = `* ${input[j]+' '.repeat(output)} *`;
                }
                if(input[j] === longestWord){
                    stars = `* ${longestWord} *`;    
                } 
                print = `${console.log(stars)}`;
            }  

       console.log(borders);

}
square(['ja', 'volim', 'cokoladu','sa','lesnicima', 'i', 'marcipanom'])