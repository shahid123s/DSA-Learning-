
// Implementation of insertion sort algorithm
// function insertionSort(arr) {
//   // Loop through array starting from second element
//   for (let i = 1; i < arr.length; i++) {
//     // Store current element to be inserted
//     let current = arr[i];
    
//     // Initialize j to look at previous element
//     let j = i - 1;

//     // Move elements greater than current to one position ahead
//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     // Place current element in its correct position
//     arr[j + 1] = current;
//   }

//   return arr;
// }






let arr = [32, 312, 3, 1, 3,56, 777, 8,8]

function insertionSort(arr){
    for ( let i = 1 ; i < arr.length; i++ ){
        let j = i - 1;
        let curr = arr[i];
        while(j >= 0 && curr < arr[j]){
            arr[j+ 1] = arr[j];
            j--;
        }
        arr[j+1] = curr;
    }
}
insertionSort(arr)
console.log(arr)