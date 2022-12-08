// 1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
// pokrene.



// 2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
// prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
// nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
// godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
// prestupna).



// 3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
// samoglasnika i koliko suglasnika.

// function vowelsConsonatns(a){
//     const b = a.split('')
//     var counterV = 0;
//     var counterC = 0;
//     for(let i = 0; i < b.length; i++){
//         if(b[i] === 'a' || b[i] === 'e' || b[i] === 'i' || b[i] === 'o' || b[i] === 'u'){
//             counterV++
//         } else counterC ++
//     } return ['consonants: ' + counterC,' and vowels: ' + counterV];
// }
// console.log(vowelsConsonatns('lets check with this aaa'));

// 4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
// podataka pojedinačnih elemenata ulaznog niza.

    // function typeOf(a){
    //     const b = [];
    //     for(let i = 0; i < a.length; i++){
    //         b[i] = typeof a[i]
    //     } return b 
    // }
    // console.log(typeOf(['hello', 8392, NaN, Infinity, undefined, 'foew', 23, 2e2]));


// 5. Kreirati funkciju koja prijvata niz stringova kao ulazni parametar, a na izlazu
// ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
// “pp”, “as23s”, “00sd”] => rezultat [“pp”].


    // function stringCheck(a){
    //     const b = [];
    //     var afterSplit = '';
    //         for(let i = 0; i < a.length; i++){
    //             afterSplit = a[i].split('')
    //         if (isNaN(afterSplit[i]) == true){
    //             b.push(a[i]) 
    //         }
    //     } return b
    // }
    // console.log(stringCheck(['12bb','pp', 'as23s', 'fjoew3', 'fowe']));


// 6. Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
// dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
// string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
// broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
// ili “not found” ako nema ponavljanja.

// Primer 1: 'Computer' => [8, 'C', 'r', 'pu', 'not found'] ,
// Primer 2: 'Science' => [7, 'S', 'e', 'e', '@ index 5']

// 7. Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
// bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
// se ne ponavljaju.

// 8. Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
// Primer 1: ([2, 3, 4, 5], N=2) => [[2, 3], [4, 5]]
// Primer 2: ([2, 3, 4, 5, 6], N=3) => [[2, 3, 4], [5, 6]]

    function createSubArrays(a, n){
        const b = [];
        for(let i = 0; i < a.length; i++){
            if(n > 0){
                b.push(a[i]);
                b = b.length(n)
            }
        } return b
    }
    console.log(createSubArrays([2, 3, 4, 5], 2))
