//  Linked list are made up of small small nodes and each node has a value and a pointer to the next node 

// 1. Create a Node class
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// 2. Create a LinkedList class
// class LinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     // 3. Add a node to the end of the list
//     append(value){
//         const newNode = new Node(value);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//     }

//     // 4. Add a node to the beginning of the list
//     prepend(value){
//         const newNode = new Node(value);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode; 
//         }else{
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//     }

//     // 5. Delete a node from the list
//     delete(value){
//         if(!this.head) return;
//         if(this.head.value === value){
//             this.head = this.head.next;
//             this.length--;
//             return;
//         }
//         let curr = this.head;
//         while(curr.next){
//             if(curr.next.value === value){
//                 curr.next = curr.next.next;
//                 this.length--;
//                 return;
//             }
//             curr = curr.next;
//         }
//     }

//     // 6. Print the list
//     printList(){
//         const array = [];
//         let curr = this.head;
//         while(curr){
//             array.push(curr.value);
//             curr = curr.next;
//         }
//         return array;
//     }
// }


// 2 . Create a SinglyLinkedList class


class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addNode(value){
        const newNode = new Node (value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length ++;
    }

    addLast (value){
        const newNode = new Node (value);
        if(!this.head) {
            this.addNode(value);
            return;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next
        }
        curr.next = newNode;
        this.tail = newNode;
        this.length ++;
    }
    
    addAt (value, index) {
        const newNode = new Node (value);
        if(index > this.length || index < 0) return console.log('Invalid Index');
        
        let curr = this.head;
        if(index === 0) {
            this.addFirst(value);
            return ;
        }
        
        if(index === this.length){
            this.addLast(value);
            return ;
        }
        for(let i = 0 ; i < index - 1 ; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
        this.length ++
    }
    
    deleteFirst(){
        if(!this.head) return ;
       this.head = this.head.next;
       this.length --
       if(!this.head) this.tail = null;
}

    deleteLast () {
        if(!this.head) return ;
        
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            this.lenght = 0;
            return ;
        }
        
        let curr = this.head;
        while(curr.next.next) {
            curr = curr.next;
        }
        curr.next = null;
        this.tail = curr;
        this.length --;
        
        if( this.length === 0 ) this.tail = null
    }

    printList(){
                const array = [];
                // console.log(this.tail)
                let curr = this.head;
                while(curr){
                    array.push(curr.value);
                    curr = curr.next;
                }
                return array;
            }


    deleteNode (value){
        if(!this.head) return ; //
        
        if(this.head.value === value){ //
            this.head = this.head.next; //
            this.lenght--; //
            if(this.lenght === 0) this.tail = null; //
            return //
        }

        let curr = this.head;

        while(curr.next && curr.next.value !== value){
            curr = curr.next;
        }

        if(!curr.next) {
            console.log('Invalide Value ');
            return 
        }

        curr.next = curr.next.next
        this.lenght--;
        if(curr.next === null) this.tail = curr;
    }

    printListReverse (){
        let arr = [];
        let curr = this.head;
        while(curr){
            arr. unshift(curr.value);
            curr = curr.next;
        }
        return arr;
    }

    // 1 - 2 - 3 - 4

    reverseList() {
        let curr = this.head;
        let temp = null;
        
        while(curr) {
            let temp = curr.next;
            curr.next  = 
            curr.next.next = curr;

        }
    }

    addNodeAfterValue(value, node){
        let curr = this.head;
        const newNode = new Node(node)
        if(curr.value === value){
            let temp = curr.next;
            newNode.next = temp;
            curr.next = newNode;

        }

        while(curr.next && curr.next.value !== value ){
            curr = curr.next;
        }
        if(!curr.next) {
            console.log('Invalid Value');
            return;
        }
        let temp = curr.next;
        curr.next = newNode;
        newNode.next = temp;
        if(!newNode.next) this.tail = newNode;


    }

