// Question : 4 Two Sum

// given an array and a target  return the index of the array which satisfy the is to equal to the target 
// 

// Brute Force

// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+ 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) return true
            
//         }
        
//     }
// }


// using js Object 

const twoSum  = (nums, target) => {
    let obj = {};
    for(let i = 0; i < nums.length; i++){
        let n = nums[i];
        if(obj[target - n] >= 0) return [obj[target-n], i];
        else obj[n] = i;
    }
}

console.log(twoSum([2,7,11,15], 9))