// 1. Check if a triangle is equilateral, scalene or isosceles, and print which triangle is yours.. Example: sides
// of triangle are 3, 4, 5. This is scalene triangle.

var krak1 = 4 
var krak2 = 4
var krak3 = 5
if (krak1 == krak2 && krak2 == krak3) {
    result = 'equilateral'
}
else if (krak1 == krak3 || krak1 == krak2 || krak3 == krak2) {
    result = 'isosceles'
}
else {
    result = 'scalene'
}
console.log(result)


// 2. Perform arithmetic operations on two numbers. Operations are add, subtract, multiply, divide,
// modulus.

var a = 10
var b = 5
var c = a + b
console.log(c);

var a = 10
var b = 5
var c = a + b
console.log(c);

var a = 10
var b = 5
var c = a - b
console.log(c);

var a = 10
var b = 5
var c = a * b
console.log(c);

var a = 10
var b = 5
var c = a % b
console.log(c);


// 3. Find the grade for input marks (you should have at least two input marks). Grades are:
// A (91-100), B (81-90), C (71-80), D (61-70), E (51-60). Optionally print if student has failed the exam.
var a = 30
var b = 45
if (a>=91 && a<=100) {
    if (b>=91 && b<=100) {
        result = 'A A'}
        if (b>=81 && b<=90) {
            result = 'A B'}
            if (b>=71 && b<=80) {
                result = 'A C'}
                if (b>=61 && b<=70) {
                    result = 'A D'}
                    if (b>=51 && b<=60) {
                        result = 'A E'}
                        if (b<51) {
                            result = 'A failed'}
    }
else if (a>=81 && a<=90) {
    if (b>=91 && b<=100) {
        result = 'B A'}
        if (b>=81 && b<=90) {
            result = 'B B'}
            if (b>=71 && b<=80) {
                result = 'B C'}
                if (b>=61 && b<=70) {
                    result = 'B D'}
                    if (b>=51 && b<=60) {
                        result = 'B E'}
                        if (b<51) {
                            result = 'B failed'}
    }
else if (a>=71 && a<=80) {
        if (b>=91 && b<=100) {
            result = 'C A'}
            if (b>=81 && b<=90) {
                result = 'C B'}
                if (b>=71 && b<=80) {
                    result = 'C C'}
                    if (b>=61 && b<=70) {
                        result = 'C D'}
                        if (b>=51 && b<=60) {
                            result = 'C E'}
                            if (b<51) {
                                result = 'C failed'}
                        }
else if (a>=61 && a<=70) {
        if (b>=91 && b<=100) {
            result = 'D A'}
            if (b>=81 && b<=90) {
                result = 'D B'}
                if (b>=71 && b<=80) {
                    result = 'D C'}
                    if (b>=61 && b<=70) {
                        result = 'D D'}
                        if (b>=51 && b<=60) {
                            result = 'D E'}
                            if (b<51) {
                                result = 'D failed'}
                            }
else if (a>=51 && a<=60) {
        if (b>=91 && b<=100) {
            result = 'E A'}
            if (b>=81 && b<=90) {
                result = 'E B'}
                if (b>=71 && b<=80) {
                    result = 'E C'}
                    if (b>=61 && b<=70) {
                        result = 'E D'}
                        if (b>=51 && b<=60) {
                            result = 'E E'}
                            if (b<51) {
                                result = 'E failed'}
                            }
else if (a<=50) {
    if (b>=91 && b<=100) {
        result = 'failed A'}
        if (b>=81 && b<=90) {
            result = 'failed B'}
            if (b>=71 && b<=80) {
                result = 'failed C'}
                if (b>=61 && b<=70) {
                    result = 'failed D'}
                    if (b>=51 && b<=60) {
                        result = 'failed E'}
                        if (b<51) {
                            result = 'failed failed'}
                    }
else {result='failed failed'}
console.log(result)

// 4. Create two variables (or if you know how to do it - input fields). One should be a number, other
// should be a noun. Print on screen the number and pluralized form, like “5 cats” or “1 dog”. Bonus: Make
// it handle a few collective nouns like “sheep” and “geese”.
var a = 10
var b = 'cat'
if (a>1) {
    result = a + b +'s'
 if (b == 'goose'&& a > 1) 
{result = a +' geese'}
 if (b == 'sheep' && a > 1) 
{result = a +' sheep'}
}
else {result = a + b}
console.log(result)

// 5. Write a program to show you age based on entered number (if you know how to create input field, if
//     not create variable and give it a value). If your age is 18 or older - print “You are old enough to drive”,
//     but if not than print how many years you need to turn 18. If your age is greater than 18 - try one
//     example with 13.

var a = 13
if (a>=18) {
    result = 'You are old enough to drive'
}
else {result = 18-a + ' years till you are 18'}
console.log(result)

// 6. This one will continue on task 5. Create one more variable (or input field) and compare it with your
// age. Show how much is that older/younger than you with text for example “He/She is 13 years
// older/younger than me”. If you are the same age - print that you are the same age.

var them = 6
var me = 56
if (them>me) {
    result = 'You are ' +  (them - me) + ' years older than me.'
}
else if (them==me) {
    result = 'You are the same age as me.'
}
else {
    result = 'You are ' +  (me - them) + ' years younger than me.'
}
console.log(result)


// 7. Create 5 variables (or input fields) with canine species. Create one more variable with canine and
// compare it with first 5 species. If it is match - write that on screen. Example: “This is German Shepherd
// called Neo”. If there is no match - write on screen that this is a mixed breed.

var a = 'beagle'
var b = 'schnauzer' 
var c = 'Jack Russell' 
var d = 'labrador'
var e = 'husky' 
var f = 'schnauzer'
if (f===a || f===b || f===c || f===d || f===e) {
    result = 'This is a ' + f + ' called Mose.'
}
else {
    result = 'This is a mixed bread.'
}
console.log(result)