    addNodeBeforeValue(value, node) {
        if (!this.head) return; // If list is empty, return
    
        const newNode = new Node(node);
    
        // Case: Insert before the first node
        if (this.head.value === value) {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return;
        }
    
        let prev = null;
        let curr = this.head;
    
        // Traverse the list to find the value
        while (curr && curr.value !== value) {
            prev = curr;
            curr = curr.next;
        }
    
        // If value is not found
        if (!curr) {
            console.log('Invalid Value');
            return;
        }
    
        // Insert the new node before the found node
        prev.next = newNode;
        newNode.next = curr;
        this.length++;
    }


     removeDuplicate(){

     }

}

const list = new SinglyLinkedList();
list.addNode(1);
list.addLast(5);
list.addNode(6);
list.addNode(7);
list.addAt(8, 2);
list.deleteNode(5);
// console.log(list.printList())//
list.addNodeBeforeValue(7, 9)
console.log(list.printList())




function converArrToLinkedList (arr) {
    const list = new SinglyLinkedList()
    for(let i = 0 ; i < arr.length; i ++){
        list.addLast(arr[i]);
    }
    return list;
}

const arrLis = converArrToLinkedList([1, 2, 3, 4, 5, ])

console.log(arrLis.printListReverse())







// var swapPairs = function(head) {
//     if(!head || !head.next) return head;
//     let curr = head;

//         let temp = curr.next;
//         console.log(curr.val, curr.next.val)
//         curr.next = curr.next.next;
//         curr.next.next = curr


//     return head;
// };

// const cons = (head, tail) => {
//     let curr = head
//     while(curr.next){
        
//         console.log(curr.val, curr.next.val);
//         curr = curr.next;
//     }
// }

// function ListNode(val, next = null) {
//     this.val = val;
//     this.next = next;
// }

// // Creating a linked list: 1 -> 2 -> 3 -> 4
// let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

// // swapPairs(head)
// cons(head)






// Creating a doubly linked list

class DoubleNode {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
};

class DoublyLinkedList{
    constructor(){
        this.head= null;
        this.tail = null;
        this.value = null;
    }
    addNode(value){
        const newNode = new DoubleNode(value);
        if(!this.head){
            this.head= newNode;
            this.tail = newNode
        }
        else  {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    addFirstNode(value){
        const newNode = new DoubleNode(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
    }

    print(){
        if(!this.head) return ;
        let curr = this.head;
        let arr = []
        while(curr){
            arr.push(curr.value);
            curr = curr.next;
        }
        return arr
    }

    traverseBackwart(){
        let arr = [];
        let curr = this.tail;
        while(curr){
            arr.push(curr.value);   
            curr = curr.prev;
        }
        return arr
    }

    count(){
        let size = 0;
        let curr = this.head;
        while(curr){
            size++
            curr= curr.next;
        };
        return size
    }


    // Insert At last if tail is not given 
    insertLast(value){
        const newNode = new DoubleNode(value);
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = newNode;
        newNode.prev = curr;
    }
    

    // Insert at a specific position 
    insertAt(value, index){
        const newNode = new DoubleNode(value);
        let curr  = this.head;
        if(index === 0){
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            return;
        }
        let i = 0;
        while(i < index - 1){
            curr = curr.next;
            i++
        };
        // console.log(curr, i, index, )
        curr.next.prev = newNode;
        newNode.next = curr.next;
        curr.next = newNode;
        newNode.prev = curr;
    }
}

let dList = new DoublyLinkedList();

dList.addFirstNode(2)
dList.addNode(6)
dList.addNode(7)
dList.addNode(8)
dList.addNode(9)
dList.addNode(10)
dList.addFirstNode(3)
dList.addFirstNode(1)
dList.addFirstNode(5)
dList.insertAt(11,4)
console.log(dList.print())
// console.log(dList.traverseBackwart())
console.log(dList.count())



// insertion at begining of the Doubly linked list




