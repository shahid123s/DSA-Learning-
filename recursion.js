// why recursion is used ?

/**
 * Recursion is particularly useful for solving the porblem that can be divided into smaller identical problems.
 * Tree and Graph Traversal : Recursion is ideal for travresing hirearchical data structure like Tree and Graph 
 * Divide and conqure Algorithums : Many algorithms such as merge Sort and quick Sort use recursion to break down problem into smaller subproblems
 * Bracktracking : Recursion is ofter used in backtracking algorithms to explore all possible solutions by trying different choices and backtracking when a solution is not feasible
 * 
 */




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

// console.log(fac(5))

function rangeOfNumbers(startNum, endNum) {
    if(endNum < startNum) {                                              // --  this one is better because of the space complexity 
        return [];
    } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}


// also my logic 

function rangeOfNumber (start, end){
    if(start == end) return [end]
    return [start, ...rangeOfNumber(start+1, end)]
}

function fibancio (n) {
    if(n <= 1) return n;
    return fibancio(n-1) + fibancio(n-2)
}

// console.log(fibancio(8))



function reverseString(str) {
    if(str === "") return "";
    return reverseString(str.substr(1)) + str.charAt(0);
}


// console.log(reverseString("olleh"))  



// Palindrome number  or array 

function palindrom(num) {
    let str = num.toString();
    if(str.length <= 1) return true;
    if(str[0] === str[str.length - 1]) return palindrom(str.slice(1, -1));
    return false;
}

// console.log(palindrom(1223))


function factorial(n, acc = 1) {
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}

// console.log(factorial(5)); // Output: 120

// Tail recursion 

// Tail recursion is a special form of recursion where the recursive call is the last operation in the function.
// This allows the compiler to optimize the recursion by eliminating the need to store the intermediate results on the stack, resulting in better memory usage and potentially faster execution.


// Example factorial number:

function tailFactorial (n, result = 1) {
    if(n=== 1) return result;
    return tailFactorial(n-1, n * result);
}

// console.log(tailFactorial(5))


function sumOfArray(arr){
    if(arr.length === 1) return arr[0];
    return (arr[0]+ sumOfArray(arr.slice(1))) 
}

// console.log(sumOfArray([1,2,3,4,5]))

function findMean (arr, n){            // - want to look more 
    if(n ===1 ) return arr[0];
    return (findMean(arr, n-1) * (n-1) + arr[n-1]) / n
}


let arr = [1,2,3,4,5]
// console.log(findMean(arr , arr.length ))
// console.log(sumOfArray([1,2,3,4,5]))



// print n to 1 number using recursion

function print(n){
    if(n === 0 ) return  ;
    console.log(n);
    return print(n-1)
}

// print(5)

// sum of natural numbers

function sumOfNaturalNum (length){
    if(length === 0) return 0;
    return length + sumOfNaturalNum(length-1)
}

// console.log(sumOfNaturalNum(5))





// using recursion remove the duplicate elements in an array 

// function removeDuplicate (arr) {
//     if(arr.length === 0) return [];

//     const remainingElement = removeDuplicate(arr.slice(1));

//     return remainingElement.includes(arr[0]) ? remainingElement: [arr[0], ...remainingElement];
// }

// console.log(removeDuplicate([1,1,3,3,5 ]))




function removeDuplicate(arr, index = 0, seen = new Set() ){
    if(arr.length === index) return [];

    let current = arr[index];
    console.log(index)
    
    if(seen.has(current)) {
        return removeDuplicate(arr, index+1, seen);
    } 
        seen.add(current);
    

    return [arr[index], ...removeDuplicate(arr, index+1 , seen)]
    
}


// console.log(removeDuplicate([1, 1, 2]))



// remove a special char on a string 

function removeCharInString(str, char){
    if(str.length === 0) return '';
    if(str[0] === char){
      return  removeCharInString(str.slice(1), char)
    }
    return str[0] +  removeCharInString(str.slice(1), char)
}

// console.log(removeCharInString('hello world' , 'o'))

// Remove unique in the element 

function freq (arr, index = 0, fre = {} ) {
    if(arr.length === index) return fre;
    const curr = arr[index];
    fre[curr] = (fre[curr]|| 0 )+ 1
    return freq(arr, index+1, fre)
}

// console.log(freq([1,2,3,3,2,3]));

function removeUnique(arr, freque = freq(arr), index = 0){
    if(arr.length === index) return [];
    let curr = arr[index];
    return freque[curr] > 1? 
    [curr, ...removeUnique(arr, freque, index + 1)]:
    [...removeUnique(arr, freque, index + 1)]
}


// console.log(removeUnique([1,3,2,3,2,3] ))


// Remove first uniqe Element in  array
function removeFirstUnique(arr, freque = freq(arr), index = 0){
    if(arr.length === index ) return [];
    let curr = arr[index];
    if(freque[curr] === 1) return arr.filter(x => x != curr)
    return removeFirstUnique(arr, freque, index+1)
}

console.log(removeFirstUnique([1, 2, 3, 4, 4, 3]))


// Delete Linked list using recursion 

function deleteLinkedList (head) {
    if(!head) return null ;
    let next = head.next
    head.next = null;;
    return deleteLinkedList(next);
}




// Product of Two Number using recursion 


function product(x, y){
    if(y === 0) return 0;
    return x +product(x, y-1)
}

console.log(product(3, 5))