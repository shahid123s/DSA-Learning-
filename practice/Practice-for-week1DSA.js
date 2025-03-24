// // let arr = [1, 2,3, 4, 3, 2, 5, 2, 5,4,4,]
// // // Delete the lastOccurente of a number in an array ;

// // function deleteLastIndex (arr, num){
// //     let index = arr.lastIndexOf(num);
// //     if(index == -1){
// //         return arr
// //     }
// //     return arr.splice(arr[index],1)
// // }

// // // by using binary Search

// // function deletLastOccurence (arr, num){
// //     arr.sort((a, b) => a-b);

// //     function helper(arr, num, start = 0, end = arr.length-1){
// //         if(start > end) return arr;
// //         const mid = Math.floor((start + end) / 2);
// //         console.log(arr[mid])
// //         if((arr[mid] === num && arr[mid+1] === num) || (arr[mid] < num ) ) return helper(arr,num, mid+1, end);
// //         else if ( arr[mid] > num ) return helper(arr, num, start,  mid-1);
// //         else if( arr [mid]  === num) {
// //             arr.splice(mid,1);
// //             return arr;
// //         }
// //     }
// //     return helper(arr, num)
// // }

// // // console.log(deletLastOccurence(arr, 5))
// // // console.log(arr)

// // // find fibanacio series 

// // function fib (n) {
// //     if(n <= 1) return n;
// //     return fib(n-2) +fib(n-1);
// // }

// // // console.log(fib(6))



// // // Delet a node after a node 

// // function deleteNodeAfter (node){
// //     let curr = this.head;
// //     while(curr.val != node){
// //         curr = curr.next;
// //     } ;
// //     curr.next = curr.next.next;
// // };


// // function createAtFirst () {
// //     let newNode= new Node()
// //     if(!this.head) {
// //         this.head = newNode;
// //     }
// // }


// // function fac (n) {
// //     if(n <= 1 ) return 1;
// //     return fac(n-1) * n;
// // }

// // // return a range of numb 

// // function range(start, last) {
// //     if(start > last) return []

// // }

// // function revStr (str) {
// //     if(str == '') return '';
// //     return  revStr(str.substr(1)) + str[0]
// // }

// // console.log(revStr('shahid'))

// // function palindrom(x) {
// //     let str = x.toString();
// //     function helper(str, start = 0, end = str.length -1){
// //         if(start === end) return true;  
// //         if(str[start] === str[end]) return helper(str, start+1, end-1)
// //             return false
// //     }
// //     return helper(str)
// // }


// // console.log(palindrom(121))




// // R

// class ListNode {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     addNode(val){
//         const newNode = new ListNode(val);
//         if(!this.head) {
//             this.head = newNode;
//             this.tail =newNode;
//             this.size++;
//             return
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         this.size++;
//     }

//     addLast(val){
//         const newNode = new ListNode(val);
//         if(!this.head) {
//             this.size++;
//             this.head = newNode;
//             this.tail =newNode;
//         }
//         let curr = this.head;
//         while(curr.next){
//             curr = curr.next;
//         }
//         curr.next = newNode;
//         this.tail = newNode
//         this.size++;

//     }

//     addAt(position, val){
//         if(position> this.size  || position < 0) return 'Invalid Index';

//         if(position === 0) {
//             this.addNode(val);
//             return;
//         };
//         if(position === this.size  ){
//             this.addLast(val)
//             return;
//         }
//         let curr = this.head;
//         // 0  - 1 - 2 - 3 -
//         for(let i = 0; i < position -1   ; i++){
//             curr = curr.next;
//         }
//         const newNode = new ListNode(val);
//         newNode.next = curr.next;
//         curr.next = newNode
//     }

//     deletFirst(){
//         let curr = this.head;
//         this.head = curr.next;
//         this.size--;
//     }
//     deleteLast(){
//         let curr = this.head;
//         while(curr.next.next){
//             curr = curr.next;
//         }
//         this.tail = curr
//         curr.next = null;
//     }

//     deletAt(position) {
//         if(position < 0 || position > this.size) return 'Invalid Index';
//         let curr = this.head

//         // 0 ,1, 2, 3, 4, 5 
//         for(let i = 0 ; i < position -1 ; i++){
//             curr = curr.next;
//         };
//         curr.next= curr.next.next;
//         this.size--
//     }

//     reverseList (){
//         let curr = this.head;
//         let prev = null;

//         while(curr){
//             let temp = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = temp;
//         }

//         this.head = prev;

//         while(prev.next){
//             prev = prev.next;
//         }
//         this.tail = prev;

//     }

//     reverseLinkedList(){
//         let curr = this.head;
//         let prev = null;

//         while(curr){
//             let temp = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = temp;
//         }

//         this.head = prev
//     }
//     print(){
//         let arr = [];
//         let curr =this.head;
//         console.log(this.head, 'head')
//         console.log(this.tail, 'tail')
//         console.log(this.size, 'size')

//         while(curr){
//             arr.push(curr.val);
//             curr = curr.next;
//         }
//         return arr;
//     }


// }

// const list = new SinglyList();
// list.addNode(1);
// list.addNode(0);
// list.addLast(2)
// list.addLast(3)
// list.addLast(5)
// // console.log(list.print())
// list.addAt(4,4)
// // console.log(list.print())
// // list.deletFirst()
// // list.deleteLast()
// // list.deletAt(2)

// console.log(list.print())
// list.reverseList();
// console.log(list.print())







// Sum of natural number using recursion 

function sumOfNaturalNumber(length) {
    if (length === 0) return 0;
    return length + sumOfNaturalNumber(length - 1)
}

// console.log(sumOfNaturalNumber(5))


// Using recursion move the duplicate elements in an array 

function removeDuplicate(arr, index = 0) {
    if (arr.length === 0) return [];

    let remaingEle = arr.slice(1);


}



// Remove a char in an integer  

function removeChar(str, char) {
    if (str.length === 0) return '';
    if (str[0] === char) return removeChar(str.substring(1), char);
    return str[0] + removeChar(str.substring(1), char)
}

console.log(removeChar('Hello world', 'o'))


function frequence(arr, index= 0 , freq ={}){
    if(arr.length === 0) return freq
    freq[arr[index]] = (freq[arr[index]] || 0) + 1
    return frequence(arr.slice(1), index, freq)
}

console.log(frequence([1, 1, 2]))

