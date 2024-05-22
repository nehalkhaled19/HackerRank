'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positiveNum = 0
    let negativeNum = 0
    let howManyZero = 0

    // Write your code here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNum++
        }
        else if (arr[i] < 0) {
            negativeNum++
        }
        else {
            howManyZero++
        }
    }
    console.log(positiveNum / arr.length)
    console.log(negativeNum / arr.length)
    console.log(howManyZero / arr.length)
    
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
