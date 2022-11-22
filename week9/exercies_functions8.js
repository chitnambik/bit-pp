// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

// function replace(a){
//     function inner(a){
//     [a[0], a[a.length - 1]] = [a[a.length - 1], a[0]];
//     return a
//     };
//     return a
// }
// console.log(replace([4, 5, 11, 9]));


// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

// function surface (a, b) {
//     function rectangle(a, b){
//         return a*b;
//     } return a*b;
// } 

// console.log(surface(5, 5))

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2

// function replace1 (a) {
//     return replace();
// function replace () {
//     counter = 0;
//     const b = [];
//     for(var i = 0; i <= a.length; i++){
//         if(a[i] == 'm' || a[i] == 'M'){
//             counter ++;
//             b.push('*');
//         } else if(a[i] !== 'm' || a[i] !== 'M'){
//                 b.push(a[i]);  
//             }
//         } return 'output: ' + counter + ', ' + b.join('');
//     } 
// }
// console.log(replace1('prograMming'))

// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com

// function email(a, b) {
//     return form(a, b);
//     function form() {
//         return a + '.'+ b + '@gmail.com'
//     }
// }
// console.log(email('pera', 'peric'))

// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28


// function octalToDecimal(a) {
//     return convert(a)
//     function convert(){
//     var dec = parseInt(a,8);
//     return dec;
//     }
// }
// console.log(octalToDecimal('034'));

// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!

function password (a){
    
    function successCallback(a){
        var numbers = /[0-9]/g;
        if(a.length >= 6 && a.value.match(numbers)) {
            console.log('Your password is cool!')
        } else {
            console.log('Your password is invalid!')
        }
    } 
    function errorCallback(a){
        var numbers = /[0-9]/g;
        if(a.length < 6 && (!a.value.match(numbers))) {
            console.log('Your password is invalid!') 
        } else {
            console.log('Your password is cool!')
        }
    } return [successCallback, errorCallback]
}
console.log(password('JSGuru'))

// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

// function filter(a){
//     function odd(a){
//         const b = []
//             for(var i = 0; i < a.length; i++){
//                 if(a[i] % 2 !== 0){
//                     b.push(a[i])
//             } 
//         } return b
//     } return odd(a);
// }
// console.log(filter([2, 8, 11, 4, 9, 3, 7, 9, 10]))