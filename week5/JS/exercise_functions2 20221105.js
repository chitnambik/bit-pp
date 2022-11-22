// 1. Write a function to check whether the `input` is a string or not.
// 'My random string' --> true
// 12 --> false

function string(a) {
    if(typeof a === 'string') {
        return 'True'
    }
    else {return 'False'}
} console.log(string(12))

// 2. Write a function to check whether a string is blank or not.
// My random string -> false
// ''  --> true
// 12 --> false
// false --> false

function stringBlank(a) {
    if(typeof a === 'string')
        if(a.length === 0) {
    return 'true' 
    } else if (typeof a !== 'string') {
        return 'false'
    } else (typeof a === 'string')
        if(a.length !== 0) {
        return 'false'  
    }
}console.log(stringBlank(false))

// 3. Write a function that concatenates a given string n times (default is 1).
// 'Ha' --> 'Ha';
// 'Ha', 3 --> 'HaHaHa';

function concat(a, b) {
    var c = '';
    while (b > 0) {
        c += a;
        b--
    } return(c)
      }
      console.log(concat('Ha', 4));

// 4. Write a function to count the number of letter occurrences in a string.
// 'My random string', 'n' --> 2

function countingLetters (a, b) {
    c = '';
    for(let i = 0; i < a.length; i++) 
        if(b === a[i]) {
            c++ }
            return c
} 
console.log(countingLetters('oooovvo je sooooweotring', 'v'))

// 5. Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

function occurrence (a, b) {
    var c = ''
    for(let i = 0; i < a.length; i++) {
        if(b == a[i]) {
            c = i;
            break;
    } else {
        c = '-1';
        } 
    } 
    return c;
}
console.log(occurrence('bovo je string', 'x'))

// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

function lastOccurrence(a, b){
    var c = '';
    if(a.includes(b)) {
        c = a.lastIndexOf(b) + 1
        } else {
        c = '-1';
        }
return c
    }
console.log(lastOccurrence('smaxkasdcajkxc nqoawskjd', 'd'))


// 7. Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.
// 'my random string' --> ['M', 'y', null, 'r', 'a']
// 'random' --> ['R', 'a', 'n', 'd', 'o', 'm']

function stringToArray (a) {
    var result = [];
    for(var i = 0; i < a.length; i++) {
        if (a[i] === ' ') {
            result.push('null')
         } else {
            result.push(a[i])}
    } return result
} 
console.log(stringToArray('vow  ejoe'));

// 8. Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function isItANumber (a) {
  if (a === 1) {
    return false;
  }
  else if (a === 2) {
    return true;
  } else {
    for(var i = 2; i < a; i++) {
      if(a % i === 0) {
        return false;
      }
    }
    return true;  
  }
}
console.log(isItANumber(82));


// 9. Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.
// 'My random string', '_' -> 'My_random_sting'
// 'My random string', '+' -> 'My+random+string'
// 'My random string' -> 'My-random-string'

function replace(a, b, c) {
    d = '-'
    for (var i = 0; i < a.length; i++) {
        if (c == ' ') {
        a = a.replace(b, d); 
    } else { 
        a = a.replace(b, c);
        } 
    } return a;
}
   console.log(replace('stag od ofjeow ali ', ' ', '^')); 

// 10. Write a function to get the first n characters and add “...” at the end of newly created string.

function firstCharacterAndAdd(a, n) {
    let c = a.toString();
    return c.slice(0,n)+'...'
}
console.log(firstCharacterAndAdd('Pokazi mi prvih n karaktera ovog stringa', 7));

// 11. Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.

// ['1', '21', undefined, '42', '1e+3', Infinity] -> [1, 21, 42, 1000]]

function arrToString(a) {
    var result = [];
        for (let i = 0; i < a.length; i++) {
                if (a[i] === null) {
                        continue;
                } else if (a[i] === undefined) {
                        continue;
                } else if (a[i] === Infinity) {
                        continue;
                } else if (isNaN(a[i])) {
                        continue;
                } else {
                result.push(a[i])
            }
        } return result
  }

  console.log(arrToString(['1', '21', undefined, null, '42', '1e+3', Infinity, '123']));

// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

function retirement(year, gender) {
    var age = (2022 - year);
    var result = '';
    if (gender === 'female') {
        if (age < 60) {
          result = 'You will retire in ' + (60 - age) + ' years'
        } else {
          result = 'Enjoy retirement!'
        }
      }
    if (gender === 'male') {
        if (age < 65) {
            result = 'You will retire in ' + (65 - age) + ' years'
      } else {
        result = 'Enjoy retirement!'
      }
    } return result
  }
  console.log(retirement(1997, 'male'))

// 13. Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th

function humanise(a) {
    var result = '';

    if (a == 1 || a == 21 || a == 31 || a == 41 || a == 51 || a == 61 || a == 71 || a == 81 || a == 91){
      result = a + 'st';
    } else if (a == 2 || a == 22 || a == 32 || a == 42 || a == 52 || a == 62 || a == 72 || a == 82 || a == 92){
      result = a + 'nd';
    } else if (a == 3 || a == 23 || a == 33 || a == 43 || a == 53 || a == 63 || a == 732 || a == 83 || a == 93){
      result = a + 'rd';
    } else if (a < 101) {
      result = a + 'th';
    } else {
        result = 'you are asking too much :)'
    } return result
  }
console.log(humanise(221))
