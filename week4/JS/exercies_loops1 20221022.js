// 1. Write a code to find the sum of first 10 natural numbers and show that sum on screen.

var sum = 0;
for (x=0;x<=10;x++){
     sum += x;
}
console.log('The sum is ' + sum)

// 2. Write a code to display the cube of the number 
// up to given an integer and show it on screen. Example: 2 up to cube equals 8.

var cube = 0;
for (i=0; i<=9; i++){
    console.log(cube=i*i*i)
}



var broj = 5;
var rezultat = 1;
var stepen = 5;

for (i = 0; i < stepen; i++){
   rezultat = rezultat * broj
   // rezultat *= broj
   // rezultat je prvo 5;
   //druga iteracija je ikad je i = 1, rezultat je 5 puta broj, odnosno 5 puta 5 i tako dalje 
}
console.log(rezultat)

// 3. Write a code to calculate the factorial of a given number and show it on screen. 
// Example: The Factorial of 5 is 120.

var fact = 1;
for(i = 1; i <= 9; i++) {
    fact *= i
  }
  console.log(fact)


//4. Write a code to display the n terms of even natural number and their sum.
//Example:
//Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".

var n = 9;
var even = '';
var sum = 0;
for(i = 2; i <= n*2; i++)
    if (i % 2 === 0){
        even += ' ' + i;
        sum += i
    }
    console.log('number of terms ' + n + ', even numbers are' + even + ', their sum is ' + sum)


// 5.Write a code to calculate the sum of digits in a number and show that sum on screen.
    // Example: "Sum of digits in number 232 is 7".


    var number = 23445
    var sum = 0
    var lastDigit
    while (number != 0) {
     lastDigit = number % 10;
     sum = sum + lastDigit;
     number = parseInt(number/10)
    }
    console.log(sum)

// 6. Write a code to count all letters in a word and show that count on screen.
// Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".


    var word = '!r$t£yui86';
    var sum = word.length;

    for (letters in word) {
      if (
        word[letters] !== "a" &&
        word[letters] !== "b" &&
        word[letters] !== "c" &&
        word[letters] !== "d" &&
        word[letters] !== "e" &&
        word[letters] !== "f" &&
        word[letters] !== "g" &&
        word[letters] !== "h" &&
        word[letters] !== "i" &&
        word[letters] !== "j" &&
        word[letters] !== "k" &&
        word[letters] !== "l" &&
        word[letters] !== "m" &&
        word[letters] !== "n" &&
        word[letters] !== "o" &&
        word[letters] !== "p" &&
        word[letters] !== "q" &&
        word[letters] !== "r" &&
        word[letters] !== "s" &&
        word[letters] !== "t" &&
        word[letters] !== "u" &&
        word[letters] !== "v" &&
        word[letters] !== "w" &&
        word[letters] !== "x" &&
        word[letters] !== "y" &&
        word[letters] !== "x" &&
        word[letters] !== "A" &&
        word[letters] !== "B" &&
        word[letters] !== "C" &&
        word[letters] !== "D" &&
        word[letters] !== "E" &&
        word[letters] !== "F" &&
        word[letters] !== "G" &&
        word[letters] !== "H" &&
        word[letters] !== "I" &&
        word[letters] !== "J" &&
        word[letters] !== "K" &&
        word[letters] !== "L" &&
        word[letters] !== "M" &&
        word[letters] !== "N" &&
        word[letters] !== "O" &&
        word[letters] !== "P" &&
        word[letters] !== "Q" &&
        word[letters] !== "R" &&
        word[letters] !== "S" &&
        word[letters] !== "T" &&
        word[letters] !== "U" &&
        word[letters] !== "V" &&
        word[letters] !== "W" &&
        word[letters] !== "X" &&
        word[letters] !== "Y" &&
        word[letters] !== "Z" 
      ) {
        sum--;
      }
    }
    console.log(sum);


// 7. Write a code to find on which index in array is letter "C" and show that index on screen.
//Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].

   var x = [1, 3, 32, "$", "g", "h", "t", "s", "C", 66, 23, "h2"];

   for (c in x) {
     if (x[c] === "C") {
       console.log(c);
       break
     }}

//8. Write a program that computes average marks of the following students. Then use this
//average to determine the corresponding grade.

// David 80
// Marko 77
// Dany 88
// John 95
// Thomas 68
// The grades are computed as follows :

//  60% F
//  70% D
//  80% C
//  90% B
//  100% A

var marks = [80, 77, 88, 95, 68];
var avg = 0;
var x = 0;

for (i=0; i < marks.length; i++) {
        avg += marks[i];
        x = avg/marks.length
}
if (x < 60){
    console.log(x + ', F');      
    } 
  else if (x < 70) {
    console.log(x + ', D'); 
    } 
  else if (x < 80) {
    console.log(x + ', C'); 
  } 
  else if (x < 90) {
    console.log(x + ', B'); 
  } 
  else if (x < 100) {
    console.log(x + ', A'); 
  }

//9. Write a program that uses console.log to print all the numbers from 1 to 100, with two
//exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
//divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
//program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
//&quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).

for (i = 1; i <= 100; i++){
     if (i % 3 == 0 && i % 5 == 0)
     console.log('FizzBuzz');
     else if (i % 3 == 0)
       console.log('Fizz');
     else if (i % 5 == 0)
       console.log('Buzz');
     else console.log(i)
 }