// Bubble sort  
// inp  nums = [29, 10, 14, 37, 14] 
// swaping the adjusent side elementsm

let arr = [29, 10, 14, 37, 14] 
const bubbleSort = (nums) => {
    for(let i = 0 ; i< nums.length ; i++){
        for(let j =0 ; j < nums.length - i - 1 ; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}
bubbleSort(arr)
console.log(arr)