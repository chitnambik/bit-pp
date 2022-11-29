// 1. Write a program to insert a string within a string at a particular position (default is 1,
    //     beginning of a string).
    //     "My random string", "JS" -> "JS My random string";
    //     "My random string", "JS", 10 -> "My random JS string"
    
    function addAString(a, b, c){
        return a.slice(0, c) + b + a.slice(c);
    } 
    console.log(addAString('My random string', 'JS ', 10));
        
    //     2. Write a program to join all elements of the array into a string skipping elements that are
    //     undefined, null, NaN or Infinity.
    //     [NaN, 0, 15, false, -22, "", undefined, 47, null]

        function joinAll(a){
            var result = '';

            for(let i = 0; i < a.length; i++){
                if(a[i] === null){
                    continue;
                } else if(a[i] === undefined){
                        continue;
                } else if(isNaN(a[i])){
                        continue;
                } else if(a[i] === Infinity){
                        continue;
                } else {
                    result += a[i];
                } 
            } return result 
        }
        console.log(joinAll([NaN, 0, 15, false, -22, "", undefined, 47, null]));
        
    //     3. Write a program to filter out falsy values from the array.
    //     [NaN, 0, 15, false, -22, "", undefined, 47, null] -> [15, -22, 47]

        function filterFalsy(a){
            const b = [];
            for(let i = 0; i < a.length; i++){
                if(a[i]){
                    b.push(a[i])
                } 
            } return b
        }
        console.log(filterFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]))

    //     4. Write a function that reverses a number. The result must be a number.
    //     12345 -> 54321 // Output must be a number

        function reverse(a){
            var string = '' + a
            var result = '';
            for (var i = string.length - 1; i >= 0; i--) {
                result += string[i];
              } return result
        }
        console.log(reverse(1234567));
       
    //     5. Write a function to get the last element of an array. Passing a parameter 'n' will return the
    //     last 'n' elements of the array.
    //     [7, 9, 0, -2], 4 -> -2
    //     [7, 9, 0, -2], 2 -> [0, -2]

        function lastElement(a, n){
            const result = [];
                for(let i = a.length - n; i < a.length; i++){
                result.push(a[i])
            } return result
        } 
        console.log(lastElement([7, 9, 0, -2], 2))

        
    //     6. Write a function to create a specified number of elements with pre-filled numeric value
    //     array.
    //     6, 0 -> [0, 0, 0, 0, 0, 0]
    //     2, "none" -> ["none", "none"]
    //     2 ->; [null, null]

        function preFilled(a, b = null){
            var result = [];
            for (let i = 0; i < a; i++){
                result[i] = b
            } return result
        }
        console.log(preFilled(2, 0))
        
    //     7. Write a function that says whether a number is perfect.
    //     28 -> 28 is a perfect number.
    //     Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
    //     of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
    //     as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
    //     (including itself).
    //     E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
        
    //     Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
    //     perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

    function perfectNumber(a){
        var b = 0;
        result = ''
        for(var i = 1; i <= a/2; i++){
         if(a % i === 0){
            b += i;
          }
        }
        if(b === a && b !== 0){
            result = 'It is a perfect number.';
        } else {
            result = 'It is not a perfect number.';
        }   return result
    } 
    console.log(perfectNumber(8128)); 
        
    //     8. Write a function to find a word within a string.
    //     "The quick brown fox", "fox" -> "'fox' was found 1 times"
    //     "aa bb cc dd aa", "aa" -> "'aa' was found 2 times"

        function findAWord(a, b){
            var counter = 0
            for(let i = 0; i < a.length; i++){
                if(a[i] === 'b'){
                counter++
                }
            } return b + ' was found ' + counter + ' times'
        }
        console.log(findAWord("aa bb cc dd aa", "aa"))

    //     9. Write a function to hide email address.
    //     "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

        function hideEmail(a){
            var b = '';
            var monkey = 0;

            for(let i = 0; i < a.length; i++){
                if(a[i] === '@'){
                    monkey = i;
                }
            } 
            for(let j = 0; j < a.length; j++){
                if(j > 2 && j < monkey) {
                    b += '*';
                } else {
                    b += a[j]
                }
            }  return b 
        }
        console.log(hideEmail('myemailaddress@bgit.rs'))
        

    //     10. Write a program to find the most frequent item of an array.
    //     [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

    function mostFrequent(a) {
        var most = 0;
        var counter = 0;
        var repeated = '';
  
        for (var i = 0; i < a.length; i++) {
          for (var j = i; j < a.length; j++) {
            if (a[i] === a[j]) {
              counter++;
            }
            if (most < counter) {
              most = counter;
              repeated = a[i];
            }
            } counter = 0;
        } return most + ' times ' + repeated
    } 
    console.log(mostFrequent([3, "a", "a", "a", 2, 3, 3, 3, "a", 3, "a", 2, 4, 9, 3]));