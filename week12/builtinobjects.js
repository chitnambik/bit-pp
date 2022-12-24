// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]


// let array1 = function(array, duplicate){
//     let newArray = [];
//     for(let i = 0; i < array.length; i++){
//        for(let j = 0; j < duplicate; j++){
//         newArray.push(array[i])
//        }
//       }
//       return newArray;
//     }
// console.log(array1([2, 4, 7, 11, -2, 1], 2))


// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

// let removedDuplicates = function(array){
//     return Array.from(new Set(array))
// }
// console.log(removedDuplicates([8, 13, 8, 4, 9, 12, 8, 1, 1, 4, 13]));


// 3a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// let isItOdd = function(a){
//     result = ''
//     if(a.length % 2 == 0){
//         result = 'not odd'
//     } else {
//         result = 'odd'
//     } return result
// }
// console.log(isItOdd([1, 2, 9, 2, 1, 8]))


// 3b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4


// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

// 5a. Write a function that finds all the elements in a given array less than a given
// element.
// 5b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// 5c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.
// function task5C(input){
//     let output= task5B(input).shift()
//     return output

// function task5A(inputA,searchingFor){
//     let outputA=[];
//     for(let i=0;i<inputA.length;i++){
//         if(inputA[i]<searchingFor){
//             outputA.push(inputA[i])
//         }
//     }
//     return outputA
// }

// function task5B(inputB){
//     let outputB=[];
//     for ( let i=0;i<inputB.length;i++){
//         if(inputB[i].includes('pro') || inputB[i].includes('Pro')||inputB[i].includes('PRO')){
//             outputB.push(inputB[i])
//         }
//     }
//     return outputB
// }
// }
// console.log(task5A([2, 3, 8, -2, 11, 4],6))
// console.log(task5B(['JavaScript', 'Programming', 'fun', 'product']))
// console.log(task5C(['JavaScript', 'Programming', 'fun', 'product']))

// 6a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [

// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]

// 6b. Write a function that calculates the total price of your shopping list.
// 6c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.
// 6d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.

// let inputTask6=[
//     {name: 'milk', price: 100},
//     {name: 'cigarettes', price: 330},
//     {name:'bananas', price: 150},
//     {name: 'bread', price:60}
//     ]
//     const task6BResult = inputTask6.reduce((total, inputTask6 )=>{
//         return total + inputTask6.price
//     },0)
//     const task6CResult= task6BResult/inputTask6.length
//     let data=[]
//     for (const ole in inputTask6){
//         data.push(inputTask6[ole].price)
//     }
//     const task6D = inputTask6.reduce(function(prev, current) {
//     return (prev.price > current.price) ? prev : current})
//      console.log(`task 6 B: ${task6BResult}
//      task 6 c: ${task6CResult},
//      task 6 d: ${task6D.name.toUpperCase()}.`);


// 7a. Write a function that checks if a given string is written in all capitals.

// function isAllCapital(stringExample) {
//     if(stringExample.toUpperCase() === stringExample) {
//         console.log('string is all uppercase');
//     } else {
//         console.log('string is not all uppercase');
//     }
// }
// isAllCapital('DA LI Je');

// 7b. Write a function that checks if a given string contains any digits.

// function stringContainingANumber(input){
//     let a = String(input);
//     for(let i = 0; i < a.length; i++){
//         if(!isNaN(a.charAt(i)) && !(a.charAt(i) === " ") ){
//           return true;
//         }
//     }
//     return false;
//   }
// console.log(stringContainingANumber('foewhfvwo'));


// 7c. Write a function that checks if a given string is a valid hexadecimal color.

// function isHexadecimal(input) {
//     if (input[0] != '#')
//         return false;

//     if (!(input.length == 4 || input.length == 7))
//         return false;

//     for (let i = 1; i < input.length; i++)
//         if (!((input[i].charCodeAt(0) <= '0'.charCodeAt(0) && input[i].charCodeAt(0) <= 9)
//             || (input[i].charCodeAt(0) >= 'a'.charCodeAt(0) && input[i].charCodeAt(0) <= 'f'.charCodeAt(0))
//             || (input[i].charCodeAt(0) >= 'A'.charCodeAt(0) || input[i].charCodeAt(0) <= 'F'.charCodeAt(0))))
//             return false;

