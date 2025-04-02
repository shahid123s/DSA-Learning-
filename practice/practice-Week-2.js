// Bubble Sort 

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([21, 3123, 551, 1, 4, 1235, 14, 5, -1]))


// select sort 

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) min = j;
        }
        if (min != i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}


// console.log(selectionSort([21, 3123, 551, 1, 4, 1235, 14, 5, -1]))


// insertion sort 

function inserstionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let curr = arr[i];
        while (j >= 0 && curr < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = curr;
    }
    return arr
}

// console.log(inserstionSort([21, 3123, 551, 1, 4, 1235, 14, 5, -1]))




// Merge sort


const mergeSort = (arr) => {
    if (arr.length <= 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return mergeHelper(left, right);
}

function mergeHelper(left, right) {
    let sorted = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if(left[i] < right[j]){
            sorted.push(left[i]);
            i++;
        } else {
            sorted.push(right[j]);
            j++;
        }
    }
    return [ ...sorted, ...left.slice(i), ...right.slice(j)];
}

// console.log(mergeSort([21, 3123, 551, 1, 4, 1235, 14, 5, -1]))




// Quick Sort 

function quickSort (arr) {
    if(arr.length <=  1) return arr;
    const pivot = arr[arr.length-1];
    let left = [], right = [];
    for(let i = 0 ; i < arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
// console.log( quickSort([21, 3123, 551, 1, 4, 1235, 14, 5, -1]))





// Hash table Creation

class HashTable {
    constructor(){
        this.table = [];
        this.size = 10;
    }

    _hash(key){
        if(typeof key === 'string'){
            let hash = 0;
            for(let i = 0 ; i < key.length; i++){
                hash += key.charCodeAt(i);
            }
            return hash % this.table.length;
        } else  if (typeof key === 'number'){
            return key % this.table.length;
        } else {
            console.log('UnSupported Key type')
            return;
        }
    }


    set(key, val){
        const index = this._hash(key);
        if(!this.table[index]){
            this.table[index] = [];
        } 

        for(let pair of this.table[index]){
            if(pair[0] === key){
                pair[1] = val;
                return;
            }
        }
        this.table[index].push([key, val]);
    }

    get(key){
        const index = this._hash(key);
        for(let pair of this.table[index]){
            if(pair[0] ===key){
                return pair[1];
            }
        }
        return 'No Value found on that key'
    }

    print(){
        console.log(this.table);
    }
}




// lenear probing 

// Hash is same  but on set and get method changes that will be like;

function set(key, val){
    let index =this._hash(key);

    while(this.table[index]){
        index = (index +1 ) % this.table.length;
    }
    this.table[index] = [key, val];
}

function get(key){

    let index = this._hash(key)
    while(this.table[index]){
        if(this.table[index][0] === key){
            return this.table[index][1];
        }
        index = (index +1 ) % this.table.length;
    }
}




// Stack implementation



class Stack {
    constructor(){
        this.stack = [];
    }

    push(ele){
        this.stack.push(ele);
    }
    pop(){
        if(this.isEmpty()){
            return "nothing to pop"
        }
        this.stack.pop();
    }
    isEmpty(){
        return this.stack.length === 0
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is Empty No Peek Element"
        }
        this.stack[this.stack.length - 1];
    }
    size(){
        return this.stack.length;
    }
    print(){
        console.log(this.stack)
    }
}



// Linked List implentation of Stack


class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class StackLinkedList {
    constructor(){
        this.top = null;
        this.size = 0;
    }


    push(ele){
        const newNode = new Node(ele);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
    pop(){
        if(this.isEmpty()) return "Stack is empty"
        let popEle = this.top;
        this.top = this.top.next;
        this.size--;
        return popEle
    }
    isEmpty(){
        return this.size === 0;
    }

    peek (){
        if(this.isEmpty()) return "Stack is Empty";
        return this.top.val;
    }
    getSize(){
        return this.size;
    }
    display(){
        let curr = this.top
        let stack = []
        while(curr){
            stack.push(curr.val);
            curr = curr.next;
        }
        return `Stack is   ${stack}  <- opening place`
    }
}








// Queue Implmentation 


class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(ele){
        this.queue.push(ele)
    }
    dequeue(){
        if(this.isEmpty()) return "Queue is Empty";
        return this.queue.shift()
    }
    peek(){
        if(this.isEmpty()) return 'Queue is Empty';
        return this.queue[0];
    }

    isEmpty(){
        return this.queue.length === 0
    }
    clear(){
        this.queue = [];
        return "Queue is empty Now";
    }
}

// Circular queue

function myCircularQueue (size = 5){
    this.size = size;
    this.queue = [];
}


myCircularQueue.prototype.enqueue = function (ele) {
    if(this.queue === this.size){
        return 'Circular queue is Full';
    }
    this.queue.push(ele);
}

myCircularQueue.prototype.dequeue = function(){
    if(this.queue.length === 0) return "Stack is Empty";
    return this.queue.shift(); 
}

myCircularQueue.prototype.peek = function (){
    if(this.queue.length === 0) return 'Stack is Empty';
    return this.queue[0];
}

myCircularQueue.prototype.isEmpty = function (){
    return this.queue === 0
}


// Stack using queue 
class StackUsingQueue {
    constructor(){
        this.queue1 = [];
        this.queue2 = [];
    }

    push(val) {
        while(this.queue1.length > 0){
            this.queue2.push(this.queue1.shift())
        }
        this.queue1.push(val);
        while(this.queue2.length > 0){
            this.queue1.push(this.queue2.shift());
        }
    }
    pop(){
        if(this.queue1.length === 0) return "Nothing to pop";
        return this.queue1.shift();
    }

    peek (){
        return this.queue1[0];
    }
}


// Queeu using Stack 



class QueueUsingStack {
    constructor(){
        this.stack = [];
        this.temp = [];
    }

    enqueue(ele){
        while(this.stack.length > 0){
            this.temp.push(this.stack.pop())
        }
        this.stack.push(ele);
        while(this.temp.length > 0){
            this.stack.push(this.temp.pop);
        }
    }
    dequeue(){
        this.stack.pop();
    }
    isEmpty(){
        return this.stack.length === 0;

    }
}




// Merge two unsorted different length array

const mergeSor =  (arr)  => {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSor(arr.slice(0, mid));
    let right = mergeSor(arr.slice(mid));
    return merge(left, right);
}


function merge (left, right) {
    let sorted = [];
    let i = 0 , j = 0;
    // console.log(left, right , 'Left and Right ')
    while(i < left.length && j < right.length){
        if(left[i] < right[j]) {
            sorted.push(left[i]);
            i++
        } else  {
            sorted.push(right[j]);
            j++ 
        }
    }
    console.log(sorted, left , right, 'HEre')
    return [...sorted,...left.slice(i),...right.slice(j)];
}


console.log(mergeSor([21, 3123, 551, 1, 4, 1235, 14, 5, -1]), 'last ane')


// Quick sort 


function quick (arr) {
    if(arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = [], right = [];
    for(let i = 0 ; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else right.push(arr[i]);
    }
    return [...quick(left), pivot, ...quick(right)]
}


console.log(quick([21, 3123, 551, 1, 4, 1235, 14, 5, -1]), 'last ane')




// 

// function selc(arr) {

//     for(let i = 0 ; i <arr.length; i++){
//         let min = i;
//         for(let j = i +1 ; j <arr.length ; j++){
//             if(arr[min] > arr[j]){
//             min = j                
//             }
//         }
//         if(min != i){
//             [arr[min], arr[i]] = [arr[i], arr[min]];

//         }
//     }
// }


// function ins (arr) {
//     for(let i= 1; i < arr.length ; i++){
//         let curr = arr[i];
//         let j = i -1 ;

//         while(j >= 0 && curr < arr[j]){
//             arr[j+1] = arr[j];
//             j--
//         };
//         arr[j+1] = curr;
//     }
//     return arr;
// }





function select (arr) {
    for(let i  = 0;  i < arr.length; i++){
        let min = i;
        for(let j = i +1  ; j<arr.length; j++){
            if(arr[min] > arr[j]) min = j;
        }
        if(min != i) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
}


function inset(arr) {
    for(let i = 1 ; i < arr.length ; i++){
        let curr = arr[i];
        let  j = i -1 ;
        while( j>= 0 && curr > arr [j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curr;
    };
    return arr
}


function q (arr) {
    if(arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    let left = [] , right = [];
    for(let i = 0 ; i < arr.length -1;i++ ){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else right.push(arr[i]);
    }
    return [...q(left) , pivot, ...q(right)]
}


function me (arr) {
    if(arr.length <= 1)return arr;
    let mid = Math.floor(arr.length / 2);
    let left = me(arr.slice(0, mid));
    let right = me(arr.slice(mid));

    return mH(left, right)
}

function mH (left, right){
    let sorted = [];
    let i = 0, j = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]) {
            sorted.push(left[i]);
            i++
        } else {
            sorted.push(right[j]);
            j++
        }
    }

    return [...sorted, ...left.slice(i), ...right.slice(j)]
}


