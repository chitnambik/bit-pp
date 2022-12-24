// 1. Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.

// function reverseANumber(n){
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverseANumber(32243)));

// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -> “abeemrstw”

// function sort(string) {
//     return string.split('').sort().join('');
// };
// console.log(sort('fjeowhvwoe'));

// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.
// 'Republic Of Serbia' -> 'Rbceilpu Of Sabeir'

// function sort(string) {
//     return string.split('').sort().join('')
// }
// console.log(sort('Republic Of Serbia'));

// 4. Write a function to split a string and convert it into an array of words.
// "John Snow" -> [ 'John', 'Snow']

// function splitString(input){
//     return input.split(' ')
// }
// console.log(splitString('John Snow'));

// 5. Write a function to convert a string to its abbreviated form.
// 'John Snow' -> 'John S.';

//     abbreviation = function (str1) {
//     var split_names = str1.trim().split(' ');
//     if (split_names.length > 1) {
//     return (split_names[0] + ' ' + split_names[1]. charAt(0) + '.');
//     }
// }
//     console.log(abbreviation('John Snow'));

// 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
// '0000', '123', 'l' -> '0123'
// '00000000', '123', 'r' -> '12300000'


// function addSting(input, replaceWith, position){
//     let amountOfO = input.length - replaceWith.length
//     if(position == 'l'){
//       output = input[0].repeat(amountOfO) + replaceWith
//     } else if(position = 'r'){
//         output = replaceWith + input[0].repeat(amountOfO)
//     }
//     return output
// }
// console.log(addSting('1120000', '123', 'l'))
//has to be reworked to apply to cases where there's not just zeroes as first input. 

// 7. Write a function to capitalize the first letter of a string and returns modified string.
// 'js string exercises' -> 'Js string exercises'

// function capitaliseFirst(a){
//     const b = a.charAt(0).toUpperCase() + a.slice(1);
//     return b
// }
// console.log(capitaliseFirst('js string exercises'));

// 8. Write a function to hide email addresses to protect them from unauthorized users.
// 'somerandomaddress@example.com' -> 'somerand...@example.com'

// function hideEmail(email) {
//     let splitted = email.split('@');
//     let part1 = splitted[0];
//     let avg = part1.length / 2;
//     part1 = part1.substring(0, (part1.length - avg));
//     part2 = splitted[1];
//     return part1 + '...@' + part2
// }
// console.log(hideEmail('somerandomaddress@example.com'));

// 9. Write a program that accepts a string as input and swaps the case of each character. For
// example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';
// 'The Quick Brown Fox' -> 'tHE qUICK bROWN fOX'

// function upperLowerCase(a){
//     b = [];
//     for (var i = 0; i<a.length; i++){
//         if (a[i] === a[i].toUpperCase()){ 
//             b.push(a[i].toLowerCase())
//             } else if (a[i] === a[i].toLowerCase()){ 
//                 b.push(a[i].toUpperCase())
//             }
//         }
//         return b.join('')
//     }
//     console.log(upperLowerCase('The Quick Brown Fox'))