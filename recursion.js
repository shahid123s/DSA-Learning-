// Convert a loop to recursion 

// function multiply (arr) {
//     let product = 1;
//     for(let i = 0; i < arr.length; i++){
//         product *= arr[i];
//     }
//     return product
// }


// This has to convert to recursion 


function recursionMult (arr)  {
    if(arr.length === 0) return 1;   
    return arr[arr.length-1] * recursionMult(arr.slice(0, arr.length-1))

}


// Factorial or N
// n => 5 * 4 * 3 * 2 * 1 = 120
// 0! = 1

function fac (num) {
    if(num === 1) return 1;
    return num * fac(num-1)
}

console.log(fac(5


))

// function rangeOfNumbers(startNum, endNum) {
//     if(endNum < startNum) {                                               --  this one is better b
//         return [];
//     } else {
//         const numbers = rangeOfNumbers(startNum, endNum - 1);
//         numbers.push(endNum);
//         return numbers;
//     }
// }


// also my logic 

function rangeOfNumber (start, end){
    if(start == end) return [end]
    return [start, ...rangeOfNumber(start+1, end)]
}

function fibancio (n) {
    if(n <= 1) return n;
    return fibancio(n-1) + fibancio(n-2)
}

console.log(fibancio(8))