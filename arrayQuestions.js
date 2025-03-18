// delet the lastOcurrence of a number in an array
let arr = [1, 2,3, 4, 3, 2, 5, 2, 5,4,4,]


function deletLastOccurencet ( arr, number) {
    let index = arr.lastIndexOf(number);
    if(index !== -1){
        arr.splice(index, 1);
    }

}

// deletLastOccurencet(arr, 5)

// console.log(arr)


// delet the first occurence of a number in an array

function deletFirstOccurence (arr, number) {
    let index = arr.indexOf(number);
     if(index != -1){
        arr.splice(index, 1);
     }
}

deletFirstOccurence(arr,5);
console.log(arr);