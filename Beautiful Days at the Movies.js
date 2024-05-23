'use strict';

const fs = require('fs');

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
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
    // Write your code here
    let arr = []
    for (let l = i; l <= j; l++) {
        arr.push(l);
    }
  return countBeautifulDays(arr,k)
}
function countBeautifulDays(arr,k){
    let numOfBeautifulDays = 0
     arr.forEach(e => {
       let reversed = reverseNumber(e);
        let result = (e - reversed) / k;
        Number.isInteger(result) == true ? numOfBeautifulDays ++ : ''
    })
    return numOfBeautifulDays
}
function reverseNumber(num) {
    // Convert the number to a string
    let numStr = num.toString();

    // Reverse the string
    let reversedStr = numStr.split('').reverse().join('');

    return reversedStr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const i = parseInt(firstMultipleInput[0], 10);

    const j = parseInt(firstMultipleInput[1], 10);

    const k = parseInt(firstMultipleInput[2], 10);

    const result = beautifulDays(i, j, k);

    ws.write(result + '\n');

    ws.end();
}
