// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

// function isNumberPresent(a, e) {
//   let result = '';
//   for (let i = 0; i < a.length; i++) {
//     if (e == a[i]) {
//       result = 'e is in the array';
//       break;
//     } else {
//       result = 'e is not in the array';
//     }
//   } return result;
// }
// console.log(isNumberPresent([5, -4.2, 3, 7], 71));

// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

// function multiplyPositive(a){
//   for(let i = 0; i < a.length; i++)
//       if (a[i] > 0){
//           a[i] *= 2
//     } return a
// }
// console.log(multiplyPositive([-3, 11, 5, 3.4, -8]))

// // 3. Write a program that finds the minimum of a given array and prints out its value and
// // index.
// // Input array: [4, 2, 2, -1, 6]
// // Output: -1, 3

// function min(a) {
//   var number = a[0];
//   var index = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] < number) {
//       number = a[i];
//       index = i;
//     }
//   } return ['najmanji broj je ' + number, 'a njegov indeks je ' + index];
// }
// console.log(min([-8, 2, 2, -1, 6, -78, 5, -5, -2]));

// // 4. Write a program that finds the second smallest number and prints out its value.
// // Input array: [4, 2, 2, -1, 6]
// // Output: 2

// function secondSmallest(a) {
//   let min = a[0];
//   let secondToMin = 0;
//   for (i = 0; i < a.length; i++) {
//       if (a[i] == min) {
//           secondToMin = min;
//       } else if (a[i] < min) {
//           secondToMin = min;
//           min = a[i];
//       } else if (a[i] < secondToMin) {
//           secondToMin = a[i];
//       }
//   } return secondToMin
// }
// console.log(secondSmallest([4, 2, 2, 0, -1, 6,]))

// // 5. Write a program that calculates the sum of positive elements in the array.
// // Input array: [3, 11, -5, -3, 2]
// // Output: 16

// function sumPositive(a) {
//   let result = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > 0) {
//       result += a[i];
//     }
//   } return result;
// }
// console.log(sumPositive([3, 11, -5, -3, 2, 7, 2]));

// // 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// // be read the same way both from the left and the right hand side.
// // Input array: [2, 4, -2, 7, -2, 4, 2]
// // Output: The array is symmetric.
// // Input array: [3, 4, 12, 8]
// // Output: The array isn’t symmetric.

// function isSymmetric(a){
// var b = [];
// var result = ''
//     for(let i = a.length - 1; i >= 0; i--) {
//         b.push(a[i])
//         if(a[i] !== b[i]){
//             result = 'The array is not symmetric'
//         } else {
//             result = 'The array is symmetric'
//         } i--
//     } return result
// }
// console.log(isSymmetric([2, 4, -2, 7, 'n', -2, 4, 2]));

// // 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// // length.
// // Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// // Output array: [4, 3, 5, 8, 6, 11, 2, 9]

// function intertwine(a, b) {
//   const c = [];
//   for (let i = 0; i < a.length; i++){
//     c.push(a[i], b[i]);
//   }
//   return c;
// }
// console.log(intertwine([4, 5, 6, 2], [3, 8, 11, 9]));

// // 8. Write a program that concatenates two arrays.
// // Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// // Output array: [4, 5, 6, 2, 3, 8, 11, 9]

// function concatenate(a, b) {
//     for (let i = 0; i < b.length; i++){
//         a.push(b[i]);
//     } return a;
// }
// console.log(concatenate([4, 5, 6, 2],[3, 8, 11, 9]));

// // 9. Write a program that deletes a given element e from the array a.
// // Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// // Output array: [4, 6, 8]

// function deleteE(a, e) {
//   const b = [];
//   for (let i = 0; i < a.length; i++) {
//     if (e !== a[i]) {
//       b.push(a[i]);
//     }
//   } return b;
// }

// console.log(deleteE([4, 6, 2, 8, 2, 2], 2));

// // 10. Write a program that inserts a given element e on the given position p in the array a. If
// // the value of the position is greater than the array length, print the error message.
// // Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// // Output: [2, -2, 33, 78, 12, 5, 8]

// function insertE(a, e, p){
//     const b = []
//     if(p > a.length){
//         console.log('the array is not that long');
//     } else {
//     for(let i = 0; i < a.length; i++){
//         if(i == p){
//             b.insert(e)
//         } else if(a[i] !== p){
//             b.push(a[i])
//             }
//         } 
//     } return b
// }
// console.log(insertE([2, -2, 33, 12, 5, 8], 78, 3))

function insertE(a, e, p){
    const b = []
    if(p > a.length){
        console.log('the array is not that long');
    } else {
    for (let i = 0; i < a.length; i++){
        if(p == i){
        b.push(a[i-1] = e);
        // a[i-1] = p;
        }
    } 
  } return a
}
console.log(insertE([2, -2, 33, 12, 5, 8], 78, 3))
