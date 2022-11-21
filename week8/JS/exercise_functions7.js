// 1. Write a function named tellFortune that:
// - takes 4 arguments: number of children, partner's name, geographic location, job title.
// - outputs your fortune to the screen like so: 'You will be a X in Y, and married to Z with N kids';
// Call that function 3 times with 3 different values for the arguments.

// function tellFortune(job, location, partner, children) {
//     var future = 'You will be a ' + job + ' in ' + location + ' and married to ' +
//        partner + ' with ' + children + ' kids.';
//         console.log(future);
//     }
    
//     tellFortune('cook', 'Budapest', 'John', 3);
//     tellFortune('teacher', 'Porto', 'Peter', 2);
//     tellFortune('singer', 'Istanbul', 'Mike', 'no');


// 2. Write a function named calculateDogAge that:
// - takes 1 argument: your puppy's age.
// - calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// - outputs the result to the screen like so: 'Your doggie is NN years old in dog years';
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
// years.

// function calculateDogAge(puppyAge) {
//     var result = puppyAge*7;
//     return 'Your doggie is ' + result +' years old in dog years.'
// }
// console.log(calculateDogAge(7))


// 3. Write a function named calculateSupply that:
// - takes 2 arguments: age, amount per day.
// - calculates the amount consumed for rest of the life (based on a constant max age).
// - outputs the result to the screen like so: 'You will need NN to last you until the ripe old age of
// X'
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

// function calculateSupply(age, amountPerDay) {
//     var maxAge = 98
//     var restOfLife = (maxAge - age) * (amountPerDay * 365)
//     return 'You will need ' + Math.round(restOfLife) + ' mints to last you until the ripe old age of ' + maxAge + '.'
// }

// console.log(calculateSupply(30.7, 5,7))


// 4. Create a function called celsiusToFahrenheit:
// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output 'NN°C is NN°F'.
// Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output 'NN°F is NN°C.'
// *NN is actual temperature you need to convert

// function celsiusToFahrenheit(celsius) {
//     var CToF = (celsius*9)/5 + 32;
//     return celsius + '°C is ' + CToF + '°F';
//   }
  
  
//   function fahrenheitToCelsius(fahrenheit) {
//     var FToC = ((fahrenheit - 32)*5)/9;
//     var F = FToC.toFixed(2)
//     return fahrenheit + '°F is ' + F + '°C';
//   }

// console.log(celsiusToFahrenheit(27.5))
// console.log(fahrenheitToCelsius(102))

// 5. Create a function that validates a password to conform to the following rules:
// - Length between 6 and 24 characters,
// - At least one uppercase letter (A-Z).
// - At least one lowercase letter (a-z).
// - At least one digit (0-9).
// - Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
// - Supported special characters: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , .
// - Examples: validatePassword('P1zz@') ➞ false // Too short.
// - validatePassword('iLoveYou') ➞ false // Missing a number.
// - validatePassword('Fhg93@') ➞ true // OK!

// function checkPassword(input) {
//     let upperCase = 'There is no uppercase letter in your password!';
//     let lowerCase = 'There is no lowercase letter in your password!';
//     let isNumberThere = 'There is no number in your password!'
//     let noCharacterRepeating = true;
//     let CheckSpecialCharacters = 'Unsupported character!';
//     let special = /[!@#$%^&*(),.<>\/?]+/;
//     let passwordLength = "Length must be between 6 and 24 characters!";
//     let checkForNumber = input.split('')
//     let finalCheck = '';

//         if(input.length > 6 && input.length < 24) {
//             passwordLength = true;
//         }
//         for (i = 0; i < input.length; i++){
//             if (input[i] == input[i].toUpperCase()){
//                 upperCase = true;
//             }
//         }
//         for (i = 0; i < input.length; i++){
//             if (input[i] == input[i].toLowerCase()){
//                 lowerCase = true;
//             }
//         }
//         for (i = 0; i < input.length; i++){
//             if(Number.isInteger(parseInt(checkForNumber[i]))){
//                 isNumberThere = true;
//             }
//         }

//         for (i = 0; i < input.length; i++){
//             if(input[i] == input[i+1] && input[i] == input[i+2]){
//                noCharacterRepeating = 'You have a character repeating more then 2 times, diversify your password!';
//             }
//         }

//         if(special.test(input)){
//             CheckSpecialCharacters = true;
//         }

//         if(passwordLength == true && upperCase == true && lowerCase == true && isNumberThere == true && noCharacterRepeating ==true){
//             finalCheck = `Your password is up to our standards`
//         } else{
//             finalCheck = `Please check password requirements`
//         }
//     console.log(`
//     Password requirements:
//     Password length: ${passwordLength}
//     Uppercase: ${upperCase}
//     Lowercase letters: ${lowerCase}
//     Number characters: ${isNumberThere}
//     No repeating Characters: ${noCharacterRepeating}
//     Special characters: ${CheckSpecialCharacters}
//     Revision of password: ${finalCheck}
//     `)

// }

// checkPassword('hello?')

// 6. Create a function that finds how many prime numbers there are, up to the given integer.
// Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
// primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
// primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29


function primenumber(a) {
    var counter = 0
    for (var i = 2; i < a; i++) {
        b = 0;
      for (var j = 2; j < i; j++) {
          if (i % j == 0){
            b++;
          }
      }
      if (b == 0) {
        counter++;
      }
    }
    return counter;
}

console.log(primenumber(20))


// 7. Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
// reduces back to 1. Items in the arrays will be the same as the length of the arrays.
// Examples:
// diamondArrays(1) ➞ [1],
// diamondArrays(2) ➞ [1, 2, 2, 1]
// diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]

// function DiamondArray(a) {
//     var b = [];

//     for (var i = 1; i <= a; i++) {
//       for (var j = 0; j < i; j++) {
//         b.push(i);
//       }
//     }

//     for (var m = a - 1; m > 0; m--) {
//       for (var n = 0; n < m; n++) {
//         b.push(m);
//       }
//     }

//     return b;
//   }

//   console.log(DiamondArray(6));
