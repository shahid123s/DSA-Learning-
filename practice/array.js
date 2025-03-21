// find the second largest in an arr

// function findSecondLast(arr) {
//    let set = new Set(arr);
//    let sec = [...set].sort((a,b) => a-b)
//    return sec[sec.length - 2 ];

// }
// one way ;

function findSecondLast(arr) {
    let max = Number.MIN_SAFE_INTEGER
    let secMax = Number.MAX_SAFE_INTEGER

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            secMax = max
            max = arr[i]
        } if(arr[i] != max && arr[i] > secMax){
            secMax = arr[i];
        }
    }
 return secMax
 }

// console.log(findSecondLast([1,2,6, 3,4, 5 , 5]))


// remove the duplicate from sorted array in adn add _

function removeDuplicatesUsingBuiltinMethod (arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == arr[i+1]){
            arr.splice(i+1,1);
            arr.push('_');
            i--;
        }
    }
}
let arr = [1,1,2]
// removeDuplicatesUsingBuiltinMethod(arr);
// console.log(arr)




function removeDuplicate(arr) {
    let i = 0;
    for(let j = 0; j < arr.length; j++){
        if(arr[i] !=  arr[j]){
            i++;
            arr[i] = arr[j];
        };
    };
    return i;

}

console.log(removeDuplicate(arr))
console.log('shahid'.substring(9).length)