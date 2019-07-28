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

function getGrade(score) {
    let grade;
    let letters = "FEDCBA".split("");
    // Write your code here
    for (let i = 1; i <= 6; i++) {
        if (score <= i * 5) {
            grade = letters[i - 1]
            break;
        }
    }
    return grade;
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}