//     return true;
// }
// console.log(isHexadecimal('#181d27'));


// 7d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.

// function numberInterval(input){
//     if(input >= 1900 && input <= 2018){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(numberInterval(1980));

// 7e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).

// function validator(input)

// 8. Write a function that calculates a number of days to your birthday.
// Input: 25 February
// Output: 5 days

// function daysTillBirthday(){
// myBirthday = [20,07]; 
// today = new Date();
// bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);
// if(today.getTime() > bday.getTime()) {
//     bday.setFullYear(bday.getFullYear()+1);
// }
// difference = bday.getTime()-today.getTime();
// days = Math.floor(difference/(1000*60*60*24))+1;
// return (days +" day(s) until your birthday!");
// }
// console.log(daysTillBirthday())

// 9. Write a function that for a given departure and arrival time calculates the time the trip
// takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds

// function tripDuration(){
// var time_start = new Date();
// var time_end = new Date();
// var value_start = "8:22:13".split(':');
// var value_end = "11:43:22".split(':');

// time_start.setHours(value_start[0], value_start[1], value_start[2], 0)
// time_end.setHours(value_end[0], value_end[1], value_end[2], 0)

// result = time_end - time_start

// function msToTime(s) {
//     var ms = s % 1000;
//     s = (s - ms) / 1000;
//     var secs = s % 60;
//     s = (s - secs) / 60;
//     var mins = s % 60;
//     var hrs = (s - mins) / 60;
//     return hrs + ':' + mins + ':' + secs;
//   }
//   console.log(msToTime(result))
// }
// tripDuration()

// 10a. Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

// let x = Math.floor(Math.random() * 10)
// let y = Math.floor(Math.random() * 10)
// let z = Math.floor(Math.random() * 10)
// function pointInSpace(x, y, z){
//     this.x = x
//     this.y = y 
//     this.z = z
// }
// const point = new pointInSpace(x, y, z)
// console.log(point)

// 10b. Write a function that calculates the distance between two points in the space.

// let x = Math.floor(Math.random() * 10)
// let y = Math.floor(Math.random() * 10)
// let z = Math.floor(Math.random() * 10)
// let a = Math.floor(Math.random() * 10)
// let b = Math.floor(Math.random() * 10)
// let c = Math.floor(Math.random() * 10)
// let one = 0;
// let two = 0;
// let three = 0;
// function pointInSpace1(x, y, z){
//     this.x = x
//     this.y = y
//     this.z = z
// }
// function pointInSpace2(a, b, c){
//     this.a = a
//     this.b = b
//     this.c = c
// }
// const point1 = new pointInSpace1(x, y, z);
// const point2 = new pointInSpace2(a, b, c)
// function differenceFunction(){
//     this.one = x - a
//     this.two = y - b
//     this.three = z - c
// }
// const difference = new differenceFunction(one, two, three)
// console.log(difference)
// console.log(point1, point2)

// 11a. Write a function that generates a random integer value between 5 and 20.

// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   console.log(randomInteger(5, 20));

// 11b. Write a function that generates a random integer value between 50 and 100.

// function randomIntegerb(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   console.log(randomIntegerb(50, 100));

// 11c. Write a function which expects a number and a callback generator function and
// returns an array of numbers produced by the generator function.

// const generatorFunction = function(length){
// const randomArray = (length, max) => 
//   Array(length).fill().map(() => Math.round(Math.random() * max))
//   return randomArray
// }
// console.log(generatorFunction(5))//workinprogress

// function task11a(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   function task11b(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// function task11c(){
//     let result=[];
//     let ind = task11a(5,20)
//     let ind2 = task11b(50,100)
//     if (isNaN(ind)&& isNaN(ind2)){
//         return `not a number`
//     } else(
//         result.push(ind,ind2)
//     )
//     return result
//   }
//   console.log(task11c())

// 12. Write a function that shuffles the elements of a given array.

// Input: [3, 6, 11, 2, 9, 1]
// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array
// }
// console.log(shuffleArray([3, 6, 11, 2, 9, 1]));
