// 6. Write a function that replaces the elements of the given array between two positions with their doubled values. 
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

//regular function
// function replacementDouble(a, positionFrom, positionTo){
//     const b = [];
//     for(let i = 0; i < a.length; i++){
//         if (i >= positionFrom && i <= positionTo){
//             b.push(a[i]*2)
//         } else {
//             b.push(a[i])
//         }
//     } return b
// }
// console.log(replacementDouble([3, 5, 1, 8, 90, -4, 23, 1, 67], 3, 6))

//anonymous function
// var replacementDouble = function(a, positionFrom, positionTo){
//     const b = [];
//     for(let i = 0; i < a.length; i++){
//         if (i >= positionFrom && i <= positionTo){
//             b.push(a[i]*2)
//         } else {
//             b.push(a[i])
//         }
//     } return b
// }
// console.log(replacementDouble([3, 5, 1, 8, 90, -4, 23, 1, 67], 3, 6))

// 7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

//regular function
// function isItContained(a, b) {
//     for(var i = 0; i < a.length; i++){
//         for(var j = 0; j < b.length; j++){
//             if(a[i] == b[j]){
//                 result = 'all elements of array a are contained array b'
//             } else {
//                 result = 'not all elements of array a are contained in array b'
//                 }
//             }
//         } return result
//     }
//     console.log(isItContained([3, 4, 1, 3, 7], [8, 9, 3, 1, 11, 4, 3]))


//anonymous function
// var isItContained = function(a, b) {
//     for(var i = 0; i < a.length; i++){
//         for(var j = 0; j < b.length; j++){
//             if(a[i] == b[j]){
//                 result = 'all elements of array a are contained array b'
//             } else {
//                 result = 'not all elements of array a are contained in array b'
//                 }
//             }
//         } return result
//     }
//     console.log(isItContained([3, 4, 1, 3, 7], [8, 9, 3, 1, 11, 4, 3]))

// 8. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
// Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]

//regular function
//  function sortByA(array){
//     var result = array.sort(function(a,b) {
//         return array.indexOf("a") - b.indexOf("a");
//     })
//     return result
// }
// console.log(sortByA(['apple', 'tea',  'amazing', 'morning', 'JavaScript']))

//anonymous function
// var sortByA = function (array){
//     var result = array.sort(function(a,b) {
//         return array.indexOf("a") - b.indexOf("a");
//     })
//     return result
// }
// console.log(sortByA(['apple', 'tea',  'amazing', 'morning', 'JavaScript']))

// 9. Write a function that prints out the date of the next day. 
// Output:  25. 10. 2018. 

//regular function
// function DateOfTheNextDay(a){
//     var day = new Date(a)
//     var tomorrow = new Date(day);
//     tomorrow.setDate(day.getDate()+1);
//     return tomorrow
// }
// console.log(DateOfTheNextDay('Oct 24 2018'))

//anonymous function
// var DateOfTheNextDay = function (a){
//     var day = new Date(a)
//     var tomorrow = new Date(day);
//     tomorrow.setDate(day.getDate()+1);
//     return tomorrow
// }
// console.log(DateOfTheNextDay('Dec 24 2018'))

// 10. Write a function that prints out the date of the previous day. 
// Output:  23. 10. 2018. 

// regular function
// function DateOfThePreviousDay(a){
//     var day = new Date(a)
//     var tomorrow = new Date(day);
//     tomorrow.setDate(day.getDate()-1);
//     return tomorrow
// }
// console.log(DateOfThePreviousDay('Oct 24 2018'))

//anonymous function
// var DateOfThePreviousDay = function (a){
//     var day = new Date(a)
//     var tomorrow = new Date(day);
//     tomorrow.setDate(day.getDate()-1);
//     return tomorrow
// }
// console.log(DateOfThePreviousDay('Oct 24 2018'))

// 11. Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output: 
//   78
//  111 
//    4
// 4321

// function alignRight(a){
//     var string = toString(a)
//     for(let i = 0; i < a.length; i++){
//         console.log(a[i])
//     } return a.padStart(4)
// }
// console.log(alignRight([78, 111, 4, 4321]))

