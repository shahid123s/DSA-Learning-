function selectionSort(arr) {
    for(let i = 0 ; i < arr.length; i++){ 
        let min = i;
        for(let j = i+1 ; j < arr.length; j++ ){
            if(arr[min] > arr[j]) min = j
        }
        if(i != min){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
}

let arr = [32, 312, 3, 1, 3,56, 777, 8,8]

selectionSort(arr);
console.log(arr)


