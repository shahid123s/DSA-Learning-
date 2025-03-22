// Find a number using binary search ;

function findNum (arr, x, start = 0, end = arr.length -1){
        if(start > end) return false;
        let mid = Math.floor((start+end) /2);
        if(arr[mid] == x) return mid;
        if(arr[mid] < x ) return findNum(arr, x, mid+1 , end);
        else return findNum(arr, x, start, mid-1);
}


// console.log(findNum([1,2,3,4,5,6,7,8,9], 5))


// find the first occurence in an array using binary search 

function findFirstOccurence (arr, num, start = 0 , end = arr.length){
    if(start > end) return false;

    let mid = Math.floor((start+ end)/ 2);

    if(arr[mid] === num && arr[mid - 1] !== num  )  return mid;
    else if(arr[mid] >= num) return findFirstOccurence(arr, num, start, mid-1);
    else return findFirstOccurence(arr, num, mid+1, end);
}


// console.log(findFirstOccurence([1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9], 5))


// fint the last occurence in an array using binary search

function findLastOccurence (arr, num, start = 0 , end = arr.length){
    if(start > end) return false;

    let mid = Math.floor((start+ end)/ 2);

    if(arr[mid] === num && arr[mid + 1] !== num  )  return mid;
    else if(arr[mid] > num) return findFirstOccurence(arr, num, start, mid-1);
    else return findFirstOccurence(arr, num, mid+1, end);
}

// console.log(findLastOccurence([1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9], 5))



function countNumberOccurence(arr, x, start = 0, end = arr.length-1) {
    let first = findFirstOccurence(arr, x);
    let last = findLastOccurence(arr, x);
    return last - first+ 1;
}

console.log(countNumberOccurence([1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9], 9));