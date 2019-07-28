'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const string = s.split("");;
    const vowels = "aeiou".split("");
    const consonants = [];
    for (let letter of string) {
        let indice = vowels.indexOf(letter);
        if (indice !== -1) {
            console.log(letter);
        } else {
            consonants.push(letter);
        }
    }

    for (let consonant of consonants) {
        console.log(consonant);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}