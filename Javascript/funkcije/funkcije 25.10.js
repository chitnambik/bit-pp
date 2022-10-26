//1. Write a program that calculates the maximum of two given numbers.
function greaterNumber(one, two) {
    if (one > two) {
        return one
    }
    else if (two > one) {
        return two
    }
}

// console.log(greaterNumber(16, 9))

// 2. Write a program that checks if a given number is odd.
function oddNumber(one) {
    if (one % 2 === 0) {
        return 'even'
    }
        else { return 'odd'}
    }
    console.log(oddNumber(8));

// 3. Write a program that checks if a given number is a three digit long number.
    function threeDigit(one) {
        if (one > 99 && one < 1000) {
            return 'three digit long number'
        } else {return 'not three digits long'}
    }
    console.log(threeDigit(8889))

// 4. Write a program that calculates an arithmetic mean of four numbers.
    function arithmetic (one, two, three, four) {
        arithmetic = (one+two+three+four)/4
        return arithmetic
    }
    console.log(arithmetic(4,5,9,7))

// 5. Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****
    var a = 12;
    var b = '';
    for(let i = 1; i <= a; i++) {
        for(let j = 1; j <= a; j++){
            b += '*';
        }
        b += '\n';
} console.log(b)
    

// 6. Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *
var a = 8;
var b = 16;
var c = 2;
d = '';
e = '';
f = '';
for(let i = 1; i <= a; i++) {
        d += '*'; }
for(let i = 1; i <= b; i++) {
        e += '*'; }
for(let i = 1; i <= c; i++) {
            f += '*';
}
console.log(d)
console.log(e)
console.log(f)

// 7. Write a program that calculates a number of digits of a given number.

  function getlength(one){
    return one.toString().length;
  }
  console.log(getlength(789436))

// 8. Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

const a = [2, 4, 7, 8, 7, 7, 1, 7]
function howManyTimes (e, res) {
    e = 7
    res = 0
for(let i = 0; i < a.length; i++) {
    if(e === a[i]) {
        res = res + 1
    } 
}
return res 
}
console.log(howManyTimes(a))

// 9. Write a program that calculates the sum of odd elements of a given array.

const a = [2, 4, 7, 8, 7, 7, 1, 7, 3, 1]
let sum = 0 
function sumOfOdd (a, sum) {
    for(let i = 0; i < a.length; i++)
    if(a[i] % 2 !== 0) {
        sum += a[i] 
    } return sum 
}
console.log(sumOfOdd(a, sum))

// 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

let a = 'araaaameniAna'
let res = 0;
function howManyTimes (a, e, c, res) {
    e = 'a';
    c = 'A'
    res = 0;
    for(let i = 0; i < a.length; i++) 
        if(e === a[i] || c === a[i]) {
            res = res + 1
    }  return res
} 
console.log(howManyTimes(a))

// 11. Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.

var a = 'mi'
var c = 3 
function concatMulitpleTimes(a, c) {
    var b = '';
    while (c > 0) {
      b += a;
      c--;
    }
    return b;
  }
  console.log(concatMulitpleTimes(a, c));