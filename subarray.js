function subarra(arr){
    let subArr = [];
    for(let i = 0 ; i < arr.length; i++){
        let temp = [];
        for(let j = i; j <arr.length; j++){
            temp.push(arr[j]);
            subArr.push([...temp]);
        }
    }
    return subArr;
}

console.log(subarra([1, 2, 4 ]));



// Kadane's Algorith,

function maxSubArraySum (arr){
    let maxSum = -Infinity;
    let currentSum = 0;

    for(let num of arr){
        currentSum = Math.max(num, currentSum+num);
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
}