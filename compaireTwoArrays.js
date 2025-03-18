// Compairing two array has different methods

// Method 1 - Using JSON.stringify() method

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];

console.log(JSON.stringify(arr1) === JSON.stringify(arr2))


// Method 2 - Using every() method


const compareTwoArrays = (arr1, arr2) => 
    arr1.length === arr2.length && 
    arr1.every((element, index) => element === arr2[index]) 

console.log(compareTwoArrays(arr1, arr2))


// Method 3 - Using Loop 

const compareUsingLoop = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0;  i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}

console.log(compareUsingLoop(arr1, arr2))


// Method 4 - Using Set

const compareUsingSet = (arr1, arr2) => {
    if(arr1.length != arr2.length) return false;

    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    
    for(let ele of set1){
        if(!set2.has(ele)) return false
    }
    return true
}

console.log(compareUsingSet(arr1, arr2))


// Method 5 - Using Map

const compareUsingMap = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false;

    let map1 = new Map();
    let map2 = new Map();

    for(let i = 0; i < arr1.length; i++){
        map1.set(arr1[i], (map1.get(arr1[i]) || 0) + 1);
        map2.set(arr2[i], (map2.get(arr2[i]) || 0) + 1);
    }

    for(let [key, value] of map1){
        if(value !== map2.get(key)) return false;
    }
    return true;
}

