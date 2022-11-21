// 1. Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.
// Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

// function arrayMinMax (a) {
//     const b = [];
//     var min = a[0]; 
//     var max = a[0]; 
//     for (var i = 1; i < a.length; i++) {
//         if (a[max] < a[i]) 
//            max = i;
//         if (a[min] > a[i]) 
//            min = i;
//     a.swap(a[max], a[min]);
//     a.push(b)
//     } return b
// }console.log(arrayMinMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]))

//have to figure out how to do it

// 2. Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element's value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

// function newArray(a) {
//     const b = []
//     for(var i = 0; i < a.length; i++) {
//         if(a[i] > 0) {
//             b.push((a[i]/2)+5)
//         } else if (a[i] === 0) {
//             b.push(20)
//         }
//     } return b
// }
// console.log(newArray([3, 500, -10, 149, 53, 0, 414, 1, 19]))

// 3. Initialize two arrays. The first one should contain student names, the second one the
// number of points for each student. Display students' names with their corresponding
// grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input:
// ['Michael', 'Anne', 'Frank', 'Joe', 'John', 'David', 'Mark', 'Bill']
// [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Michael acquired 50 points and failed to complete
// the exam.

// function task3(students,grades){
//     console.log('ovo je pocetak samo')
//     for (let i=0; i<students.length;i++){
//         if (grades[i] < 60){
//             console.log(`${students[i]} acquired ${grades[i]} and earned 6`);
//             }  else if (grades[i] < 70) {
//                 console.log(`${students[i]} acquired ${grades[i]} and earned 7`);
//             } else if (grades[i] < 80) {
//                 console.log(`${students[i]} acquired ${grades[i]} and earned 8`);
//             } else if (grades[i] < 90) {
//                 console.log(`${students[i]} acquired ${grades[i]} and earned 9`);
//             } else if (grades[i] < 100) {
//                 console.log(`${students[i]} acquired ${grades[i]} and earned 10`);
//             } else if (grades[i] < 60) {
//                 console.log(`${students[i]} acquired ${grades[i]} and failed the exam`);
//             }
//     }  return `kraj`;
// }
// console.log(task3(['Michel','Anne','Frank','Joe','John','David', 'Mark','Bill'],[50,39,63,72,99,51,83,59]))
//have to check the ifs, since it's not working for the failed ones

// 4. Sort a previously defined array. Place its sorted values into a new array whose
// values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

// function sortAndMultiply (array) {
//     const sorted = array.sort(function(a, b) { return a - b}); 
//     const multiplied = []
//     for(var i = 0; i < sorted.length; i++) {
//         if(sorted[i] > 0) {
//             multiplied.push(sorted[i]*2)
//         }
//     } return multiplied
// } console.log(sortAndMultiply([13, 11, 15, 5, 6, 1, 8, 12]))

// 5. Sort a previously defined array in a descending order and display it in the
// console.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

// function sortDES (array) {
//     const sort = array.sort(function(a, b) { return a - b});
//     const reverse = []
//     for (let i = sort.length - 1; i >= 0; i--) {
//         reverse.push(sort[i])
//     } return reverse
// }
// console.log(sortDES([ 13, 11, 15, 5, 6, 1, 8, 12 ]))


// 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
// be multiplied by 12.5 and displayed in console.
// Output: 2350000

// function loop (){
//     let sum=0;
//     let sub=0;
//     for (let i=0; i<=1000;i++){
//         if (i % 2 == 0){
//             sum += i;
//         }
//     }
//     for (let i=0; i<=500;i++ ){
//         if(i%2!==0){
//             sub-=i;
//         }
//     }
//     return (sum+sub)*12.5
// }
// console.log(loop())

// 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
//     letters) in the array and create a new string from them. Print it out in the console.
// Input: ['M', 'Anne', 12, 'Steve', 'Joe', 'John', 'David', 'Mark', true, 'A']

// function array (a){
//     let result='';
//     for(let i=0; i<a.length;i++){
//         if(typeof(a[i]) == 'string' && a[i].length > 2){
//             result+=a[i].slice(0, 2)
//         }
//     }
//     return result;
// }
// console.log(array(['M','Anne',12,'Steve','Joe','John','David','Mark',true,'A']))

// 8. Write a program that takes a string and prints its characters out in reversed order in the
// console.
// Input: Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

// function reverseString(a) {
//     var b = '';
//     for (var i = a.length - 1; i >= 0; i--) {
//         b += a[i];
//     }
//     return b;
// }
// console.log(reverseString('Belgrade Institute of Technology'));

// 9. Write a program that displays all the combinations of two numbers between 1 and 7.
// Don't display two of the same numbers at the same time. Display the number of possible
// combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

    // function combinations(a){
    //         let result 
    //     for(let i = 0; i < a.length - 1; i++){
    //       for(let j = i + 1; j < a.length; j++){
    //         console.log(result=a[i],a[j])
    //         result = i+j
    //       } 
    //     } return '\n' + 'Number of repeats:'+ result;
    // }
    // console.log(combinations([1, 2, 3, 4, 5, 6, 7]))

// 10. Write a program that checks if the entered number is a prime number (i.e. divisible only
//     by 1 and by itself).
//     Input: 17 | 15
//     Output: true | false
// function primeOrNot (a) {
//     if (a === 1) {
//       return false;
//     }
//     else if (a === 2) {
//       return true;
//     } else {
//       for(var i = 2; i < a; i++) {
//         if(a % i === 0) {
//           return false;
//         }
//       }
//       return true;  
//     }
//   }
//   console.log(primeOrNot(15));

// 11. Check if a given string is a palindrome (spaces are ignored).
// Input: eye | Geek | a nut for a jar of tuna
// Output: true | false | true

function symetry (a) {
var b = [];
var res = 'yes'
    for (let i = a.length; i >= 0; i--) {
        b.push(a[i])
        if(a[i] === b[i]) {
            res = 'The string is symmetric.'
        }
        else if (a[i] !== b[i]) {
            res = 'The string is not symmetric.'
        }
    }  return res
}
    console.log(symetry(['a nut for a jar of tuna']));
//have to remove the spaces