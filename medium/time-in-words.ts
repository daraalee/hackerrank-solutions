'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h: number, m: number): string {
    
    let time = '';
    let words = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'quarter',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
        'twenty one',
        'twenty two',
        'twenty three',
        'twenty four',
        'twenty five',
        'twenty six',
        'twenty seven',
        'twenty eight',
        'twenty nine',
        'half',
        'tirty one',
        'tirty two',
        'tirty three',
        'tirty four',
        'tirty five',
        'tirty six',
        'tirty seven',
        'tirty eight',
        'tirty nine',
    ]

    if(m === 0){
        time = `${words[h -1]} o' clock`;
    }
    else if(m === 1){
        time = `${words[m -1]} minute past ${words[h -1]}`;
    }
    else if(m === 30 || m === 15){
         time = `${words[m -1]} past ${words[h -1]}`;
    }
    else if(m < 30){
        time = `${words[m -1]} minutes past ${words[h -1]}`;
    }
    else if(m==45){
        time = `${words[60 - m -1]} to ${words[h]}`
    }
    else{
        time = `${words[60 - m -1]} minutes to ${words[h]}`
    }
        
    return time;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const h: number = parseInt(readLine().trim(), 10);

    const m: number = parseInt(readLine().trim(), 10);

    const result: string = timeInWords(h, m);

    ws.write(result + '\n');

    ws.end();
}
