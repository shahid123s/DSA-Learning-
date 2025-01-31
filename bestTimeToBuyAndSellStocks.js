// // Question  5 - 

// //leetcode question number

// //Brute force method 
// // const maxProfit = (price)=> {
// //     let largest = 0;
// //     for(let i = 0 ; i < price.length - 1; i++){
// //         for (let j = i +1; j < price.length; j++) {
// //             if(largest < price[j] - price[i] ) largest = price[j] - price[i];

// //         }
// //     }
// //     return largest;
// // }


// // Greedy algorithum
const maxProfit = (prices) => {
    let min = prices[0];
    let profit = 0;

    for(let i = 0; i< prices.length; i++){
        let currentProfit = prices[i] - min;
        profit = currentProfit >  profit ? currentProfit: profit; 
        if(min > prices[i]) min = prices[i];

    }
    return profit;
}

console.log(maxProfit([7,1,5,3,6,4]))