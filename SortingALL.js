// Bubble Sort  - compare adjusent





// Quick Sort 

function quickSort(arr) {
    if(arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for(let i = 0 ; i < arr.length -1 ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}


let arr = [12, 312, 1, 24, 6, 4, 2314, 6, -1, 2.4, 6 ,7]
console.log(quickSort(arr))