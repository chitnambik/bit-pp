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

function replace1 (a) {
    return replace();
function replace () {
    counter = 0;
    const b = [];
    for(var i = 0; i <= a.length; i++){
        if(a[i] == 'm' || a[i] == 'M'){
            counter ++;
            b.push('*');
        } else if(a[i] !== 'm' || a[i] !== 'M'){
                b.push(a[i]);  
            }
        } return 'output: ' + counter + ', ' + b.join('');
    } 
}
console.log(replace1('prograMming'))