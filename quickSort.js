// function quickSort (arr) {
//     if(arr.length <= 1) return arr;

//     let pivot = arr[arr.length - 1];
//     let left = []
//     let right = [];
//     for(let i = 0; i < arr.length - 1 ; i++){
//         if(arr[i] < pivot) left.push(arr[i]);
//         else right.push(arr[i]);
//     }
//     return [...quickSort(left),pivot, ...quickSort(right)];
// }


console.log(quickSort([8,20,-2,4,-6,-1]))
// Problem 1: Incorrect loop condition in the for loop
// The current condition 'arr.length - 1' evaluates to a number and doesn't properly check the loop bounds
// This causes an infinite loop
// Should be: i < arr.length - 1

// Problem 2: Right array includes all elements >= pivot
// Currently pushing all non-left elements to right array, including the pivot itself
// This causes duplicate elements in the result

// Problem 3: No handling for empty arrays
// While there is a check for arr.length <= 1, explicit null/undefined check would be safer

// Corrected version:
function quickSort(arr) {
    if (!arr || arr.length <= 1) return arr;
    
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}