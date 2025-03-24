// delet the lastOcurrence of a number in an array
let arr = [1, 2,3, 4, 3, 2, 5, 2, 5,4,4,]


function deletLastOccurencet ( arr, number) {
    let index = arr.lastIndexOf(number);
    if(index !== -1){
        arr.splice(index, 1);
    }

}


// using binary serach 
// [1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5]
let deletLastOccurent =(arr, number) => {
    arr.sort((a,b) => a-b);
    function helper (arr, number, start = 0, end = arr.length -1){
        if(start > end) return arr;
        const mid = Math.floor((start+ end)/2);
        if((arr[mid] === number && arr[mid+1] === number ) || arr[mid] < number) return helper(arr, number, start = mid+1, end );
        else if(arr[mid] === number && arr[mid+1] !== number ) {
            arr.splice(mid, 1);
            return arr;
        }
        else  return helper(arr, number, start, mid-1);
    }

    return helper(arr, number)
}

console.log(deletLastOccurent(arr, 5), 'here')

// deletLastOccurencet(arr, 5)

// console.log(arr)


// delet the first occurence of a number in an array

function deletFirstOccurence (arr, number) {
    let index = arr.indexOf(number);
     if(index != -1){
        arr.splice(index, 1);
     }
}

// deletFirstOccurence(arr,5);
// console.log(arr);