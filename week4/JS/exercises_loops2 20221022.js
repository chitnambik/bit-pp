// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

const a = [5, -4.2, 3, 7];
var e = 8;
var res = 'yes'
for(var i = 0; i < a.length; i++) {
    if (e === a[i]) {
        res = 'yes'; break
    }  else {res = 'no'}   
}
console.log (res)

// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var x = [-3, 11, 5, 3.4, -8, 9, -7]
var multi = 1
for (i=0; i < x.length; i++) {
    if (x[i] > 0){ 
        multi = x[i]*2
        console.log(multi)
    } else {
        console.log('negativan je broj')
    }
}


// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var x = [4, 2, 2, -1, 6];
var min = x[0];
for (i = 1; i < x.length; i++){
    if (x[i] < min){
        min = x [i];
}
}
    console.log(min)
    console.log([i]-2)


// 4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var x = [4, 2, 2, -1, 6, -17];
let ultimo = x[0]
let penulitmo = 0
for (i = 0; i < x.length; i++)
        if(x[i] == ultimo){
            penulitmo = ultimo;
        } else if (x[i] < ultimo) {
            penulitmo = ultimo;
            ultimo = x[i]
        } else if (x[i] < penulitmo) {
            penulitmo = x[i]
        }
console.log(penulitmo)

// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

var x = [3, 11, -5, -3, 2]
var res = 0
for (i = 0; i < x.length; i++) {
    if (x[i] > 0) {
        res += x[i]
    }
}
console.log(res)


// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.


// var x = [2, 4, -2, 7, -2, 4, 2]
// var res = ''
// for (i = 0; i < x.length; i++) {
//     if (x[0] == (x.length)   && 
//         x[1] == (x.length-1) && 
//         x[2] == (x.length-2) &&
//         x[3] == (x.length-3) && 
//            {res = 'yes';
//         }
//     }
//     console.log(res='yes')
//     else console.log('no')
    

const a = [2, 4, -2, 7, -2, 4, 2, 8]
const b = []
var res = 'yes'
    for (let i = a.length - 1; i >= 0; i--) {
        b.push(a[i])
        if(a[i] === b[i]) {
            res = 'The array is symmetric.'
        }
        else if (a[i] !== b[i]) {
            res = 'The array is not symmetric.'
        }
    }
    console.log(res);


// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

const a = [4, 5, 6, 2];
const b = [3, 8, 11, 9];
const c = []
for (let i = 0; i < a.length; i++) {
    c.push(a[i], b[i])
}
console.log(c)


//8.  Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

const a = [4, 5, 6, 2];
const b = [3, 8, 11, 9];
for (let i = 0; i < b.length; i++) {
    a.push(b[i])
}
console.log(a)


//9. Write a program that deletes a given element e from the array a.
//Input: e = 2, a = [4, 6, 2, 8, 2, 2]
//Output array: [4, 6, 8]

const a = [4, 6, 2, 8, 2, 2];
let e = 2;
const b = []
for(let i = 0; i < a.length; i++) {
    if (e === a[i]) {delete(a[i])}
} console.log(a)


//nisam bas znala kako da ga izbrisem da mi se ne pojavljuju uopste u console logu ni kao izbrisani.

// 10. Write a program that inserts a given element e on the given position p in the array a. If
//the value of the position is greater than the array length, print the error message.
//Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
//Output: [2, -2, 33, 78, 12, 5, 8]

const a = [2, -2, 33, 12, 5, 8];
let e = 78;
var p = 4;
for (i=0; i < a.length; i++){
    if(p < a.length) {
    a.splice([p], 0, e);
    console.log(a)
    break;
    } else if(p > a.length) {
    console.log('error')
    break;
}}
