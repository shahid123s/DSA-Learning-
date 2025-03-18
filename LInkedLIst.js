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
//         let currentNode = this.head;
//         while(currentNode.next){
//             if(currentNode.next.value === value){
//                 currentNode.next = currentNode.next.next;
//                 this.length--;
//                 return;
//             }
//             currentNode = currentNode.next;
//         }
//     }

//     // 6. Print the list
//     printList(){
//         const array = [];
//         let currentNode = this.head;
//         while(currentNode){
//             array.push(currentNode.value);
//             currentNode = currentNode.next;
//         }
//         return array;
//     }
// }


