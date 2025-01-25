// Question 2 - Fibonacci Number 
// Fibonacci Series =>  third number is the sum of the previous two number --
// if 0 , 1, 1, 2, 3, 5, 8, 13, .... like that 

//F(0) = 0, F(1) = 1,
// F(n) = F(n-1) + F(n-2); for( n > 1);
//Input: n = 3 - -----> output : 2;

// this is the optimised version ;

// const Fibonacci = (num) => {
//     const arr= [0,1]; 

//     for(let i = 2; i <= n; i++){
//         arr.push(arr[n-1] + arr[n-2]);
//     }
//     return arr[n]
// }



// now use recursion --

const fib = (n) => {
    if(n <= 1) return n;
     
    return fib(n - 1) + fib(n -2)
}



// leetcode question 509;