// 1. Write a function that checks if a given string contains 5 digits.
// Input: “1b8952abd” 
// Output: true
//     1A. Modify previous task to check if it contains char or number "5". 

//regular function

function numbers(a) {
    var counter = 0;
    var result = '';
    let number = a.split('')
    for(let i = 0; i <= a.length; i++){
        if(Number.isInteger(parseInt(number[i]))){
            counter++; 
        }
        if(counter >= 5){
            result = 'True'
        } else {
            result = 'False'
            } 
        } return result
    } 

console.log(numbers('1b8552abd'))

// // regular function 5
function numbers(input){
    var result = '';
    let splitInput = input.split('');
            for(let i = 0; i <= input.length; i++){
                if(splitInput[i]==5 || splitInput=='5'){
                    result = 'there is a char or Number 5 in the string'
            }
    } return result
}
console.log(numbers('1b8925abd6'))


//anonymous function

var numbers = function(a) {
    var counter = 0;
    var result = '';
    let number = a.split('')
    for(let i = 0; i <= a.length; i++){
        if(Number.isInteger(parseInt(number[i]))){
            counter++; 
        }
        if(counter >= 5){
            result = 'True'
        } else {
            result = 'False'
            } 
        } return result
    } 

console.log(numbers('1b82abd'))

// 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

regular function

function stringReplacement (a) {
    return a.replaceAll('JS', '**')
}
console.log(stringReplacement('Programming in JS is super JS interesting!'))

//anonymous function

var stringReplacement = function (a) {
    return a.replaceAll('JS', '**')
}
console.log(stringReplacement('Programming in JS is super JS interesting!'))

// 3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’ 
// Output: “Good morning” 

//regular function
function insertChar(string, position, char){
    let toArray=Array.from(string)
    toArray.splice(position-1, 0, char)
    return toArray.join('')
}
console.log(Insertchar('Goo morning', 4,'d'))

//anonymous function 
var insertChar = function (string, position, char){
    let toArray=Array.from(string)
    toArray.splice(position-1, 0, char)
    return toArray.join('')
}
console.log(insertChar('Goo morning', 4,'d'))

// 4. Write a function that deletes a character from the given position in the string. 
// Input: “Goodd morning!”, 3 
// Output: “Good morning!” 

//regular function
function deleteChar(str, position) {
   var str = str.slice(0, position) + str.slice(position+1);
        return str
    }
console.log(deleteChar('Goodd morning!', 3));

//anonymous function 
var deleteChar = function(str, position) {
    var str = str.slice(0, position) + str.slice(position+1);
         return str
     }
 console.log(deleteChar('Goodd morning!', 3));

// 5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]

//regular function
function deleteSecondElement(arr) {
      var result = [];
      for (let i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
          result.push(arr[i]);
        }
      } return result;
    }
    console.log(deleteSecondElement([3, 5, 1, 8, 90, -4, 23, 1, 67, 252, 4627]));

//anonymous function 

var deleteSecondElement = function (arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
          if (i % 2 == 0) {
        result.push(arr[i]);
      }
    } return result;
  }
  console.log(deleteSecondElement([3, 5, 1, 8, 90, -4, 23, 1, 67, 252, 4627]));

